import {
    FormControl,
    FormLabel,
    Input,
    GridItem,
    Text,
    Stack,
    Checkbox,
    Flex,
    VStack,
    Textarea
} from '@chakra-ui/react'
import {useState} from "react";
import {
    collection,
    addDoc, updateDoc, doc
} from "firebase/firestore"
  import { db } from '../../../../../utils/init-firebase'

export default function PhysicalExamination({data}) {
    const [newBlood, setNewBlood] = useState("");
    const [newHeight, setNewHeight] = useState("");
    const [newWeight, setNewWeight] = useState("");
    const [newBMI, setNewBMI] = useState("");
    const [newPulseRate, setNewPulseRate] = useState("");
    const [newtoxoid, setNewtoxoid] = useState("");
    const [newImpression, setNewImpression] = useState("");
    const [newPale, setPale] = useState(false); 
    const [newYellowish, setYellowish] = useState(false);
    const [newThyroid, setThyroid] = useState(false);
    const [newLymp, setLymp] = useState(false);
    const [newMass, setMass] = useState(false);
    const [newNipple, setNipple] = useState(false);
    const [newSkin, setSkin] = useState(false);
    const [newEnlarge, setEnlarge] = useState(false);
    const [newAbnormalHeart, setAbnormalHeart] = useState(false);
    const [newAbnormalBreath, setAbnormalBreath] = useState(false);
    const [newEnlargeLiver, setEnlargeLiver] = useState(false);
    const [newTinderness, setTinderness] = useState(false);
    const [newMass2, setMass2] = useState(false);
    const [newScar, setScar] = useState(false);
    const [newBleeding, setBleeding] = useState(false);
    const [newDischarges, setDischarges] = useState(false);
    const [newCyst, setCyst] = useState(false);
    const [newScar2, setScar2] = useState(false);
    const [newWarts, setWarts] = useState(false);
    const [newLaceration, setLaceration] = useState(false);
    const [newEdema, setEdema] = useState(false);
    const [newVaricosities, setVaricosities] = useState(false);
    const [newPain, setPain] = useState(false);



    const documentId = JSON.parse(JSON.stringify(data.id))


    const usersCollectionRef = doc(db, 'client', documentId);


    const createUser = async () => {
        await updateDoc(usersCollectionRef,
            { 
            
            Blood: newBlood, 
            Weight: newWeight,
            Height: newHeight,
            BMI: newBMI,
            PulsRate: newPulseRate,
            Toxoid: newtoxoid,
            Impression: newImpression, 
            Pale: newPale,
            Yellowish: newYellowish,
            Thyroid: newThyroid,
            Lymp: newLymp,
            Mass: newMass,
            Nipple: newNipple,
            Skin: newSkin,
            Enlarge: newEnlarge,
            AbnormalHeart: newAbnormalHeart,
            AbnormalBreath: newAbnormalBreath,
            EnlargeLiver: newEnlargeLiver,
            Tinderness: newTinderness,
            Mass2: newMass2,
            Scar: newScar,
            Bleeding: newBleeding,
            Discharge: newDischarges,
            Cyst: newCyst,
            Scar2: newScar2,
            Warts: newWarts,
            Laceration: newLaceration,
            Varicosities: newVaricosities,
            Edema: newEdema,
            Pain: newPain,




            });
      };


    return (
        <>
            {/* Vital signs */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Vital signs</FormLabel>
                    <VStack spacing={1}>
                        <Input type="text" placeholder="Blood Pressure" 
                        onChange={(event) => {
                        setNewBlood(event.target.value);
                        }}/>
                        <Input type="text" placeholder="Weight" 
                        onChange={(event) => {
                        setNewWeight(event.target.value);
                        }}/>
                        <Input type="text" placeholder="Height" 
                        onChange={(event) => {
                        setNewHeight(event.target.value);
                        }}/>
                        <Input type="text" placeholder="Body mass Index" 
                        onChange={(event) => {
                        setNewBMI(event.target.value);
                        }}/>
                        <Input type="text" placeholder="Pulse Rate" 
                        onChange={(event) => {
                        setNewPulseRate(event.target.value);
                        }}/>
                    </VStack>
                </FormControl>
            </GridItem>
            {/* Conjunctiva */}
            <GridItem colSpan={4}>
                <FormControl >
                    <FormLabel>Conjunctiva</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newPale === true ? setPale(false) : setPale(true)
                        }}>Pale</Checkbox>
                        <Checkbox onChange={() => {
                        newYellowish === true ? setYellowish(false) : setYellowish(true)
                        }}>Yellowish</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Neck */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Neck</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newThyroid === true ? setThyroid(false) : setThyroid(true)
                        }}>Enlarged thyroid nodes</Checkbox>
                        <Checkbox onChange={() => {
                        newLymp === true ? setLymp(false) : setLymp(true)
                        }}>Enlarged lymph</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Breast */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Breast</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newMass === true ? setMass(false) : setMass(true)
                        }}>Mass</Checkbox>
                        <Checkbox onChange={() => {
                        newNipple === true ? setNipple(false) : setNipple(true)
                        }}>Nipple discharge</Checkbox>
                        <Checkbox onChange={() => {
                        newSkin === true ? setSkin(false) : setSkin(true)
                        }}>Skin - orange peel or dimpling</Checkbox>
                        <Checkbox onChange={() => {
                        newEnlarge === true ? setEnlarge(false) : setEnlarge(true)
                        }}>Enlarged axillary lymph nodes</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Thorax */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Thorax</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newAbnormalHeart === true ? setAbnormalHeart(false) : setAbnormalHeart(true)
                        }}>Abnormal heart sounds / rate / rhythm</Checkbox>
                        <Checkbox onChange={() => {
                        newAbnormalBreath === true ? setAbnormalBreath(false) : setAbnormalBreath(true)
                        }}>Abnormal breath sounds/ respiratory rate</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Abdomen */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Abdomen</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newEnlargeLiver === true ? setEnlargeLiver(false) : setEnlargeLiver(true)
                        }}>Enlarged liver</Checkbox>
                        <Checkbox onChange={() => {
                        newTinderness === true ? setTinderness(false) : setTinderness(true)
                        }}>Tenderness</Checkbox>
                        <Checkbox onChange={() => {
                        newMass2 === true ? setMass2(false) : setMass2(true)
                        }}>Mass</Checkbox>
                        <Checkbox onChange={() => {
                        newScar === true ? setScar(false) : setScar(true)
                        }}>Scar</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Vaginal Examination */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Vaginal Examination</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newBleeding === true ? setBleeding(false) : setBleeding(true)
                        }}>Bleeding</Checkbox>
                        <Checkbox onChange={() => {
                        newDischarges === true ? setDischarges(false) : setDischarges(true)
                        }}>Discharges</Checkbox>
                        <Checkbox onChange={() => {
                        newMass2 === true ? setMass2(false) : setMass2(true)
                        }}>Cyst/mass</Checkbox>
                        <Checkbox onChange={() => {
                        newScar2 === true ? setScar2(false) : setScar2(true)
                        }}>Scars</Checkbox>
                        <Checkbox onChange={() => {
                        newWarts === true ? setWarts(false) : setWarts(true)
                        }}>Warts</Checkbox>
                        <Checkbox onChange={() => {
                        newLaceration === true ? setLaceration(false) : setLaceration(true)
                        }}>Laceration</Checkbox>
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
                        <Checkbox onChange={() => {
                        newEdema === true ? setEdema(false) : setEdema(true)
                        }}>Edema</Checkbox>
                        <Checkbox onChange={() => {
                        newVaricosities === true ? setVaricosities(false) : setVaricosities(true)
                        }}>Varicosities</Checkbox>
                        <Checkbox onChange={() => {
                        newPain === true ? setPain(false) : setPain(true)
                        }}>Pain on force dorsiflexion</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Td toxoid vaccine Status */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Td toxoid vaccine Status</FormLabel>
                    <Input type="text" placeholder="" 
                    onChange={(event) => {
                    setNewtoxoid(event.target.value);
                    }}
                    />
                </FormControl>
            </GridItem>

            <GridItem colSpan={12}>
                <FormControl>
                    <Text fontSize="2xl">Impression/Diagnosis</Text>
                    <Textarea placeholder="" 
                    onChange={(event) => {
                    setNewImpression(event.target.value);
                    }}/>
                </FormControl>
            </GridItem>
            <button onClick={createUser}> Create User</button>

        </>
    )
}
