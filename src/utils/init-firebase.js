import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhOFXZr8oOvAHM29JmLe9CqvSCXEOFYJM",
  authDomain: "capstone-93557.firebaseapp.com",
  databaseURL: "https://capstone-93557-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-93557",
  storageBucket: "capstone-93557.appspot.com",
  messagingSenderId: "761460351942",
  appId: "1:761460351942:web:f134f7181f01b8dd5f88c7",
  measurementId: "G-64Y9K8LQKH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
