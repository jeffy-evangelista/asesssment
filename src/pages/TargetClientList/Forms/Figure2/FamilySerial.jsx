import {
    FormControl,
    FormLabel,
    Input,
    GridItem,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    InputLeftAddon,
    InputGroup,
    Button
} from '@chakra-ui/react'
import {
    collection,
    getDocs,
    addDoc,
  } from "firebase/firestore"
  import { db } from '../../../../utils/init-firebase'
  import  {useState} from "react";


export default function FamilySerial() {
    
    const [newFirstName, setNewFirstName] = useState("");
    const [newMiddleName, setNewMiddleName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newOccupation, setNewOccupation] = useState("");
    const [newStreet, setNewStreet] = useState("");
    const [newBarangay, setNewBarangay] = useState("");
    const [newMunisipal, setNewMunisipal] = useState("");
    const [newProvince, setNewProvince] = useState("");
    const [newSpouse, setNewSpouse] = useState("");
    const [newFirst, setNewFirst] = useState("");
    const [newMiddle, setNewMiddle] = useState("");
    const [newLast, setNewLast] = useState("");
    const [newOccup, setNewOccup] = useState("");
    const [newEduc, setNewEduc] = useState("");
    const [newEducto, setNewEducto] = useState("");
    

    const usersCollectionRef = collection(db, "family");
    
    const createFamily = async () => {
        await addDoc(usersCollectionRef, { 
            firstname: newFirstName, 
            middlename: newMiddleName, 
            lastname: newLastName,
            occupation: newOccupation,
            street: newStreet,
            barangay: newBarangay,
            munisipal: newMunisipal,
            province: newProvince,
            spouse: newSpouse,
            first: newFirst,
            middle: newMiddle,
            last: newLast,
            occu: newOccup,
            education: newEduc,
            educationto: newEducto,
            
        });
      };
    
  




    return (
        <>
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Client:</Text>
            </GridItem>
            {/* First Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" 
                    onChange={(event) => {
                    setNewFirstName(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Middle Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Middle Name</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewMiddleName(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Last Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewLastName(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Birthday */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Birthday</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
            {/*  */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Age</FormLabel>
                    <NumberInput allowMouseWheel defaultValue={10} min={10} max={100} >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </GridItem>
            {/* Highest Education */}
            <GridItem colSpan={3}>
                <FormControl id="education">
                    <FormLabel>Highest Education</FormLabel>
                    <Select placeholder="Select" onChange={(event) => {
                    setNewEduc(event.target.value);
                    }}>
                        <option>Elementary</option>
                        <option>High School</option>
                        <option>College</option>
                    </Select>
                </FormControl>
            </GridItem>
            {/* Occupation */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Occupation</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewOccupation(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* No. Street */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>No. Street</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewStreet(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Barangay */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Barangay</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewBarangay(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Municipality */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Municipality</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewMunisipal(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Province */}
            <GridItem colSpan={3}>
                <FormControl>
                    <FormLabel>Province</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewProvince(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Spouse:</Text>
            </GridItem>
            {/* First Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewFirst(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Middle Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Middle Name</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewMiddle(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Last Name */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewLast(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Birthday */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Birthday</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
            {/* Highest Education */}
            <GridItem colSpan={4}>
                <FormControl id="education">
                    <FormLabel>Highest Education</FormLabel>
                    <Select placeholder="Select" onChange={(event) => {
                    setNewEducto(event.target.value);
                    }}>
                        <option>Elementary</option>
                        <option>High School</option>
                        <option>College</option>
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Occupation</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewOccup(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={6}>
                <FormControl>
                    <Text fontSize="2xl">Average Monthly Family</Text>
                    <InputGroup>
                        <InputLeftAddon children="₱" />
                        <NumberInput precision={2}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </InputGroup>
                </FormControl>
                <Button colorScheme='green' w='full' onClick={createFamily}>
              Submit
            </Button>
            </GridItem>
        </>
    )
}
