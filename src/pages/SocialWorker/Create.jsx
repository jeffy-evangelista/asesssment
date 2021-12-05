import { 
  Heading, 
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  Button
 } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import {auth} from  "../../contexts/AuthContext"
import { Layout } from '../../components/Layout'
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore"
import { db } from '../../utils/init-firebase'
import {getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink} from "firebase/auth";

export default function Create() {
  
  const [newFirst, setNewFirst] = useState("");


  const [email, setEmail] = useState('')
  const [displayName, setName] = useState('')
  const [districtLegislative, setDistrictLegislative] = useState('')
  const [districtAdministrative, setDistrictAdministrative] = useState('')
  const [barangay, setBarangay] = useState('')

  const usersCollectionRef = collection(db, "socialWork");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
        email:setEmail

    });
  };
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };
// Confirm the link is a sign-in with email link.
  const auth = getAuth();
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
  }



  sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });

  return (
    <Layout>
      <Heading mb={5}>Add New Social Worker</Heading>
      
        <Box boxShadow={'lg'} p={8} >
          <VStack spacing={3} alignItems="flex-start">
            <SimpleGrid columns={3} columnGap={3} rowGap="6" w="full">
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" 
                  placeholder="Name"
                  onChange={(event) => {
                  setNewFirst(event.target.value);
                  }} />
                </FormControl>
                <FormControl id='email'>
                  <FormLabel>Email address</FormLabel>
                  <Input

                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                  />
                </FormControl>


              </GridItem>



              <GridItem colSpan={3} >
                <Button colorScheme='green' w='full' onClick={createUser} >
                  Submit
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Box>   
    </Layout>
  )
}
