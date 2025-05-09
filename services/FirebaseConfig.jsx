// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Platform } from "react-native";
import { getAuth,getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "romie-startups.firebaseapp.com",
  projectId: "romie-startups",
  storageBucket: "romie-startups.firebasestorage.app",
  messagingSenderId: "221485420025",
  appId: "1:221485420025:web:17db7acb70cfae169a0128",
  measurementId: "G-PBFDXSWZ2B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=Platform.OS=='web'?getAuth(app):initializeAuth(app,{
  persistance: getReactNativePersistence()
})