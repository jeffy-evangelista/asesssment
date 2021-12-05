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
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export default function Create() {
  
  const [newFirst, setNewFirst] = useState("");
  const [newMiddle, setNewMiddle] = useState("");
  const [newLast, setNewLast] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const [email, setEmail] = useState('')
  const [displayName, setName] = useState('')
  const [districtLegislative, setDistrictLegislative] = useState('')
  const [districtAdministrative, setDistrictAdministrative] = useState('')
  const [barangay, setBarangay] = useState('')

  const usersCollectionRef = collection(db, "socialWork");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { first: newFirst, middle: newMiddle , last: newLast, address: newAddress });
  };



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
