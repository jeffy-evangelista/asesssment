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
import {useState} from "react";

export default function SideB() {
    const [newSideBDate, setNewSideBDate] = useState("");
    const [newComplaintsComplication, setNewComplaintsComplication] = useState("")
    const [newMCN, setNewMCN] = useState("")
    const [newNameSig, setNewNameSig] = useState("")
    const [newFollowUpDate, setNewFollowUpDate] = useState("")


    return (
        <>

            {/* Date */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
            {/* Complaints/Complication */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Complaints/Complication</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* MCN Services Given */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>MCN Services Given</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Name of Provider and Signature */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>Name of Provider and Signature</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Next follow-up schedule */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>Next follow-up schedule</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
        </>
    )
}
