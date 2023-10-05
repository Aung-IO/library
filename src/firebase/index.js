import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHPYxeeAIVgB8NLhrccgK88pURopbGV3E",
  authDomain: "my-library-app-1db64.firebaseapp.com",
  projectId: "my-library-app-1db64",
  storageBucket: "my-library-app-1db64.appspot.com",
  messagingSenderId: "1090062027068",
  appId: "1:1090062027068:web:643d339039be67eebdf639",
  measurementId: "G-MTZLF2T3YE"
};

const app = initializeApp(firebaseConfig);

let db = getFirestore(app);
let auth = getAuth(app);
let storage = getStorage(app);

export { auth, db, storage };

