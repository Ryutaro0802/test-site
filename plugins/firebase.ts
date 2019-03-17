import firebase from 'firebase';
import env from '~/firebase-env';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: env.API_KEY,
    authDomain: env.AUTHD_OMAIN,
    databaseURL: env.DATABASE_URL,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID
  });
}

export default firebase;
