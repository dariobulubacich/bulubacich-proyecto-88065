import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDT74pjgS950UyQBUQmgd_TWAlUJ5yDzDk",
  authDomain: "comision88065.firebaseapp.com",
  projectId: "comision88065",
  storageBucket: "comision88065.firebasestorage.app",
  messagingSenderId: "762140611991",
  appId: "1:762140611991:web:11213b1910e4a2b47d60d2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
