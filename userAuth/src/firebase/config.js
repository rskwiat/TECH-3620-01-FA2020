/**
 * Firebase configuration
 * Please goto https://console.firebase.google.com/ to setup firebase and the correct packages
 */

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

//Replace this with your correct config
const firebaseConfig = {
  apiKey: "MY_CUSTOM_API_KEY",
  authDomain: "DATABASE_AUTH_DOMAIN",
  databaseURL: "https://DATBASEURL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGE_SENDER_ID",
  appId: "CUSTOM_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };


