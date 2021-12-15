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
    Spacer
} from '@chakra-ui/react'
import {useState} from "react";
import {
    collection,
    addDoc, doc,updateDoc
} from "firebase/firestore"
  import { db } from '../../../../../utils/init-firebase'
  import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReviewOfSystems({data}) {
    const [newEpilepsy, setEpilepsy] = useState(false);
    const [newDizziness, setDizziness] = useState(false);
    const [newVisual, setVisual] = useState(false);
    const [newYellowish, setYellowish] = useState(false);
    const [newEnlargeThyroid, setEnlargThyroid] = useState(false);
    const [newEpilepsy2, setEpilepsy2] = useState(false);
    const [newDizziness2, setDizziness2] = useState(false);
    const [newVisual2, setVisual2] = useState(false);
    const [newYellowish2, setYellowish2] = useState(false);
    const [newEnlargeThyroid2, setEnlargThyroid2] = useState(false);
    const [newMassAbdomen, setMassAbdomen] = useState(false);
    const [newHistoryGal, setHistoryGal] = useState(false);
    const [newHistoryLiver, setHistoryLiver] = useState(false);
    const [newVDischarge, setVDischarge] = useState(false);
    const [newInterBleeding, setInterBleeding] = useState(false);
    const [newPostBleeding, setPostBleeding] = useState(false);
    const [newUterus, setUterus] = useState(false);
    const [newSevere, setSevere] = useState(false);
    const [newSweling, setSweling] = useState(false);
    const [newSkinYellowish, setSkinYellowish] = useState(false);
    const [newCVA, setCVA] = useState(false);
    const [newHypertension, setHypertension] = useState(false);
    const [newAsthma, setAsthma] = useState(false);
    const [newDiabetes, setDiabetes] = useState(false);
    const [newAllergies, setAllergies] = useState(false);
    const [newDrug, setDrug] = useState(false);
    const [newBleedTendencies, setBloodTendencies] = useState(false);
    const [newAnemia, setAnemia] = useState(false);
    const [newDiabetes2, setDiabetes2] = useState(false);
    const [newItching, setItching] = useState(false);
    const [newPain, setPain] = useState(false);
    const [newObesity, setObesity] = useState(false);
    const [newHistoryDomestic, setHistoryDomestic] = useState(false);
    const [newHistoryPsychological, setHistoryPsychological] = useState(false);
    const [newRelationShip, setRelationShip] = useState(false);
    const [newSTI, setSTI] = useState(false);
    const [newSmoking, setSmoking] = useState("");
    const [newBeverage, setBeverage] = useState("");
    const [newFullterm, setFullterm] = useState("");
    const [newPremature, setPremature] = useState("");
    const [newAbortion, setAbortion] = useState("");
    const [newLivingChild, setLivingChild] = useState("");
    const [newDateDeliver, setDateDeliver] = useState(new Date());
    const [newTypeDeliver, setTypeDeliver] = useState("");
    const [newBirthAttendant, setBirthAttendant] = useState("");
    const [newLastMenstrual, setLastMenstrual] = useState(new Date());
    const [newPastMenstrual, setPastMenstrual] = useState("");
    const [newDuration, setDuration] = useState("");
    const [newCharacter, setCharacter] = useState(0);
    const [newPrev, setPrev] = useState("")









    const documentId = JSON.parse(JSON.stringify(data.id))


    const usersCollectionRef = doc(db, 'client', documentId);

    const createUser = async () => {
        await updateDoc(usersCollectionRef,
            { 
                Epilepsy: newEpilepsy, 
                Dizziness: newDizziness, 
                Visuals: newVisual,
                Yellowish: newYellowish,
                EnlargeThyroid: newEnlargeThyroid,
                Epilepsy2: newEpilepsy2, 
                Dizziness2: newDizziness2, 
                Visuals2: newVisual2,
                Yellowish2: newYellowish2,
                EnlargeThyroid2: newEnlargeThyroid2,
                MassAbdomen: newMassAbdomen,
                HistoryGal: newHistoryGal,
                newHistoryLiver: newHistoryLiver,
                VDischarge: newVDischarge,
                InternalBleeding: newInterBleeding,
                PostBleeding: newPostBleeding,
                Uterus: newUterus,
                Severe: newSevere,
                Sweling: newSweling,
                Skin: newSkinYellowish,
                CVA: newCVA,
                Hypertention: newHypertension,
                Asthma: newAsthma,
                Diabetes: newDiabetes,
                Allergie: newAllergies,
                Drug: newDrug,
                Bleed: newBleedTendencies,
                Anemia: newAnemia,
                Diabetes2: newDiabetes2,
                Itching: newItching,
                Pain: newPain,
                Obesity: newObesity,
                HistoryDomestic: newHistoryDomestic,
                HistoryPychological: newHistoryPsychological,
                Ralation: newRelationShip,
                STI: newSTI,
                Smoking: newSmoking,
                Beverage: newBeverage,
                Fullterm: newFullterm,
                Premature: newPremature,
                Abortion: newAbortion,
                LivingChildren: newLivingChild,
                DateDeliver: newDateDeliver,
                TypeDeliver: newTypeDeliver,
                BirthAttendant: newBirthAttendant,
                LastMenstrual: newLastMenstrual,
                PastMenstrual: newPastMenstrual,
                Duration: newDuration,
                Character: Number(newCharacter),
                Prev: newPrev,


                


            });
      };
    return (
        <>
            {/* Review of Systems */}
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Review of Systems</Text>
            </GridItem>
            {/* Heent */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Heent</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newEpilepsy === true ? setEpilepsy(false) : setEpilepsy(true)
                        }}>Epilepsy/Convulsion/Seizure</Checkbox>
                        <Checkbox onChange={() => {
                        newDizziness === true ? setDizziness(false) : setDizziness(true)
                        }}>Severe headache/dizziness</Checkbox>
                        <Checkbox onChange={() => {
                        newVisual === true ? setVisual(false) : setVisual(true)
                        }}>Visual disturbance/blurring of vision</Checkbox>
                        <Checkbox onChange={() => {
                        newYellowish === true ? setYellowish(false) : setYellowish(true)
                        }}>Yellowish conjuctiva</Checkbox>
                        <Checkbox onChange={() => {
                        newEnlargeThyroid === true ? setEnlargThyroid(false) : setEnlargThyroid(true)
                        }}>Enlarged thyroid</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Chest/Heart */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Chest/Heart</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newEpilepsy2 === true ? setEpilepsy2(false) : setEpilepsy2(true)
                        }}>Epilepsy/Convulsion/Seizure</Checkbox>
                        <Checkbox onChange={() => {
                        newDizziness2 === true ? setDizziness2(false) : setDizziness2(true)
                        }}>Severe headache/dizziness</Checkbox>
                        <Checkbox onChange={() => {
                        newVisual2 === true ? setVisual2(false) : setVisual2(true)
                        }}>Visual disturbance/blurring of vision</Checkbox>
                        <Checkbox onChange={() => {
                        newYellowish2 === true ? setYellowish2(false) : setYellowish2(true)
                        }}>Yellowish conjuctiva</Checkbox>
                        <Checkbox onChange={() => {
                        newEnlargeThyroid2 === true ? setEnlargThyroid2(false) : setEnlargThyroid2(true)
                        }}>Enlarged thyroid</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Abdomen */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Abdomen</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newMassAbdomen === true ? setMassAbdomen(false) : setMassAbdomen(true)
                        }}>Mass in the abdomen</Checkbox>
                        <Checkbox onChange={() => {
                        newHistoryGal === true ? setHistoryGal(false) : setHistoryGal(true)
                        }}>History of gallbladder disease</Checkbox>
                        <Checkbox onChange={() => {
                        newHistoryLiver === true ? setHistoryLiver(false) : setHistoryLiver(true)
                        }}>History of liver disease</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Genital */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Genital</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newVDischarge === true ? setVDischarge(false) : setVDischarge(true)
                        }}>Vaginal discharge</Checkbox>
                        <Checkbox onChange={() => {
                        newInterBleeding === true ? setInterBleeding(false) : setInterBleeding(true)
                        }}>Intermenstrual bleeding</Checkbox>
                        <Checkbox onChange={() => {
                        newPostBleeding === true ? setPostBleeding(false) : setPostBleeding(true)
                        }}>Postcoital bleeding</Checkbox>
                        <Checkbox onChange={() => {
                        newUterus === true ? setUterus(false) : setUterus(true)
                        }}>Mass in the uterus</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Extremities */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Extremities</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newSevere=== true ? setSevere(false) : setSevere(true)
                        }}>Severe varicosities</Checkbox>
                        <Checkbox onChange={() => {
                        newSweling === true ? setSweling(false) : setSweling(true)
                        }}>Sweling or severe pain the legs not related to injuries</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Skin */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Skin</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newSkinYellowish === true ? setSkinYellowish(false) : setSkinYellowish(true)
                        }}>Yellowish skin</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Family History */}
            <GridItem colSpan={5}>
                <FormControl>
                    <Text fontSize="2xl">Family History</Text>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newCVA === true ? setCVA(false) : setCVA(true)
                        }}>CVA (strokes)</Checkbox>
                        <Checkbox onChange={() => {
                        newHypertension === true ? setHypertension(false) : setHypertension(true)
                        }}>Hypertension</Checkbox>
                        <Checkbox onChange={() => {
                        newAsthma === true ? setAsthma(false) : setAsthma(true)
                        }}>Asthma</Checkbox>
                        <Checkbox onChange={() => {
                        newDiabetes2 === true ? setDiabetes2(false) : setDiabetes2(true)
                        }}>Diabetes</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Past Health History */}
            <GridItem colSpan={7}>
                <FormControl>
                    <Text fontSize="2xl">Past Health History</Text>
                    <Stack spacing={1}>
                        <Checkbox onChange={() => {
                        newAllergies === true ? setAllergies(false) : setAllergies(true)
                        }}>Allergies</Checkbox>
                        <Checkbox onChange={() => {
                        newDrug === true ? setDrug(false) : setDrug(true)
                        }}>Drug intake (anti-tuberculosis, anti-diabetic, anticonvulsant)</Checkbox>
                        <Checkbox onChange={() => {
                        newBleedTendencies === true ? setBloodTendencies(false) : setBloodTendencies(true)
                        }}>Bleeding tendencies (nose, gums, etc.)</Checkbox>
                        <Checkbox onChange={() => {
                        newAnemia === true ? setAnemia(false) : setAnemia(true)
                        }}>Anemia</Checkbox>
                        <Checkbox onChange={() => {
                        newDiabetes2 === true ? setDiabetes2(false) : setDiabetes2(true)
                        }}>Diabetes</Checkbox>
                        <Checkbox onChange={() => {
                        newItching === true ? setItching(false) : setItching(true)
                        }}>Itching or sores in or around vagina</Checkbox>
                        <Checkbox onChange={() => {
                        newPain === true ? setPain(false) : setPain(true)
                        }}>Pain or burning sensation on urination</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Social History */}
            <GridItem colSpan={12}>
                <FormControl>
                    <Text fontSize="2xl">Social History</Text>
                    <Stack spacing={1}>
                        <Flex>
                            <Checkbox>Smoking</Checkbox>
                            <Input type="text" placeholder="sticks per day" 
                            onChange={(event) => {
                            setSmoking(event.target.value);
                              }}/>
                        </Flex>
                        <Flex>
                            <Checkbox>Alcohoilc beverage</Checkbox>
                            <Input type="text" placeholder="Amt. per day" 
                            onChange={(event) => {
                            setBeverage(event.target.value);
                            }}/>
                        </Flex>
                        <Checkbox onChange={() => {
                        newObesity === true ? setObesity(false) : setEnlargThyroid2(true)
                        }}>Obesity</Checkbox>
                        <Checkbox onChange={() => {
                        newHistoryDomestic === true ? setHistoryDomestic(false) : setHistoryDomestic(true)
                        }}>History of domestic violence(VAW)</Checkbox>
                        <Checkbox onChange={() => {
                        newHistoryPsychological === true ? setHistoryPsychological(false) : setHistoryPsychological(true)
                        }}>History of psychological or mood discturbances</Checkbox>
                        <Checkbox onChange={() => {
                        newRelationShip === true ? setRelationShip(false) : setRelationShip(true)
                        }}>Unpleasant relationship with partner</Checkbox>
                        <Checkbox onChange={() => {
                        newSTI === true ? setSTI(false) : setSTI(true)
                        }}>Treated for STIs in the past </Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Obsterical History */}
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Obsterical History</Text>
            </GridItem>
            <GridItem colSpan={6}>
                <FormControl>
                    <Stack spacing={1}>
                        <Checkbox>Number of pregrnancies:</Checkbox>
                        <SimpleGrid columns={12}>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Full Term" 
                                onChange={(event) => {
                                setFullterm(event.target.value);
                                }}/>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Premature" 
                                onChange={(event) => {
                                setPremature(event.target.value);
                                  }}/>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Abortions" 
                                onChange={(event) => {
                                setAbortion(event.target.value);
                                  }}/>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Living Children" 
                                onChange={(event) => {
                                setLivingChild(event.target.value);
                                  }}/>
                            </GridItem>
                        </SimpleGrid>
                        <Checkbox>History of giving birth to preterm of LBW infants</Checkbox>
                        <Checkbox>History of ectopic pregnancy Hydatidiform mole(within the last 12 months)</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* History of Previous Deliveries */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>History of Previous Deliveries</FormLabel>
                    <Stack spacing={1}>
                        <Flex>
                            <Checkbox>Date of last delivery</Checkbox>
                            <DatePicker selected={newDateDeliver} onChange={(date) => setDateDeliver(date)} />
                        </Flex>
                        <Flex>
                            <Checkbox>Type of last delivery</Checkbox>
                            <Input type="text" 
                            onChange={(event) => {
                            setTypeDeliver(event.target.value);
                            }}/>
                        </Flex>
                        <Flex>
                            <Checkbox>Birth Attendant in last delivery</Checkbox>
                            <Input type="text" 
                            onChange={(event) => {
                            setBirthAttendant(event.target.value);
                            }}/>
                        </Flex>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Menstrual History */}
            <GridItem colSpan={12}>
                <FormControl>
                    <FormLabel>Menstrual History</FormLabel>
                    <Stack spacing={1}>
                        <Flex>
                            <Checkbox>Last menstrual period</Checkbox>
                            <DatePicker selected={newLastMenstrual} onChange={(date) => setLastMenstrual(date)} />
                        </Flex>
                        <Flex>
                            <Checkbox>Past menstrual period</Checkbox>
                            <Input type="text" 
                             onChange={(event) => {
                             setPastMenstrual(event.target.value);
                            }}/>
                        </Flex>
                        <Flex>
                            <Checkbox>Duration of Menstrual bleeding</Checkbox>
                            <Spacer />
                            <Input type="text" 
                             onChange={(event) => {
                            setDuration(event.target.value);
                            }}/>
                        </Flex>
                        <Flex>
                            <Checkbox>Character of Menstrual bleeding</Checkbox>
                            <Input type="number" placeholder="no. of pads"  
                            onChange={(event) => {
                            setCharacter(event.target.value);
                            }}/>
                        </Flex>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Family Planning History */}
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Family Planning History</Text>
                <FormControl>
                    <FormLabel>Previously Used Method:</FormLabel>
                    <Input type="text"  onChange={(event) => {
                    setPrev(event.target.value);
                        }}/>
                </FormControl>
            </GridItem>
        </>
    )
}
