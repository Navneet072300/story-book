// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "story-460f8.firebaseapp.com",
  projectId: "story-460f8",
  storageBucket: "story-460f8.firebasestorage.app",
  messagingSenderId: "791795815959",
  appId: "1:791795815959:web:9ab8e1f35d5528b1b06e52",
  measurementId: "G-2KD5PN5KQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
