import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore,enableIndexedDbPersistence  } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASSwQ4BOaNEA6LhzF9e2bbF3t8YbzOJM8",
  authDomain: "fhsismaternalcare-db852.firebaseapp.com",
  databaseURL: "https://fhsismaternalcare-db852-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fhsismaternalcare-db852",
  storageBucket: "fhsismaternalcare-db852.appspot.com",
  messagingSenderId: "555857684535",
  appId: "1:555857684535:web:b74fabb9cb9a862a0877b2",
  measurementId: "G-ZLFDX7NSQQ"
};

const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.

        console.log("You have Violated The law only use 1 Tab")
    } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        console.log("Browser does not support IndexedDB")
    }
});


export const auth = getAuth(app);
export {db}