import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react'
import {Form,Field,Formik} from "formik";
import { useToast } from '@chakra-ui/react'
import { db } from '../../utils/init-firebase'
import {
  collection,
  addDoc
} from "firebase/firestore"
import Select from "../components/Fields/Select";




export default  function Create () {


async function createClient(values){
  const usersCollectionRef = collection(db, "client");
    await addDoc(usersCollectionRef, {
      first: values.firstname,
      middle: values.middlename,
      last: values.lastname,
      administrativeDistrict: values.administrativeDistrict,
      legislativeDistrict: values.legislativeDistrict,
      barangay: values.barangay,
      age:values.age,
      gender:values.gender,
         Figure1: {
             year:  null,
             region: '' ,
             province: '',
             municipality:'' ,
             barangay:''  ,
             birthingCenter: '',
             birthingCenterAddress:'' ,
             referralCenter: '',
             referralCenterAddress: '',

             lastName: '',
             firstName:'' ,
             middleName: '',
             age: '',
             gravidity: "",
             parity: "",
             expDateOfDel: "",

             firstTri: "",
             secondTri: "",
             thirdTri: "",
             pregOutcome: "",

             dayOfDischarge: "",
             withinSevDays: "",
             liveBirth: "",
             maternalDeath: "",
             stillBirth: "",
             earlyNewborn: "",

             nameOfBhw: "",
             barHealthStat: "",
             nameOfMidwife: "",
             ruralHealthUnit: "",
         },
        Figure2:{
            sideA: {
                familySerial: {
                    client: {
                        birthday: null,
                        highestEducation: "",
                        occupation: "",
                        addressStreet: "",
                        addressBarangay: "",
                        addressMunicipality: "",
                        addressProvince: "",
                    },
                    spouse: {
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        birthday: null,
                        highestEducation: "",
                        occupation: ""
                    },
                    avgFamilyIncome: "",
                    noOfChildren: "",
                    birthPlan: ""
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
                    familyHistory: "",
                    pastHealthHistory: "",
                    socialHistory: "",
                    obstericalHistory: {
                        historyOfPreviousDeliveries: "",
                        menstrualHistory: "",
                    },
                    familyPlanningHistory: {
                        previouslyUsedMethod: ""
                    }
                },
                physicalExamination: {
                    vitalSigns: {
                        bloodPressure: "",
                        weight: "",
                        height: "",
                        bmi: "",
                        pulseRate: ""
                    },
                    conjunctiva: [],
                    neck: [],
                    breast: [],
                    thorax: [],
                    abdomen: [],
                    vaginalExamination: [],
                    extremities: [],
                    toxoidVaccineStatus: "",
                    impressionDiagnosis: ""
                }
            },

            sideB: {
                records: [
                    {
                        date: "",
                        complaints: "",
                        mncServicesGiven: "",
                        nameOfProviderAndSignature: "",
                        nextFollowUpSchedule: "",
                    },
                ],
                abdominalExamFindings: {
                    firstTrimester: {
                        firstMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        },
                        secondMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        },
                        thirdMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        }
                    },
                    secondTrimester: {
                        fourthMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        },
                        fifthMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        },
                        sixthMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        }
                    },
                    thirdTrimester: {
                        seventhMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        },
                        eightMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        },
                        ninethMonth: {
                            date: null,
                            fundicHeight: "",
                            fetalHeartTomes: "",
                            aog: "",
                            leopolds: "",
                            lOne: "",
                            lTwo: "",
                            lThree: "",
                            lFour: "",
                            uterineAcitivty: ""
                        }
                    },
                    remarks: {
                        date: "",
                        fundicHeight: "",
                        fetalHeartTomes: "",
                        aog: "",
                        leopolds: "",
                        lOne: "",
                        lTwo: "",
                        lThree: "",
                        lFour: "",
                        uterineAcitivty: ""
                    }
                }
            }
        },
         Figure4: {
             attendantName: "",
             deliveryLocation: "",
             accreditationStatus: "",
             distanceFromResidence: "",
             estimatedCost: "",
             modeOfPayment: "",

             availableTransportation: "",
             bringer: {
                 Name: "",
                 Address: "",
                 Number: "",
             },
             companion: {
                 Name: "",
                 Relationship: "",
                 Address: "",
                 Number: "",
             },
             careTaker: {
                 Name: "",
                 Relationship: "",
             },

             bloodType: "",
             donors: {
                 donorName1: "",
                 donorAddress1: "",
                 donorName2: "",
                 donorAddress2: ""
             },
             complicationReferral: {
                 name: "",
                 address: "",
                 number: ""
             },

             maternalHostpital: {
                 name: "",
                 address: "",
             },
             newbornHostpital: {
                 name: "",
                 address: "",
             },
             conforme: {
                 signature: "",
                 date: null
             }
         },
        // Figure6:values.Figure6,
    });

}



  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toast = useToast()
  const firstField = React.useRef()
  const highestEducationOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Paquibato', value: 'paquibato' }

  ]
    const gender = [
        { key: 'Select an option', value: '' },
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' }

    ]
  const legislativeDistrict = [
    { key: 'Select an option', value: '' },
    { key: 'District1', value: 'd1' },
    { key: 'District2', value: 'd2' },
    { key: 'District3', value: 'd3' }

  ]
  const barangay = [
        { key: 'Select an option', value: '' },
        { key: 'Colosas', value: 'colosas' },
        { key: 'Fatima (Benowang)', value: 'fatima' },
        { key: 'Lumiad', value: 'lumiad' },
        { key: 'Mabuhay', value: 'mabuhay' },
        { key: 'Malabog', value: 'malabog' },
        { key: 'Mapula', value: 'mapula' },
        { key: 'Panalum', value: 'panalum' },
        { key: 'Pandaitan', value: 'pandaitan' },
        { key: 'Paquibato Proper', value: 'paquibatop' },
        { key: ' Paradise Embak', value: 'Paradisee' },
        { key: 'Salapawan', value: 'salapawan' },
        { key: 'Salapawan', value: 'salapawan' },
        { key: 'Tapak', value: 'tapak' }

      ]


  return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
    Add New Maternal Records
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Create New Social Worker Account
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing='24px'>
                <Formik
                    initialValues={{

                    }}
                    onSubmit={(values, actions) => {
                      createClient(values)

                          .then(() => {
                            toast({
                              title: 'Success',
                              description: 'User created successfully',
                              status: 'success',
                              duration: 9000,
                              isClosable: true,
                            })
                            actions.setSubmitting(false)
                            onClose()
                          })
                          .catch(err => {
                            toast({
                              title: 'Error',
                              description: err.message,
                              status: 'error',
                              duration: 9000,
                              isClosable: true,
                            })
                            actions.setSubmitting(false)
                          })

                    }}
                >
                  {(props) => (
                      <Form>
                        <Field name='firstname' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.firstname && form.touched.firstname}>
                                <FormLabel htmlFor='firstname'>First Name</FormLabel>
                                <Input {...field} id='firstname' placeholder='firstname' />
                                <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>

                        <Field name='middlename' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.middlename && form.touched.middlename}>
                                <FormLabel htmlFor='middlename'>Middle Name Name</FormLabel>
                                <Input {...field} id='middlename' placeholder='middlename' />
                                <FormErrorMessage>{form.errors.middlename}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>
                        <Field name='lastname' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                                <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                                <Input {...field} id='lastname' placeholder='lastname' />
                                <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>
                        <Select
                            label="Legislative District"
                            name="legislativeDistrict"
                            options={legislativeDistrict} />



                        <Select
                            label="Administrative District"
                            name="administrativeDistrict"
                            options={highestEducationOptions} />


                        <Select
                            label="Barangay"
                            name="barangay"
                            options={barangay} />


                          <Select
                              label="Gender"
                              name="gender"
                              options={gender} />



                        <Field name='age' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.age && form.touched.age}>
                                <FormLabel htmlFor='firstname'>Age</FormLabel>
                                <NumberInput  >
                                  <NumberInputField {...field} id='age' placeholder='age'  />

                                </NumberInput>

                                <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>



                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                          Submit
                        </Button>
                      </Form>
                  )}
                </Formik>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>


            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
  )
}
