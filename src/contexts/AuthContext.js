import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth,db } from '../utils/init-firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from 'firebase/auth'
import {addDoc, collection} from "firebase/firestore";


const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
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

  function register(email, password,displayName,barangay,districtAdministrative,districtLegislative) {
    return createUserWithEmailAndPassword(auth, email, password,displayName,barangay,districtAdministrative,districtLegislative)
        .then(async cred => {
          const usersCollectionRef = collection(db, "users");

          await addDoc(usersCollectionRef, {
            displayName: displayName,
            barangay: barangay,
            districtAdministrative: districtAdministrative,
            districtLegislative: districtLegislative,
            email: email,
            uid: cred.user.uid,
            isAdmin: false,
          });


        })

  }
  function updateProfile(displayName){
    return updateProfile(auth, displayName)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
