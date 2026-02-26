import type { Firestore } from "firebase-admin/firestore";

export async function writeNotesMeta(db: Firestore, siteId: string) {
  await db.collection("siteMeta").doc(siteId).set(
    {
      siteId,
      notesLastImportAt: new Date(),
    },
    { merge: true }
  );
}