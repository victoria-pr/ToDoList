// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUB8bC8xKpY5uJHITjY1BaJpT8ncZrY08",
  authDomain: "memoryapp-22e10.firebaseapp.com",
  projectId: "memoryapp-22e10",
  storageBucket: "memoryapp-22e10.appspot.com",
  messagingSenderId: "40395643206",
  appId: "1:40395643206:web:6b37bd6ea7521c4f042d47",
  measurementId: "G-4TG2ZRGBCZ"
};

export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
export default app;
