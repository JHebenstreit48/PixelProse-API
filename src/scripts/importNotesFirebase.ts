import "dotenv/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { marked } from "marked";
import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ---------- Config / envs ----------

// Require SITE_ID so each project is isolated (devscriptstax, pixelprose, etc.)
const SITE_ID = process.env.SITE_ID || "devscriptstax";

// Prefer env var containing JSON; otherwise read serviceAccount.json from disk
const SA_JSON =
  process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
  (fs.existsSync(path.resolve("serviceAccount.json"))
    ? fs.readFileSync(path.resolve("serviceAccount.json"), "utf8")
    : "");

if (!SA_JSON) {
  throw new Error(
    "Missing service account. Set FIREBASE_SERVICE_ACCOUNT_JSON or place serviceAccount.json at repo root."
  );
}

// Force marked to be synchronous
marked.setOptions({ async: false });

// ---------- Firebase Admin init ----------

const app = getApps().length
  ? getApp()
  : initializeApp({
      credential: cert(JSON.parse(SA_JSON)),
    });

const db = getFirestore(app);

// ---------- Content root ----------

// All markdown lives under /seeds/Notes in this repo
const baseDir = path.join(__dirname, "..", "seeds", "Notes");

// Convert absolute file path -> canonical fullPath used in Firestore and frontend
// Example:
//   abs: /.../seeds/Notes/Languages/CFamily/C/Basics/Fundamentals/Introduction.md
//   fullPath: "Languages/CFamily/C/Basics/Fundamentals/Introduction"
const toFullPath = (abs: string): string =>
  path
    .relative(baseDir, abs)
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "");

// Deterministic Firestore doc ID: one doc per siteId + fullPath
// Slashes cannot be in IDs, so we map "/" -> "__"
const docIdFor = (siteId: string, fullPath: string): string =>
  `${siteId}:${fullPath.replace(/\//g, "__")}`;

async function main() {
  // Find all markdown files under seeds/Notes
  const files = await fg(["**/*.md"], { cwd: baseDir, absolute: true });
  console.log(`Found ${files.length} markdown files for SITE_ID="${SITE_ID}"`);

  // Track which doc IDs we (re)wrote this run
  const seenIds = new Set<string>();

  for (const abs of files) {
    const raw = fs.readFileSync(abs, "utf8");
    const { data, content } = matter(raw);

    // Skip empty files
    if (!content || !content.trim()) {
      console.warn(`⚠️ Skipping empty file: ${abs}`);
      continue;
    }

    const fullPath = toFullPath(abs);

    const title =
      (typeof data?.title === "string" && data.title.trim()) ||
      path.basename(fullPath);

    const category =
      (typeof data?.category === "string" && data.category.trim()) ||
      path.dirname(fullPath).replace(/\\/g, "/");

    const bodyMd = content;
    const bodyHtml = marked.parse(bodyMd) as string;

    const docId = docIdFor(SITE_ID, fullPath);
    seenIds.add(docId);

    // Full overwrite (no merge) to ensure the doc matches current file state exactly.
    // If you change frontmatter or content, this replaces the old version cleanly.
    await db.collection("posts").doc(docId).set({
      siteId: SITE_ID,
      fullPath, // used by frontend fetch: where("fullPath", "==", fullPath)
      title,
      category,
      bodyMd,
      bodyHtml,
      status: "published",
      updatedAt: new Date(),
    });

    process.stdout.write(".");
  }

  // ---------- Prune stale docs (no bloat, safe renames) ----------

  // Default: prune ON unless explicitly disabled
  const shouldPrune =
    (process.env.PRUNE ?? "true").toLowerCase() === "true";

  if (shouldPrune) {
    console.log("\n\n🧹 Pruning stale docs...");

    // Only touch docs for this SITE_ID so multiple projects can share "posts"
    const snap = await db
      .collection("posts")
      .where("siteId", "==", SITE_ID)
      .get();

    let removed = 0;

    for (const d of snap.docs) {
      // If this docId was not recreated from a current file, it is stale:
      // - deleted file
      // - renamed folder/file (old path)
      // - old structure like "JavaNotes" / "CPlusPlusNotes"
      if (!seenIds.has(d.id)) {
        await d.ref.delete();
        removed++;
      }
    }

    console.log(`🧹 Pruned ${removed} stale docs for SITE_ID="${SITE_ID}".`);
  } else {
    console.log(
      '\n⚠️ PRUNE disabled. Stale docs will remain; enable by setting PRUNE=true (recommended).'
    );
  }

  console.log("\n✅ Import complete.");
}

main().catch((err) => {
  console.error("❌ Import failed:", err);
  process.exit(1);
});