import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function main() {
  const json =
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
    fs.readFileSync(path.resolve('serviceAccount.json'), 'utf8');

  initializeApp({ credential: cert(JSON.parse(json)) });
  const db = getFirestore();

  await db.collection('diagnostics').doc('hello').set({
    ok: true,
    when: new Date()
  });

  console.log('✅ wrote diagnostics/hello');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});