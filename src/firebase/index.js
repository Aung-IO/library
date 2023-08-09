import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7BrCM-TmNrcqyTqQXIueG2LnLdAe-Jtg",
  authDomain: "library-app-b55e0.firebaseapp.com",
  projectId: "library-app-b55e0",
  storageBucket: "library-app-b55e0.appspot.com",
  messagingSenderId: "912299563331",
  appId: "1:912299563331:web:8ec61869643a029f9037f6",
  measurementId: "G-LFJ4MY07SC"
};

const app = initializeApp(firebaseConfig);

let db = getFirestore(app);
let auth = getAuth(app);

export { auth, db };

