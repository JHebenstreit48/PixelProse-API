import "dotenv/config";
import fg from "fast-glob";

import { getDb } from "@/scripts/notes/firebaseAdmin";
import { getServiceAccountJson, getSiteId, shouldPrune } from "@/scripts/notes/config";
import { docIdFor, getBaseDir, toFullPath } from "@/scripts/notes/paths";
import { parseNotes } from "@/scripts/notes/parseNotes";
import { writeNote } from "@/scripts/notes/writeNotes";
import { pruneStaleNotes } from "@/scripts/notes/pruneNotes";
import { writeNotesMeta } from "@/scripts/notes/writeMeta";
import { exportContentJson } from "@/scripts/notes/exportContent";
import path from "path";

async function main() {
  const siteId = getSiteId();
  const db = getDb(getServiceAccountJson());

  const baseDir = getBaseDir(__dirname);

  const files = await fg(["**/*.md"], { cwd: baseDir, absolute: true });
  console.log(`Found ${files.length} markdown files for SITE_ID="${siteId}"`);

  if (files.length === 0) {
    throw new Error(
      `No markdown files found under "${baseDir}". Aborting to avoid accidental prune.`
    );
  }

  const seenIds = new Set<string>();

  for (const abs of files) {
    const fullPath = toFullPath(baseDir, abs);
    const docId = docIdFor(siteId, fullPath);

    const parsed = parseNotes(abs, fullPath);
    if (!parsed) {
      console.warn(`⚠️ Skipping empty file: ${abs}`);
      continue;
    }

    await writeNote(db, { siteId, docId, fullPath, parsed });
    seenIds.add(docId);
    process.stdout.write(".");
  }

  await writeNotesMeta(db, siteId);

  // Export content.json for public access (AI tools, search engines, etc.)
  // Output path: root of backend repo → commit and push to GitHub
  // Accessible at: https://raw.githubusercontent.com/YOURUSERNAME/YOURBACKENDREPO/main/content.json
  const outPath = path.join(process.cwd(), "content.json");
  await exportContentJson(files, baseDir, outPath);

  if (shouldPrune()) {
    console.log("\n\n🧹 Pruning stale docs...");
    const removed = await pruneStaleNotes(db, siteId, seenIds);
    console.log(`🧹 Pruned ${removed} stale docs for SITE_ID="${siteId}".`);
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