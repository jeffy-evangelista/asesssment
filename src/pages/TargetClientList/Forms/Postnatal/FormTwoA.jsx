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
    Flex,
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
    useDisclosure,
    FormHelperText
} from '@chakra-ui/react';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import Select from '../../../components/Fields/Select';
import Checkbox from '../../../components/Fields/Checkbox';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import NumberField from "../../../components/Fields/NumberField";


export default function FormTwoA() {

    const initialValues = {
        dateOfVisit: '',
        physicalExamination: {
            dateOfDelivery: '',
            attendant: '',
            sex: '',
            typeOfDelivery: '',
            placeOfDelivery: '',
            amtsl: {
                steps: {
                    noOne: '',
                    noTwo: '',
                    noThree: ''
                },
                isProvided: ''
            }
        },
        assessment: {
            postPartumMother: {
                dangerSigns: {

                    unconscious: '',
                    VaginalBleeding: {
                        hrs: '',
                        days: '',
                        otherVisit: ''
                    },
                    severeAbdominalPain: '',
                    looksVeryIll: '',
                    severeHeadache: '',
                    severeDiffOfBreath: '',
                    severeVomiting: '',
                    postPartumDepression: '',
                },
                pelvicExamFindings: {
                    uterus: {
                        contracted: '',
                        relaxed: ''
                    },
                    vaginalBleeding: {
                        profuse: '',
                        moderate: '',
                        scanty: ''
                    },
                    vaginalDischarge: {
                        color: '',
                        odor: ''
                    },
                    vaginalLaceration: {
                        firstDegree: '',
                        secondDegree: '',
                        thirdDegree: '',
                        lacerationSutured: ''
                    },
                    ifCs: '',
                }
            },
            newborn: {
                withPoorSuck: '',
                ifBreathing: '',
                severeChestIndrawing: '',
                grunting: '',
                convulsions: '',
                floppyStiffExtremities: '',
                temp: '',
                severeJaundice: '',
                bleedingFromUmbilicalStumpOrCut: '',
                umbilicusDraining: '',
                foulSmellingDischarge: '',
                skinPostules: '',
                essentialNewbornCare: {
                    one: '',
                    two: '',
                    three: '',
                    four: '',
                    earlyEncGiven: ''
                },
                breastFeeding: "",
                otherEncGiven: {
                    vitKInjection: "",
                    eyePropylaxis: "",
                    newbornScreening: "",
                    others: ""
                },
                newbornScreeningDone: ""
            }
        },
        supplementation: {
            noOfTabletsGiven: {
                no: '',
                dateGiven: ''
            },
            vitaminA: {
                no: '',
                dateGiven: ''
            }
        },
    }

    const onSubmit = (values) => {
        console.log('Form data', values)
    }

    const attendantOpt = [
        { key: 'Doctor', value: 'doctor' },
        { key: 'Nurse', value: 'nurse' },
        { key: 'Midwife', value: 'midwife' },
        { key: 'TBA/Hilot', value: 'hilot' },
        { key: 'Others', value: 'others' }
    ];
    const sexOpt = [
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' }
    ];
    const typeOfDeliveryOpt = [
        { key: 'NSD', value: 'nsd' },
        { key: 'CS', value: 'cs' },
        { key: 'Others', value: 'Others' }
    ]
    const placeOfDeliveryOpt = [
        { key: 'Health Facility', value: 'healthFacility' },
        { key: 'Government Hospital', value: 'governmentHospital' },
        { key: 'Private Hospital', value: 'privateHospital' },
        { key: 'Private Clinic/Birthing', value: 'privateClinic' },
        { key: 'Main Health Center', value: 'mainHealthCenter' },
        { key: 'BHS/Birthing Home', value: 'birthingHome' },
        { key: 'Others', value: 'others' }
    ];
    const amtslStepOneOpt = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];
    const amtslStepTwoOpt = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];
    const amtslStepThreeOpt = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];
    const amtslProvidedOpt = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];
    const visitSelections = [
        { key: 'w/in 24 hrs', value: 'w/in24hrs' },
        { key: 'w/in 3-7 days', value: 'w/in3-7days' },
        { key: 'Other visits', value: 'otherVisits' }
    ];
    const lacerationSuturedOpt = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];
    const yesNoOpt = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];
    const breastFeedingSelections = [
        { key: 'After 90 minutes but w/in twenty-four (24) hrs', value: 'checked' }
    ];
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>MNC Form 2 Side A</Button>

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
                            <ModalHeader>MNC Form 2 Side A</ModalHeader>
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
                                            <DatePicker
                                                name="dateOfVisit"
                                                label="Date of visit:"
                                            />
                                            <Divider orientation='horizontal' />
                                            <Text fontSize='xl'>
                                                Physical Examination
                                            </Text>
                                            <Divider orientation='horizontal' />
                                            <SimpleGrid columns={1} >
                                                <Box>
                                                    <DatePicker
                                                        label="Date of Delivery:"
                                                        name="physicalExamination.dateOfDelivery"
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="Attendant"
                                                        name="physicalExamination.attendant"
                                                        options={attendantOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="Sex"
                                                        name="physicalExamination.sex"
                                                        options={sexOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="Type of Delivery"
                                                        name="physicalExamination.typeOfDelivery"
                                                        options={typeOfDeliveryOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="Place of Delivery"
                                                        name="physicalExamination.placeOfDelivery"
                                                        options={placeOfDeliveryOpt}
                                                    />
                                                </Box>

                                                <Box>
                                                    <Divider orientation='horizontal' />
                                                    <Text fontSize='xl'>
                                                        AMTSL Steps:
                                                    </Text>
                                                    <Divider orientation='horizontal' />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="1. Oxytocin injected w/in 1 minute of delivery"
                                                        name="physicalExamination.amtsl.steps.noOne"
                                                        options={amtslStepOneOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="2. Controlled cord traction/counter traction done"
                                                        name="physicalExamination.amtsl.steps.noTwo"
                                                        options={amtslStepTwoOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="3. Uterine massage done"
                                                        name="physicalExamination.amtsl.steps.noThree"
                                                        options={amtslStepThreeOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="Therefore, AMTSL provided:"
                                                        name="physicalExamination.amtsl.isProvided"
                                                        options={amtslProvidedOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <FormHelperText>
                                                        Check yes if all the 3 steps were done
                                                    </FormHelperText>
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
                                                    Assessment of the post partum mother (Postpartum Visits)
                                                </Text>
                                            </Center>
                                            <Divider orientation='horizontal' />
                                            <Text fontSize='xl'>Danger Signs (Mother)</Text>
                                            <Divider orientation='horizontal' />
                                            <SimpleGrid>
                                                <Box>
                                                    <Checkbox
                                                        label="Unconscious"
                                                        name="assessment.postPartumMother.dangerSigns.unconscious"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <FormLabel>Vaginal Bleeding No. of pads per day</FormLabel>
                                                    <TextField
                                                        placeholder="w/in 24 hrs"
                                                        name="assessment.postPartumMother.dangerSigns.VaginalBleeding.hrs"
                                                    />
                                                    <TextField
                                                        placeholder="w/in 3-7 days"
                                                        name="assessment.postPartumMother.dangerSigns.VaginalBleeding.days"
                                                    />
                                                    <TextField
                                                        placeholder="Other visits"
                                                        name="assessment.postPartumMother.dangerSigns.VaginalBleeding.otherVisit"
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe abdominal Pain"
                                                        name="assessment.postPartumMother.dangerSigns.severeAbdominalPain"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Looks very ill"
                                                        name="assessment.postPartumMother.dangerSigns.looksVeryIll"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe headache with visual disturbance"
                                                        name="assessment.postPartumMother.dangerSigns.severeHeadache"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe difficulties of breathing"
                                                        name="assessment.postPartumMother.dangerSigns.severeDiffOfBreath"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe vomiting"
                                                        name="assessment.postPartumMother.dangerSigns.severeVomiting"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe partum depression"
                                                        name="assessment.postPartumMother.dangerSigns.postPartumDepression"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                            <SimpleGrid>
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>Pelvic Exam Findings</Text>
                                                <Divider orientation='horizontal' />
                                                <Box>
                                                    <FormLabel>
                                                        Uterus:
                                                    </FormLabel>
                                                    <HStack>
                                                        <Box>
                                                            <Checkbox
                                                                label="Contracted"
                                                                name="assessment.postPartumMother.pelvicExamFindings.uterus.contracted"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Checkbox
                                                                label="Relaxed"
                                                                name="assessment.postPartumMother.pelvicExamFindings.uterus.relaxed"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                                <Box>
                                                    <FormLabel>
                                                        Vaginal Discharge:
                                                    </FormLabel>
                                                    <HStack>
                                                        <Box>
                                                            <Checkbox
                                                                label="Color"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalDischarge.color"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Checkbox
                                                                label="Odor"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalDischarge.odor"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                                <Box>
                                                    <FormLabel>
                                                        Vaginal Bleeding:
                                                    </FormLabel>
                                                    <HStack>
                                                        <Box>
                                                            <Checkbox
                                                                label="Profuse"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.profuse"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Checkbox
                                                                label="Moderate"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.moderate"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Checkbox
                                                                label="Scantry"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.scanty"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                                <Box>
                                                    <FormLabel>
                                                        Vaginal Laceration:
                                                    </FormLabel>
                                                    <HStack>
                                                        <Box>
                                                            <Checkbox
                                                                label="1st Degree"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.firstDegree"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Checkbox
                                                                label="2nd Degree"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.secondDegree"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Checkbox
                                                                label="3rd Degree"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.thirdDegree"
                                                                options={visitSelections}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Radio
                                                                label="If with laceration, Sutured?"
                                                                name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.lacerationSutured"
                                                                options={lacerationSuturedOpt}
                                                            />
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="If CS, bleeding and/or swelling from the wound"
                                                        name="assessment.postPartumMother.pelvicExamFindings.ifCs"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Divider orientation='horizontal' />
                                                    <Text fontSize='xl'>Supplementation</Text>
                                                    <Divider orientation='horizontal' />
                                                </Box>
                                                <Box>
                                                    <SimpleGrid spacingX={5} columns={2}>
                                                        <GridItem colSpan={2}>
                                                            <FormLabel>
                                                                No. of tablets given(60mcg Iron with 400 mch Folic acid)
                                                            </FormLabel>
                                                        </GridItem>
                                                        <GridItem>
                                                            <NumberField
                                                                placeholder="Number"
                                                                name="supplementation.noOfTabletsGiven.no" />
                                                        </GridItem>
                                                        <GridItem>
                                                            <DatePicker
                                                                name="supplementation.noOfTabletsGiven.dateGiven" />
                                                        </GridItem>
                                                    </SimpleGrid>
                                                </Box>
                                                <Box>
                                                    <SimpleGrid spacingX={5} columns={2}>
                                                        <GridItem colSpan={2}>
                                                            <FormLabel>
                                                                Vitamin A
                                                            </FormLabel>
                                                        </GridItem>
                                                        <GridItem>
                                                            <NumberField
                                                                placeholder="Number"
                                                                name="supplementation.vitaminA.no" />
                                                        </GridItem>
                                                        <GridItem>
                                                            <DatePicker
                                                                name="supplementation.vitaminA.dateGiven" />
                                                        </GridItem>
                                                    </SimpleGrid>
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
                                                    Newborn Assessment (Postnatal Visits)
                                                </Text>
                                            </Center>
                                            <Divider orientation='horizontal' />
                                            <Text fontSize='xl'>Danger Signs (Baby)</Text>
                                            <Divider orientation='horizontal' />
                                            <SimpleGrid>
                                                <Box>
                                                    <Checkbox
                                                        label="With poor wuch or difficulty of breathing"
                                                        name="assessment.newborn.withPoorSuck"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="if breathing is >60/min or <30/min"
                                                        name="assessment.newborn.ifBreathing"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe chest indrawing"
                                                        name="assessment.newborn.severeChestIndrawing"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Grunting"
                                                        name="assessment.newborn.grunting"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Convulsion"
                                                        name="assessment.newborn.convulsions"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Floppy or stiff extremities"
                                                        name="assessment.newborn.floppyStiffExtremities"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Temp. > 37.8 or < 35.5"
                                                        name="assessment.newborn.temp"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Severe Jaundice"
                                                        name="assessment.newborn.severeJaundice"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Bleeding from Umbilical Stump or cut"
                                                        name="assessment.newborn.bleedingFromUmbilicalStumpOrCut"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Umbilicus draining pus or umbilical redness extending to skin"
                                                        name="assessment.newborn.umbilicusDraining"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Foul-smelling discharge from cord stump"
                                                        name="assessment.newborn.foulSmellingDischarge"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="More than 10 sin postules or swelling, redness of skin"
                                                        name="assessment.newborn.skinPostules"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                            <SimpleGrid>
                                                <Divider orientation='horizontal' />
                                                <Text fontSize='xl'>Essential Newborn Care(ENC)</Text>
                                                <Divider orientation='horizontal' />
                                                <Box>
                                                    <Radio
                                                        label="1. Immediate and thorough drying"
                                                        name="assessment.newborn.essentialNewbornCare.one"
                                                        options={yesNoOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="2. Early skin to skin contact at least lasting for 90 minutes starting immediately after birth"
                                                        name="assessment.newborn.essentialNewbornCare.two"
                                                        options={yesNoOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="3. Timely coed clamping and cutting"
                                                        name="assessment.newborn.essentialNewbornCare.three"
                                                        options={yesNoOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="4. Early initiation of breast feeding and non-separation of the mother from the newborn"
                                                        name="assessment.newborn.essentialNewbornCare.four"
                                                        options={yesNoOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Radio
                                                        label="Early ENC given (check yes if all 4 components were provided)"
                                                        name="assessment.newborn.essentialNewbornCare.earlyEncGiven"
                                                        options={yesNoOpt}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Divider orientation='horizontal' />
                                                    <Text fontSize='xl'>Other ENC Given</Text>
                                                    <Divider orientation='horizontal' />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="1. Vitamin K injection"
                                                        name="assessment.newborn.otherEncGiven.vitKInjection"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="2. Eey propylaxis"
                                                        name="assessment.newborn.otherEncGiven.eyePropylaxis"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="3. Newborn screening (write done or referred)"
                                                        name="assessment.newborn.otherEncGiven.newbornScreening"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Checkbox
                                                        label="Others"
                                                        name="assessment.newborn.otherEncGiven.others"
                                                        options={visitSelections}
                                                    />
                                                </Box>
                                            </SimpleGrid>
                                            <Radio
                                                label="Newborn Screening Done:"
                                                name="assessment.newborn.newbornScreeningDone"
                                                options={yesNoOpt}
                                            />
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
