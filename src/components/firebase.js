import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf0u_rM_3iBDrl_GMHf6msNSgXS7erOOc",
  authDomain: "task-tracker-4c9f0.firebaseapp.com",
  projectId: "task-tracker-4c9f0",
  storageBucket: "task-tracker-4c9f0.firebasestorage.app",
  messagingSenderId: "700586835737",
  appId: "1:700586835737:web:bbcc1d938cae5ad47acf88",
  measurementId: "G-24HJ7P90NV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
