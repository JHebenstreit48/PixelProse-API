import type { Firestore } from "firebase-admin/firestore";

export async function pruneStaleNotes(
  db: Firestore,
  siteId: string,
  seenIds: Set<string>
) {
  const snap = await db.collection("posts").where("siteId", "==", siteId).get();

  let removed = 0;
  for (const d of snap.docs) {
    if (!seenIds.has(d.id)) {
      await d.ref.delete();
      removed++;
    }
  }

  return removed;
}