import firebase from 'firebase';
import env from '~/firebase-env';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: env.APIKEY,
    authDomain: env.AUTHDOMAIN,
    databaseURL: env.DATABASEURL,
    projectId: env.PROJECTID,
    storageBucket: env.STORAGEBUCKET,
    messagingSenderId: env.MESSAGINGSENDERID
  });
}

export default firebase;
