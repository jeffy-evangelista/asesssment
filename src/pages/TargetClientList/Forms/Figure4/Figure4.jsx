import {
    Box,
    VStack,
    SimpleGrid,
    GridItem,
    Text,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    RadioGroup,
    HStack,
    Radio,
    InputGroup,
    InputLeftAddon,
    Button

} from '@chakra-ui/react'
import React, { useState } from 'react';
import {
    collection,
    getDocs,
    addDoc,
  } from "firebase/firestore"
  import { db } from '../../../../utils/init-firebase'

export default function Figure4() {
    const [accreditedFacility, setAccreditedFacility] = useState("");
    const [newName, setNewName] = useState("");
    const [newDeliverBy, setNewDeliverBy] = useState("");
    const [newDeliverAt, setNewDeliverAt] = useState("");
    const [newDistance, setNewDistance] = useState("");
    const [newCost, setNewCost] = useState("");
    const [newMode, setNewMode] = useState("");
    const [newTransport, setNewTransport] = useState("");
    const [newCompanion, setNewCompanion] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newContact, setNewContact] = useState("");
    const [newAccomp, setNewAccomp] = useState("");
    const [newRelation, setNewRelation] = useState("");
    const [newAddressOne, setNewAddressOne] = useState("");
    const [newLandline, setNewLandline] = useState("");
    const [newCareTaker, setNewCareTaker] = useState("");
    const [newRelationPatient, setNewRelationPatient] = useState("");
    const [newBloodType, setNewBloodType] = useState("");
    const [newDonorName, setNewDonorName] = useState("");
    const [newDonorAddress, setNewDonorAddres] = useState("");
    const [newDonorNameOne, setNewDonorNameOne] = useState("");
    const [newDonorAddressOne, setNewDonorAddresOne] = useState("");
    const [newContactPerson, setNewContactPerson] = useState("");
    const [newContactAddress, setNewContactAddress] = useState("");
    const [newContactNumber, setNewContactNumber] = useState("");
    const [newMaternalH, setNewMaternalH] = useState("");
    const [newMaternalA, setNewMaternalA] = useState("");
    const [newBornH, setNewBornH] = useState("");
    const [newBornA, setNewBornA] = useState("");
    const [newConform, setNewConform] = useState("");
    





    const usersCollectionRef = collection(db, "test");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { 
            name: newName, 
            deliverBy: newDeliverBy,
            deliverAt: newDeliverAt,
            distance: newDistance,
            cost: newCost,
            mode: newMode,
            transport: newTransport,
            companion: newCompanion,
            address: newAddress,
            contact: newContact,
            accompany: newAccomp,
            relation: newRelation,
            addressOne: newAddressOne,
            landline: newLandline,
            caretaker: newCareTaker,
            reationPatient: newRelationPatient,
            bloodtype: newBloodType,
            firstdonor: newDonorName,
            firstdonoraddres: newDonorAddress,
            seconddonor: newDonorNameOne,
            seconddonoraddress: newAddressOne,
            contactperson: newContactPerson,
            contactAddress: newContactAddress,
            contactnumber: newContactNumber,
            maternalH: newMaternalH,
            maternalA: newMaternalA,
            bornH: newBornH,
            bornA: newBornA,
            conform: newConform
        });
      };


    return (
        <Box boxShadow={'lg'} p={8}>
            <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={12} columnGap={3} rowGap="6" w="full">
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={3}>
                                    <FormLabel>
                                        Name of Client:
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={9}>
                                    <Input type="text" 
                                     onChange={(event) => {
                                     setNewName(event.target.value);
                                    }} />
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <Text fontSize="4xl" textAlign="center" color="teal">Birth Plan</Text>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <Text fontSize="md">
                            I know that any complication can develop at any time in the course of
                            this pregnancy, childbirth and after birth. I know that the best place
                            to deliver my baby is in a health facility.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        I will be attended at delivery by
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={8}>
                                    <Input
                                        type="text"
                                        placeholder="Name of Doctor/Nurse/Midwife or others. If others, pls. specify"
                                     onChange={(event) => {
                                        setNewDeliverBy(event.target.value);
                                       }}
                                    />
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={3}>
                                    <FormLabel>
                                        I plan to deliver at
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={9}>
                                    <Input
                                        type="text"
                                        placeholder="Name and location of Hospital/health center/clinic or others. If others, pls. specify"
                                        onChange={(event) => {
                                        setNewDeliverAt(event.target.value);
                                        }}
                                    />
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={4}>
                                    <Text fontSize="md">
                                        This is a Philhealth accredited facility
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <RadioGroup onChange={setAccreditedFacility} value={accreditedFacility}>
                                        <HStack direction="row">
                                            <Radio value="yes">Yes</Radio>
                                            <Radio value="no">No</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">
                                        Distance from Residence
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Input type="text" size="md" 
                                     onChange={(event) => {
                                     setNewDistance(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <SimpleGrid columns={12}>
                            <GridItem colSpan={7}>
                                <Text fontSize="md">
                                    The estimated cost of the maternity package in this facility is
                                </Text>
                            </GridItem>
                            <GridItem colSpan={5}>
                                <FormControl>
                                    <InputGroup size="sm">
                                        <InputLeftAddon children="₱" />
                                        <Input type="text" 
                                        onChange={(event) => {
                                        setNewCost(event.target.value);
                                        }} />
                                    </InputGroup>
                                    <FormHelperText>
                                        Inclusive of the newborn care package
                                    </FormHelperText>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <SimpleGrid columns={12}>
                            <GridItem colSpan={6}>
                                <Text fontSize="md">
                                    The mode of payment is
                                </Text>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl>
                                    <InputGroup size="sm">
                                        <Input type="text" 
                                        onChange={(event) => {
                                        setNewMode(event.target.value);
                                        }} />
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <SimpleGrid columns={12}>
                            <GridItem colSpan={6}>
                                <Text fontSize="md">
                                    The available transport is
                                </Text>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <FormControl>
                                    <InputGroup size="sm">
                                        <Input type="text" 
                                        onChange={(event) => {
                                        setNewTransport(event.target.value);
                                        }}/>
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={2}>
                                    <Text fontSize="md">
                                        I have contacted
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={3} >
                                    <Input type="text" size="sm" placeholder="Name of Companion"  
                                    onChange={(event) => {
                                    setNewCompanion(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={2} >
                                    <Text fontSize="md">
                                        , residing at
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={3} >
                                    <Input type="text" size="sm" placeholder="Address" 
                                     onChange={(event) => {
                                    setNewAddress(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={2} >
                                    <Text fontSize="md">
                                        and with contact
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Text fontSize="md">
                                        number at
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={3} >
                                    <Input type="text" size="sm" placeholder="Landline or Cellphone" 
                                    onChange={(event) => {
                                    setNewContact(event.target.value);
                                     }} />
                                </GridItem>
                                <GridItem colSpan={7} >
                                    <Text fontSize="md">
                                        , to bring me to the hospital/maternity clinic/health center.
                                    </Text>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={3}>
                                    <FormLabel>
                                        I will be accompanied by
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        <Input type="text" placeholder="Name" size="sm" 
                                        onChange={(event) => {
                                        setNewAccomp(event.target.value);
                                        }}/>
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Text fontSize="md">
                                        Who is my
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <FormLabel>
                                        <Input type="text" placeholder="Relationship to patient" size="sm" 
                                        onChange={(event) => {
                                        setNewRelation(event.target.value);
                                        }} />
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Text fontSize="md">
                                        , residing at
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        <Input type="text" placeholder="Address" size="sm" 
                                        onChange={(event) => {
                                        setNewAddressOne(event.target.value);
                                        }}/>
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">
                                        , and with contact number
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <FormLabel>
                                        <Input type="text" placeholder="Landline or Cellphone" size="sm" 
                                        onChange={(event) => {
                                        setNewLandline(event.target.value);
                                        }}/>
                                    </FormLabel>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={5}>
                                    <FormLabel>
                                        <Input type="text" placeholder="Name of care taker" size="sm" 
                                        onChange={(event) => {
                                        setNewCareTaker(event.target.value);
                                        }}/>
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <FormLabel>
                                        , my
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        <Input type="text" placeholder="Relationship to patient" size="sm" 
                                         onChange={(event) => {
                                        setNewRelationPatient(event.target.value);
                                        }}/>
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={12}>
                                    <Text fontSize="md">
                                        , will take care of my children/home while I am in the health facility
                                    </Text>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={3}>
                                    <FormLabel>
                                        My blood type is:
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setNewBloodType(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={6}>
                                </GridItem>
                                <GridItem colSpan={12}>
                                    <FormLabel>
                                        In case of a need for blood transfusion, my possible donors are:
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Input type="text" placeholder="Name" 
                                    onChange={(event) => {
                                    setNewDonorName(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={8}>
                                    <Input type="text" placeholder="Address" 
                                    onChange={(event) => {
                                    setNewDonorAddres(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Input type="text" placeholder="Name" 
                                    onChange={(event) => {
                                    setNewDonorNameOne(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={8}>
                                    <Input type="text" placeholder="Address" 
                                    onChange={(event) => {
                                    setNewDonorAddresOne(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={12}>
                                    <FormLabel>
                                        In case of complications, I should be referred right away to:
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">Contact Person:</Text>
                                </GridItem>
                                <GridItem colSpan={9}>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setNewContactPerson(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">Address:</Text>
                                </GridItem>
                                <GridItem colSpan={9}>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setNewContactAddress(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">Tel. No.:</Text>
                                </GridItem>
                                <GridItem colSpan={9}>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setNewContactNumber(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={12}>
                                    <FormLabel>
                                        The nearest maternal and newborn health facility to my residence are:
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">Maternal/Hospital:</Text>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Input type="text" placeholder="Name of Hospital" 
                                    onChange={(event) => {
                                    setNewMaternalH(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={5}>
                                    <Input type="text" placeholder="Address" 
                                    onChange={(event) => {
                                    setNewMaternalA(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <Text fontSize="md">Newborn Hospital:</Text>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Input type="text" placeholder="Name of Hospital" 
                                    onChange={(event) => {
                                    setNewBornH(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={5}>
                                    <Input type="text" placeholder="Address" 
                                    onChange={(event) => {
                                    setNewBornA(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <SimpleGrid columns={12}>
                                <GridItem colSpan={12}>
                                    <FormLabel>
                                        Conforme:
                                    </FormLabel>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Input type="text" placeholder="Signature" 
                                    onChange={(event) => {
                                    setNewConform(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Input type="Date" />
                                </GridItem>
                            </SimpleGrid>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <Button colorScheme='green' w='full' onClick={createUser}>
                            Submit
                        </Button>
                    </GridItem>
                </SimpleGrid>
            </VStack>
        </Box>

    )
}
