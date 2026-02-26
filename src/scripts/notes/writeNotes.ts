import type { Firestore } from "firebase-admin/firestore";
import type { ParsedNote } from "@/scripts/notes/parseNotes";

export async function writeNote(
  db: Firestore,
  args: {
    siteId: string;
    docId: string;
    fullPath: string;
    parsed: ParsedNote;
  }
) {
  const { siteId, docId, fullPath, parsed } = args;

  await db.collection("posts").doc(docId).set({
    siteId,
    fullPath,
    title: parsed.title,
    category: parsed.category,
    bodyMd: parsed.bodyMd,
    bodyHtml: parsed.bodyHtml,
    status: "published",

    // same behavior as old script (seed run time)
    updatedAt: new Date(),

    // NEW: true file-modified time for note page display later
    sourceUpdatedAt: parsed.sourceUpdatedAt,
  });
}