import React from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Stack,
    Heading,
    NumberInput,
    NumberInputField,
    HStack,
    Box,
    Divider
} from '@chakra-ui/react'
import { Form, Field, Formik } from "formik";
import { useToast } from '@chakra-ui/react'
import { db } from '../../utils/init-firebase'
import DatePicker from '../components/Fields/DatePicker';
import Radio from '../components/Fields/Radio'
import { collection, addDoc } from "firebase/firestore"
import Select from "../components/Fields/Select";
import { AddIcon } from '@chakra-ui/icons'
import TextField from '../components/Fields/TextField';
import NumberField from '../components/Fields/NumberField';


export default function Create() {
    async function createClient(values) {
        const usersCollectionRef = collection(db, "patients");
        await addDoc(usersCollectionRef, {
            fName: values.fName,
            mName: values.mName,
            lName: values.lName,
            age: values.age,
            sex: values.sex,
            AnimalBite: {
                animal: "",
                transmission: "",
                date: new Date()
            },
            CommunicableDiseases: {
                diagnosis: "",
                onsetDate: new Date(),
                guardian: "",
                patientWorkplace: "",
                patientWorkplaceAddress: "",
                hostpitalized: ""
            }
        });
    }

    const genderOpt = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' }
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()

    return (
        <>
            <Button
                ref={btnRef}
                colorScheme='green'
                onClick={onOpen}
            >
                <AddIcon />
            </Button>
            <Modal
                initialFocusRef={firstField}
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                size='xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader borderBottomWidth='1px'>
                        Add New Patient
                    </ModalHeader>
                    <Formik
                        initialValues={{}}
                        onSubmit={(values, actions) => {
                            createClient(values)

                                .then(() => {
                                    toast({
                                        title: 'Success',
                                        description: 'Patient created successfully',
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
                        }
                        }
                    >
                        {(props) => (
                            <Form>
                                <ModalBody>
                                    <Stack spacing='24px'>
                                        <Box>
                                            <TextField
                                                label="First Name"
                                                name="fName"
                                            />
                                        </Box>
                                        <Box>
                                            <TextField
                                                label="Middle Name"
                                                name="mName"
                                            />
                                        </Box>
                                        <Box>
                                            <TextField
                                                label="Last Name"
                                                name="lName"
                                            />
                                        </Box>
                                        <Box>
                                            <NumberField
                                                label="Age"
                                                name="age"
                                            />
                                        </Box>
                                        {/* <Field name='age' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.age && form.touched.age}>
                                                    <FormLabel htmlFor='firstname'>Age</FormLabel>
                                                    <NumberInput  >
                                                        <NumberInputField
                                                            {...field}
                                                            id='age'
                                                            placeholder=''
                                                        />
                                                    </NumberInput>
                                                    <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field> */}
                                        <Box>
                                            <Radio
                                                name="sex"
                                                label="Sex"
                                                options={genderOpt}
                                            />
                                        </Box>
                                        <Box>
                                            <TextField
                                                label="Address"
                                                name="address"
                                            />
                                        </Box>
                                    </Stack>
                                </ModalBody>
                                <ModalFooter borderTopWidth='1px'>
                                    <Button
                                        colorScheme='blue'
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                        mr={3}
                                    >
                                        Submit
                                    </Button>
                                    <Button variant='outline' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Form>
                        )}
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    )
}
