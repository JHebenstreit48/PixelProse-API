import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export function getDb(serviceAccountJson: string) {
  const app = getApps().length
    ? getApp()
    : initializeApp({ credential: cert(JSON.parse(serviceAccountJson)) });

  return getFirestore(app);
}