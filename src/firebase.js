
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyDKPOqBLNWtBvjrAAsnRbdIBqA_gFJFh8k",
  authDomain: "devchat-2f3c2.firebaseapp.com",
  projectId: "devchat-2f3c2",
  storageBucket: "devchat-2f3c2.appspot.com",
  messagingSenderId: "777976109418",
  appId: "1:777976109418:web:f2eae1ab178ff8f447ed13",
  measurementId: "G-VJJ47QD3VV"
};


export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const storage = getStorage();
export const db = getFirestore();