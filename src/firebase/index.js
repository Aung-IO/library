import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC36gK5E5r6EK_ObGpZvNC02WNVRqqwUiQ",
  authDomain: "library-app-f9891.firebaseapp.com",
  projectId: "library-app-f9891",
  storageBucket: "library-app-f9891.appspot.com",
  messagingSenderId: "195200065726",
  appId: "1:195200065726:web:175ce3e4cc558685b43eef",
  measurementId: "G-N5Q8D6YJCR"
};

const app = initializeApp(firebaseConfig);

let db = getFirestore(app);
let auth = getAuth(app);

export { db , auth };
