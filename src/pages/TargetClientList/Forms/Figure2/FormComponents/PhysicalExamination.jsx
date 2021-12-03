import {
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    GridItem,
    Text,
    Stack,
    Checkbox,
    Flex,
    Spacer,
    VStack,
    Textarea
} from '@chakra-ui/react'
import {useState} from "react";

export default function PhysicalExamination() {
    const [newBlood, setNewBlood] = useState("");
    const [newHeight, setNewHeight] = useState("");
    const [newWeight, setNewWeight] = useState("");
    const [newBMI, setNewBMI] = useState("");
    const [newPulseRate, setNewPulseRate] = useState("");
    const [newConjunctiva, setNewConjunctiva] = useState("");
    const [newNeck, setNewNeck] = useState("");
    const [newBreast, setNewBreast] = useState("");
    const [newThorax, setThorax] = useState("");
    const [newAbdomen, setNewAbdomen] = useState("");
    const [newVaginalExam, setNewVaginalExam] = useState("");
    const [newExtremities, setNewExtremities] = useState("");
    const [newtoxoid, setNewtoxoid] = useState("");
    const [newImpression, setNewImpression] = useState("");


    return (
        <>
            {/* Vital signs */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Vital signs</FormLabel>
                    <VStack spacing={1}>
                        <Input type="text" placeholder="Blood Pressure" />
                        <Input type="text" placeholder="Weight" />
                        <Input type="text" placeholder="Height" />
                        <Input type="text" placeholder="Body mass Index" />
                        <Input type="text" placeholder="Pulse Rate" />
                    </VStack>
                </FormControl>
            </GridItem>
            {/* Conjunctiva */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Conjunctiva</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Pale</Checkbox>
                        <Checkbox>Yellowish</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Neck */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Neck</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Enlarged thyroid nodes</Checkbox>
                        <Checkbox>Enlarged lymph</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Breast */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Breast</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Mass</Checkbox>
                        <Checkbox>Nipple discharge</Checkbox>
                        <Checkbox>Skin - orange peel or dimpling</Checkbox>
                        <Checkbox>Enlarged axillary lymph nodes</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Thorax */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Thorax</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Abnormal heart sounds / rate / rhythm</Checkbox>
                        <Checkbox>Abnormal breath sounds/ respiratory rate</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Abdomen */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Abdomen</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Enlarged liver</Checkbox>
                        <Checkbox>Tenderness</Checkbox>
                        <Checkbox>Mass</Checkbox>
                        <Checkbox>Scar</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Vaginal Examination */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Vaginal Examination</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Bleeding</Checkbox>
                        <Checkbox>Discharges</Checkbox>
                        <Checkbox>Cyst/mass</Checkbox>
                        <Checkbox>Scars</Checkbox>
                        <Checkbox>Warts</Checkbox>
                        <Checkbox>Laceration</Checkbox>
                        <Flex>
                            <Checkbox>Other, Specify </Checkbox>
                            <Input type="text" />
                        </Flex>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Extremities */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Extremities</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Edema</Checkbox>
                        <Checkbox>Varicosities</Checkbox>
                        <Checkbox>Pain on force dorsiflexion</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Td toxoid vaccine Status */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Td toxoid vaccine Status</FormLabel>
                    <Input type="text" placeholder="" />
                </FormControl>
            </GridItem>

            <GridItem colSpan={12}>
                <FormControl>
                    <Text fontSize="2xl">Impression/Diagnosis</Text>
                    <Textarea placeholder="" />
                </FormControl>
            </GridItem>


        </>
    )
}
