import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore,enableIndexedDbPersistence  } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJCU6OdDSonSIWVSulFtnE5YHC8ocdTks",
    authDomain: "itelect-402bc.firebaseapp.com",
    projectId: "itelect-402bc",
    storageBucket: "itelect-402bc.appspot.com",
    messagingSenderId: "96721184885",
    appId: "1:96721184885:web:ad586aa4687f279beff03c",
    measurementId: "G-9SBGB52THX"
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