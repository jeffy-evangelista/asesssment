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

export const db = getFirestore(app);
 //enableIndexedDbPersistence();
 async function offlineDb() {
     await enableIndexedDbPersistence(db).then(() => {
         console.log('Im now offline capable');
     }).catch(err => {
         console.log('Please Check i cant go offline', err);
     });

 }
 offlineDb()
export const auth = getAuth(app);
