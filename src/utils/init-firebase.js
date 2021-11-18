import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhOFXZr8oOvAHM29JmLe9CqvSCXEOFYJM",
  authDomain: "capstone-93557.firebaseapp.com",
  databaseURL: "https://capstone-93557-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-93557",
  storageBucket: "capstone-93557.appspot.com",
  messagingSenderId: "761460351942",
  appId: "1:761460351942:web:d734de5c6539a1a75f88c7",
  measurementId: "G-Q5FCLLTD05"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
