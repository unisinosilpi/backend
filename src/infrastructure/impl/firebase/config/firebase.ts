import admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('./firebase-key');

class FirebaseConfig {
  static instance: FirebaseFirestore.Firestore;

  constructor() {
    if (!FirebaseConfig.instance) {
      admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
      FirebaseConfig.instance = admin.firestore();
    }
  }

  getInstance(): FirebaseFirestore.Firestore {
    return FirebaseConfig.instance;
  }
}

export { FirebaseConfig };
