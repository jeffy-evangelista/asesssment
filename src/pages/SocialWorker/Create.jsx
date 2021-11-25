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
import { Layout } from '../../components/Layout'
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore"
import { db } from '../../utils/init-firebase'

export default function Create() {
  
  const [newFirst, setNewFirst] = useState("");
  const [newMiddle, setNewMiddle] = useState("");
  const [newLast, setNewLast] = useState("");
  const [newAddress, setNewAddress] = useState("");


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
                  placeholder="First Name"
                  onChange={(event) => {
                  setNewFirst(event.target.value);
                  }} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Middle Name</FormLabel>
                  <Input type="text" 
                  placeholder="Middle Name"
                  onChange={(event) => {
                  setNewMiddle(event.target.value);
                  }}/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" 
                  placeholder="Last Name"
                  onChange={(event) => {
                  setNewLast(event.target.value);
                  }} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={3} >
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" 
                  placeholder="Address"
                  onChange={(event) => {
                  setNewAddress(event.target.value);
                  }}/>
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
