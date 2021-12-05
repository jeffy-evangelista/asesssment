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
    InputGroup
} from '@chakra-ui/react'
import {
    collection,
    getDocs,
    addDoc,
  } from "firebase/firestore"
  import { db } from '../../../../../utils/init-firebase'
import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function SideB() {
    const [newSideBDate, setNewSideBDate] = useState(new Date());
    const [newComplaintsComplication, setNewComplaintsComplication] = useState("")
    const [newMCN, setNewMCN] = useState("")
    const [newNameSig, setNewNameSig] = useState("")
    const [newFollowUpDate, setNewFollowUpDate] = useState("")

    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, 
            { 
                Date: newSideBDate, 
                Complication: newComplaintsComplication, 
                MCN: newMCN,
                NameSignature: newNameSig,
                FollowUp: newFollowUpDate 
            });
      };

    return (
        <>

            {/* Date */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Date</FormLabel>
                    <DatePicker selected={newSideBDate} onChange={(date) => setNewSideBDate(date)} />
                </FormControl>
            </GridItem>
            {/* Complaints/Complication */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Complaints/Complication</FormLabel>
                    <Input type="text" 
                    onChange={(event) => {
                    setNewComplaintsComplication(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* MCN Services Given */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>MCN Services Given</FormLabel>
                    <Input type="text"  
                    onChange={(event) => {
                    setNewMCN(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Name of Provider and Signature */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>Name of Provider and Signature</FormLabel>
                    <Input type="text" 
                    onChange={(event) => {
                    setNewNameSig(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            {/* Next follow-up schedule */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>Next follow-up schedule</FormLabel>
                    <Input type="date" 
                    onChange={(event) => {
                    setNewFollowUpDate(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
        </>
    )
}
