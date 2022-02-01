import React, {createContext, useContext, useEffect, useState} from 'react'
import {auth, db} from '../utils/init-firebase'
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {doc, setDoc} from "firebase/firestore";


const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  manualLogin: () => Promise


})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
  }, [currentUser])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }


  function register(email, password,userName, fName, lName) {
    return createUserWithEmailAndPassword(auth, email, password,userName, fName, lName)
        .then(async cred => {
          const usersCollectionRef = doc(db, 'admins', cred.user.uid);
          await setDoc(usersCollectionRef, {
            email: email,
            id: cred.user.uid,
            fName: fName,
            lName: lName,
            userName: userName,
            isAdmin: false,
          });
        })
  }





  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function manualLogin(values) {
     const password = "123456"
    return createUserWithEmailAndPassword(auth, values.email, password)
        .then(async cred => {
          const userRef = doc(db, 'admins', cred.user.uid);
          await setDoc(userRef, {
            email: values.email,
            id: cred.user.uid,
            userName: values.userName,
            districtAdministrative:values.administrativeDistrict,
            districtLegislative:values.legislativeDistrict,
            barangay:values.barangay,
            isAdmin: values.isAdmin,
          })
        })
  }

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    manualLogin,


  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
