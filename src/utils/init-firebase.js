import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDumL9Ckg9_OjZAE4weFRObW1mRomNtRFw",
    authDomain: "assessment-d1540.firebaseapp.com",
    projectId: "assessment-d1540",
    storageBucket: "assessment-d1540.appspot.com",
    messagingSenderId: "935217462360",
    appId: "1:935217462360:web:e0507374681793a81a5e2d",
    measurementId: "G-Y3FTD0RK9D"
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
export { db }