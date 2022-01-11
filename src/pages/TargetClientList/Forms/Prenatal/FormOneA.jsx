import React from 'react'
import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    GridItem,
    HStack,
    ListItem,
    SimpleGrid,
    Spacer,
    Text,
    UnorderedList,
    useToast,
    VStack,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import * as Yup from "yup";
import { Form, Formik, useFormik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import FormHeading from '../../../components/Labels/FormHeading';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import Select from '../../../components/Fields/Select';
import Checkbox from '../../../components/Fields/Checkbox';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import NumberField from "../../../components/Fields/NumberField";

export default function FormOneA() {

    const initialValues = {
        familySerial: {
            client: {
                birthday: '',
                highestEducation: '',
                occupation: '',
                addressStreet: '',
                addressBarangay: '',
                addressMunicipality: '',
                addressProvince: '',
            },
            spouse: {
                firstName: '',
                middleName: '',
                lastName: '',
                birthday: '',
                highestEducation: '',
                occupation: ''
            },
            avgFamilyIncome: '',
            noOfChildren: '',
            birthPlan: ''
        },
        medicalHistory: {
            reviewOfSystems: {
                heent: [],
                chestHeart: [],
                abdomen: [],
                genital: [],
                extremeties: [],
                skin: [],
            },
            familyHistory: '',
            pastHealthHistory: '',
            socialHistory: '',
            obstericalHistory: {
                historyOfPreviousDeliveries: '',
                menstrualHistory: '',
            },
            familyPlanningHistory: {
                previouslyUsedMethod: ''
            }
        },
        physicalExamination: {
            vitalSigns: {
                bloodPressure: '',
                weight: '',
                height: '',
                bmi: '',
                pulseRate: ''
            },
            conjunctiva: '',
            neck: '',
            breast: '',
            thorax: '',
            abdomen: '',
            vaginalExamination: '',
            extremities: '',
            toxoidVaccineStatus: '',
            impressionDiagnosis: ''
        }
    }

    const onSubmit = (values) => {
        console.log('Form data', values)
    }

    const heentSelections = [
        { key: 'Epilepsy/Convulsion/Seizure', value: 'epilepsyConvulsionSeizure' },
        { key: 'Severe Headache/dizziness', value: 'severeHeadacheDizziness' },
        { key: 'Visual Disturbance/blurring of vision', value: 'visualDisturbanceBlurringOfVision' },
        { key: 'Yellowish conjunctiva', value: 'yellowishConjunctiva' },
        { key: 'Enlarged thyroid', value: 'enlargedThyroid' }
    ];
    const chestHeartSelections = [
        { key: 'Severe chest pain', value: 'severeChestPain' },
        { key: 'Shortness of breath and easy fatigability', value: 'shortnessOfBreath' },
        { key: 'Breast/axillary masses', value: 'breastAxillaryMasses' },
        { key: 'Nipple discharges (specify if blood or pus)', value: 'nippleDischarges ' }
    ];
    const abdomenSelections = [
        { key: 'Mass in the Abdomen', value: 'massInTheAbdomen' },
        { key: 'History of gallbladder disease', value: 'historyOfGallbladderDisease' },
        { key: 'History of liver disease', value: 'historyOfLiverDisease' }
    ];
    const genitalSelections = [
        { key: 'Vaginal discharge', value: 'vaginalDischarge' },
        { key: 'Intermenstrual bleeding', value: 'intermenstrualBleeding' },
        { key: 'Postcoital bleeding', value: 'postcoitalBleeding' },
        { key: 'Mass in the uterus', value: 'massInTheUterus' }
    ];
    const extremitiesSelections = [
        { key: 'Severe varicosities', value: 'severeVaricosities' },
        { key: 'Swelling or servere pain in the legs not related to injuries', value: 'historyOfGallbladderDisease' }
    ];
    const skinSelections = [
        { key: 'Yellowish Skin', value: 'yellowishSkin' }
    ];
    const familyHistorySelections = [
        { key: 'CVA (strokes)', value: 'cvaStrokes' },
        { key: 'Hypertension', value: 'hypertension' },
        { key: 'Asthma', value: 'asthma' },
        { key: 'Heart disease', value: 'heartDisease' },
        { key: 'Diabetes', value: 'diabetes' }
    ];
    const pastHealthHistorySelections = [
        { key: 'Allergies', value: 'allergies' },
        { key: 'Drug intake (anti-tuberculosis, anti-diabetic, anticonvulsant)', value: 'drugIntake' },
        { key: 'Bleeding tendencies (nose, gums, etc.)', value: 'bleedingTendencies' },
        { key: 'Anemia', value: 'anemia' },
        { key: 'Diabetes', value: 'diabetes' },
        { key: 'Itching or sores in or around vagina', value: 'itching' },
        { key: 'Pain or burning sensation on urination', value: 'painOrBurning' }
    ];
    const socialHistorySelections = [
        { key: 'Smoking', value: 'smoking' },
        { key: 'Alcohol beverage', value: 'alcoholBeverage' },
        { key: 'History of domestic violence', value: 'vaw' },
        { key: 'History of psychological or mood disturbance', value: 'moodDisturbances' },
        { key: 'Unpleasant relationship with partner', value: 'unpleasantRelationship' },
        { key: 'Treated for STIs in the past', value: 'sTI' }
    ];
    const obstericalHistorySelections = [
        { key: 'Number of pregnancies', value: 'noOfPreg' },
        { key: 'History of giving birth to preterm or LBW infants', value: 'lBW' },
        { key: 'History of Ectopic pregnancy Hydatidiform mole (within the last 12 months)', value: 'ectopicPregnancy' }
    ];
    const historyOfPreviouDeliveriesSelections = [
        { key: 'Date of last delivery', value: 'dateOflastDelivery' },
        { key: 'Type of last Delivery', value: 'typeOfLastDelivery' },
        { key: 'Birth Attendant in last delivery', value: 'birthAttendant' }
    ];
    const menstrualHistorySelections = [
        { key: 'Last menstrual period', value: 'lastMenstrualPeriod' },
        { key: 'Past menstrual period', value: 'pastMenstrualPeriod' },
        { key: 'Duration of menstrual Bleeding', value: 'durationOfMenstrualBleeding' },
        { key: 'Character of Menstrual bleeding', value: 'characterOfMenstrualBleeding' }
    ];
    const conjunctivaSelections = [
        { key: 'Pale', value: 'pale' },
        { key: 'Yellowish', value: 'yellowish' }
    ];
    const neckSelections = [
        { key: 'Enlarged thyroid nodes', value: 'enlargedThyroid' },
        { key: 'Enlarged Lymph', value: 'enlargedLymph' }
    ];
    const breastSelections = [
        { key: 'Mass', value: 'mass' },
        { key: 'Nipple discharge', value: 'nippleDischarge' },
        { key: 'skin - orange peel or dimpling', value: 'skin' },
        { key: 'Enlarged axillary lymph nodes', value: 'enlargedAxillary ' }
    ];
    const thoraxSelections = [
        { key: 'Abnormal heart sounds / rate / rhythym', value: 'abnormalHeartSounds' },
        { key: 'Abnormal Breath sounds / respiratory rate', value: 'abnormalBreathSounds' }
    ];
    const abdomenSelections2 = [
        { key: 'Enlarged Liver', value: 'enlargedLiver' },
        { key: 'Mass', value: 'mass' },
        { key: 'Tenderness', value: 'tenderness' },
        { key: 'Scar', value: 'scar' }
    ];
    const vaginalExaminationSelections = [
        { key: 'Bleeding', value: 'bleeding' },
        { key: 'Discharges', value: 'discharges' },
        { key: 'Cyst/mass', value: 'cyst' },
        { key: 'Scars', value: 'scars' },
        { key: 'Warts', value: 'warts' },
        { key: 'Lacerations', value: 'lacerations' },
        { key: 'others, specify', value: 'others' }
    ];
    const extremitiesSelections2 = [
        { key: 'Edema', value: 'edema' },
        { key: 'Varicosities', value: 'varicosities' },
        { key: 'Pain on forced dorsiflexion', value: 'dorsiflexion' }
    ];

    const highestEducationOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Primary Education', value: 'primaryEducation' },
        { key: 'Secondary Education', value: 'secondaryEducation' },
        { key: 'Vocation', value: 'vocation' },
        { key: 'College', value: 'college' }
    ]
    const birthPlanOptions = [
        { key: 'Hospital', value: 'hospital' },
        { key: 'RHU', value: 'rhu' },
        { key: 'LIC', value: 'lic' },
        { key: 'Home', value: 'home' }
    ];
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>MNC Form 1 Side A</Button>

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                size='full'
                scrollBehavior='inside'
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>MNC Form 1 Side A</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    {/* <FormHeading text='MATERNAL CLIENT RECORD for Prenatal Care' /> */}
                                    <SimpleGrid
                                        columns={{ base: '1', md: '2', xl: '3' }}
                                        spacing={4}
                                    >
                                        <Box
                                            borderWidth='1px'
                                            borderRadius='lg'
                                            padding={5}
                                        >
                                            <Center>
                                                <Text fontSize="xl">
                                                    Medical History
                                                </Text>
                                            </Center>
                                            <Divider orientation='horizontal' />
                                            <Text fontSize='xl'>
                                                Review of Systems:
                                            </Text>
                                            <Divider orientation='horizontal' />
                                            <SimpleGrid columns={1} >
                                                <Box>
                                                    <Checkbox
                                                        label="Heent"
                                                        name="medicalHistory.reviewOfSystems.heent"
                                                        options={heentSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Chest/Heart"
                                                        name="medicalHistory.reviewOfSystems.chestHeart"
                                                        options={chestHeartSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Abdomen"
                                                        name=".medicalHistory.reviewOfSystems.abdomen"
                                                        options={abdomenSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Genital"
                                                        name="medicalHistory.reviewOfSystems.genital"
                                                        options={genitalSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Extremities"
                                                        name=".medicalHistory.reviewOfSystems.extremities"
                                                        options={extremitiesSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Skin"
                                                        name="medicalHistory.reviewOfSystems.skin"
                                                        options={skinSelections}
                                                    />
                                                </Box>
                                            </SimpleGrid>

                                            <SimpleGrid columns={1}>
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>
                                                    Family History:
                                                </Text>
                                                <Divider orientation='horizontal' />
                                                <Box>
                                                    <Checkbox
                                                        label=""
                                                        name="medicalHistory.familyHistory"
                                                        options={familyHistorySelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Divider orientation='horizontal' />
                                                    <Text fontSize='xl'>
                                                        Past Health History:
                                                    </Text>
                                                    <Divider orientation='horizontal' />
                                                    <Checkbox
                                                        label=""
                                                        name="medicalHistory.pastHealthHistory"
                                                        options={pastHealthHistorySelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Divider orientation='horizontal' />
                                                    <Text fontSize='xl'>
                                                        Social History:
                                                    </Text>
                                                    <Divider orientation='horizontal' />
                                                    <Checkbox
                                                        label=""
                                                        name="medicalHistory.socialHistory"
                                                        options={socialHistorySelections}
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                            <SimpleGrid>
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>
                                                    Obsterical History:
                                                </Text>
                                                <Divider orientation='horizontal' />
                                                <Box>
                                                    <Checkbox
                                                        label=""
                                                        name="sideA.medicalHistory.obsterical.obstericalHistory"
                                                        options={obstericalHistorySelections}
                                                    />
                                                </Box>
                                                <Box>

                                                    <Checkbox
                                                        label="History of Previous Deliveries"
                                                        name="sideA.medicalHistory.obstericalHistory.historyOfPreviousDeliveries"
                                                        options={historyOfPreviouDeliveriesSelections}
                                                    />
                                                </Box>
                                                <Box>

                                                    <Checkbox
                                                        label="Menstrual History"
                                                        name="sideA.medicalHistory.obstericalHistory.menstrualHistory"
                                                        options={menstrualHistorySelections}
                                                    />
                                                </Box>
                                                <Box>

                                                    <TextField
                                                        label="Previously used method"
                                                        name="sideA.medicalHistory.familyPlanningHistory.previouslyUsedMethod"
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                        <Box
                                            borderWidth='1px'
                                            borderRadius='lg'
                                            padding={5}
                                        >
                                            <Center>
                                                <Text fontSize="xl">
                                                    Physical Examination
                                                </Text>
                                            </Center>
                                            <Divider orientation='horizontal' />
                                            <Text fontSize='xl'>Vital Signs:</Text>
                                            <Divider orientation='horizontal' />
                                            <SimpleGrid>
                                                <Box>

                                                </Box>
                                                <TextField
                                                    label='Blood pressure'
                                                    name="sideA.physicalExamination.vitalSigns.bloodPressure"
                                                />
                                                <Box>
                                                    <TextField
                                                        label='Weight'
                                                        name="sideA.physicalExamination.vitalSigns.weight"
                                                    />
                                                </Box>
                                                <Box>
                                                    <TextField
                                                        label='Height'
                                                        name="sideA.physicalExamination.vitalSigns.height"
                                                    />
                                                </Box>
                                                <Box>
                                                    <TextField
                                                        label='Body Mass Index'
                                                        name="sideA.physicalExamination.vitalSigns.bmi"
                                                    />
                                                </Box>
                                                <Box>
                                                    <TextField
                                                        label='Pulse Rate'
                                                        name="sideA.physicalExamination.vitalSigns.pulseRate"
                                                    />
                                                </Box>
                                            </SimpleGrid>

                                            <SimpleGrid>
                                                <Box>
                                                    <Checkbox
                                                        label="Conjunctiva"
                                                        name="sideA.physicalExamination.conjunctiva"
                                                        options={conjunctivaSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Neck"
                                                        name="sideA.physicalExamination.neck"
                                                        options={neckSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Breast"
                                                        name="sideA.physicalExamination.breast"
                                                        options={breastSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Thorax"
                                                        name="sideA.physicalExamination.thorax"
                                                        options={thoraxSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Abdomen"
                                                        name="sideA.physicalExamination.abdomen"
                                                        options={abdomenSelections2}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Vaginal Examination"
                                                        name="sideA.physicalExamination.vaginalExamination"
                                                        options={vaginalExaminationSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Extremities"
                                                        name="sideA.physicalExamination.extremities"
                                                        options={extremitiesSelections2}
                                                    />
                                                </Box>
                                                <Box>
                                                    <TextField
                                                        label="Td toxoid vaccine Status:"
                                                        name="sideA.physicalExamination.toxoidVaccineStatus"
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                            <SimpleGrid pt={2}>
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>Impression/Diagnosis:</Text>
                                                <Divider orientation='horizontal' />
                                                <Box>
                                                    <TextField
                                                        label=""
                                                        name="sideA.physicalExamination.impressionDiagnosis"
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                        </Box>
                                        <Box
                                            borderWidth='1px'
                                            borderRadius='lg'
                                            padding={5}
                                        >
                                            <Center>
                                                <Text fontSize="xl">
                                                    Family Serial No.
                                                </Text>
                                            </Center>
                                            <SimpleGrid pb={3} >
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>Name of Client:</Text>
                                                <Divider orientation='horizontal' />
                                                <DatePicker
                                                    name="sideA.familySerial.client.birthday"
                                                    label="Birthday"
                                                />
                                                <Select
                                                    label="Highest Education"
                                                    name="sideA.familySerial.client.highestEducation"
                                                    options={highestEducationOptions}
                                                />
                                                <TextField
                                                    name="sideA.familySerial.client.occupation"
                                                    label="Occupation"
                                                />
                                                <TextField
                                                    name="sideA.familySerial.client.addressStreet"
                                                    label="Street"
                                                />
                                                <TextField
                                                    name="sideA.familySerial.client.addressBarangay"
                                                    label="Barangay"
                                                />
                                                <TextField
                                                    name="sideA.familySerial.client.addressMunicipality"
                                                    label="Municipality"
                                                />
                                                <TextField
                                                    name="sideA.familySerial.client.addressProvince"
                                                    label="Province"
                                                />
                                            </SimpleGrid>
                                            <SimpleGrid>
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>Name of Spouse:</Text>
                                                <Divider orientation='horizontal' />
                                                <TextField
                                                    name="sideA.familySerial.spouse.lastName"
                                                    label="Last Name"
                                                />
                                                <TextField
                                                    name="sideA.familySerial.spouse.firstName"
                                                    label="First Name"
                                                />
                                                <TextField
                                                    name="sideA.familySerial.spouse.middleName"
                                                    label="Middle Name"
                                                />
                                                <DatePicker
                                                    name="sideA.familySerial.spouse.birthday"
                                                    label="Birthday"
                                                />
                                                <Select
                                                    label="Highest Education"
                                                    name="sideA.familySerial.spouse.highestEducation"
                                                    options={highestEducationOptions}
                                                />
                                                <GridItem>
                                                    <TextField
                                                        name="sideA.familySerial.spouse.occupation"
                                                        label="Occupation"
                                                    />
                                                </GridItem>
                                            </SimpleGrid>
                                            <SimpleGrid >
                                                <NumberField
                                                    name="sideA.familySerial.avgFamilyIncome"
                                                    label="Average Family Income"
                                                />
                                                <NumberField
                                                    name="sideA.familySerial.noOfChildren"
                                                    label="No. of Children"
                                                />
                                                <Radio
                                                    label="Birth Plan"
                                                    name="sideA.familySerial.birthPlan"
                                                    options={birthPlanOptions}
                                                />
                                            </SimpleGrid>
                                        </Box>

                                    </SimpleGrid>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button margin={5} type="submit" colorScheme='green'>Submit</Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Form>
                </Formik >
            </Modal>
        </>

    )
}
