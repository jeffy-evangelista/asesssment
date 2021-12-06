


import { Layout } from '../components/Layout'
import React, {useEffect, useRef, useState} from 'react'
import {db} from "../utils/init-firebase";
import {collection, doc, setDoc, query, where, getDocs,getDocFromCache,updateDoc,getDoc} from "firebase/firestore";
import {Button, Stack, Td, Tr} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {ViewIcon} from "@chakra-ui/icons";



export default function TestPage() {

    const usersCollectionRef = query(collection(db, "dummy"));


getDocs(usersCollectionRef).then((snapshot)=>{
   let location  = []
    snapshot.docs.forEach((doc)=> {
        location.push({...doc.data(),id:doc.id})
    })
    console.log(location)
}).catch  (err=>{
    console.log(err.message)
})


    return (

        <Layout>
     My Test Page


        </Layout>
    )
}
