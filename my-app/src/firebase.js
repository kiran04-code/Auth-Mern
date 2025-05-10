// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c3e8b.firebaseapp.com",
  projectId: "mern-auth-c3e8b",
  storageBucket: "mern-auth-c3e8b.firebasestorage.app",
  messagingSenderId: "305045366774",
  appId: "1:305045366774:web:9a3a2f1458a835199f49d7",
  measurementId: "G-LKQY1PNQ61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);