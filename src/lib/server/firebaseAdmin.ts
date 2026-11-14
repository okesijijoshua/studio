// Firebase Admin SDK initialization (server-only)
import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!admin.getApps().length) {
  if (!serviceAccountJson) {
    // In development without real credentials we initialise a default app
    admin.initializeApp({});
  } else {
    let serviceAccount;
    try {
      serviceAccount = JSON.parse(serviceAccountJson);
    } catch {
      serviceAccount = JSON.parse(Buffer.from(serviceAccountJson, 'base64').toString('utf-8'));
    }
    admin.initializeApp({
      credential: admin.cert(serviceAccount),
    });
  }
}

const db = getFirestore();

export { db };
