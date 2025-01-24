import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_PUBLIC_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  // storageBucket: import.meta.env.VITE_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_PUBLIC_FIREBASE_APP_ID,
  databaseURL:
    "https://jymapp-1c753-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
