// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtYe5OWWKjaOs05LBqNLHU6bKdnH7Yo1Q",
  authDomain: "loginutraffic.firebaseapp.com",
  projectId: "loginutraffic",
  storageBucket: "loginutraffic.appspot.com",
  messagingSenderId: "839500140889",
  appId: "1:839500140889:web:f80c1b5af983cd4f58bc48",
  measurementId: "G-MWF4NK6NTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
