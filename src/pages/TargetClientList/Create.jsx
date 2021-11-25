import { 
<<<<<<< HEAD
  Heading, 
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel 
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import Figure1 from './Forms/Figure1'
import Figure5 from './Forms/Figure5'
import Figure2 from './Forms/Figure2/Figure2'

export default function Create() {

=======
  Heading, Box, Tab, Tabs, TabList, TabPanels, TabPanel, FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper, 
  Checkbox
 } from '@chakra-ui/react'
import React, {useState} from 'react'
import { Layout } from '../../components/Layout'
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore"
import { db } from '../../utils/init-firebase'


export default function Create() {

  const [newYear, setNewYear] = useState("");
  const [newBcenter, setNewBcenter] = useState("");
  const [newRegion, setNewRegion] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newProvince, setNewProvince] = useState("");
  const [newReferal, setNewReferal] = useState("");
  const [newMunicipal, setNewMunicipal] = useState("");
  const [newAdd, setNewAdd] = useState("");
  const [newBarangay, setNewBarangay] = useState("");
  const [newFirst, setNewFirst] = useState("");
  const [newMiddle, setNewMiddle] = useState("");
  const [newLast, setNewLast] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newGravidity, setNewGravidity] = useState("");
  const [newParity, setNewParity] = useState("");
  const [newDeliver, setNewDeliver] = useState("");

  const usersCollectionRef = collection(db, "client");

  const createClient = async () => {
    await addDoc(usersCollectionRef, { 
      birthcenter: newBcenter,
      region: newRegion,
      address: newAddress,
      province: newProvince,
      referal: newReferal,
      municipal: newMunicipal,
      address2: newAdd,
      barangay: newBarangay,
      firstname: newFirst,
      middlename: newMiddle,
      lastname: newLast,
      age: Number(newAge),
      gravidity: newGravidity,
      partity: newParity,
      deliver: newDeliver
    });
  };




>>>>>>> 8f2e4c25aefebde206f7c775b3a3ad5706cad8a5
  return (
    <Layout>
      <Heading mb={5}>Add New Client</Heading>
      <Accordion allowToggle >
        {/* Figure 1 */}
        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                Figure 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Figure1/>
          </AccordionPanel>
        </AccordionItem>
        {/* Figure 2 */}
        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                Figure 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Figure2/>
          </AccordionPanel>
        </AccordionItem>
        {/* Figure 5 */}
        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                Figure 5
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Figure5/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Layout>
  )
}
