import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl8eNBqvPnTRQaYzEZYcRl8_5k6JVF8vc",
  authDomain: "bar-hideomi.firebaseapp.com",
  projectId: "bar-hideomi",
  storageBucket: "bar-hideomi.appspot.com",
  messagingSenderId: "161818241152",
  appId: "1:161818241152:web:558a5f9b68d4eec903de65"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
