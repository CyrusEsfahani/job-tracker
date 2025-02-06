// src/utils/firebase.ts
import * as admin from 'firebase-admin';

// Add type assertions for environment variables
const projectId = process.env.FIREBASE_PROJECT_ID!; // Non-null assertion
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
const privateKey = process.env.FIREBASE_PRIVATE_KEY!;

// Validate environment variables BEFORE using them
if (!projectId || !clientEmail || !privateKey) {
  throw new Error('🔥 Missing Firebase environment variables');
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n') // Now safely accessed
  })
});

export default admin;