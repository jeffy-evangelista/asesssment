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
    useColorModeValue,
} from '@chakra-ui/react'
import { Form, Field, Formik } from "formik";
import { useToast } from '@chakra-ui/react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import Select from "../components/Fields/Select";




export default function Update({ id }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()

    async function updateUsers2(values) {

        const userRef = doc(db, 'users', id.id);
        await updateDoc(userRef, {
            ...values

        })
    }


    return (
        <>
            <Button
                colorScheme='green'
                ref={btnRef}
                onClick={onOpen}
            >
                Update Profile
            </Button>


            <Modal
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader borderBottomWidth='1px'>
                        Update Profile
                    </ModalHeader>
                    <Formik
                        initialValues={{
                            ...id
                        }}
                        onSubmit={(values, actions) => {
                            updateUsers2(values)
                                .then(() => {
                                    toast({
                                        title: 'Success',
                                        description: 'User Profile Updated Successfully',
                                        status: 'info',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                    actions.setSubmitting(false)
                                    onClose()
                                })
                        }}
                    >
                        {(props) => (
                            <Form>
                                <ModalBody>
                                    <Stack spacing='24px'>
                                    <Field name='userName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.userName && form.touched.userName}>
                                                    <FormLabel htmlFor='userName'>First Name</FormLabel>
                                                    <Input {...field} id='userName'  />
                                                    <FormErrorMessage>{form.errors.userName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='fName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.fName && form.touched.fName}>
                                                    <FormLabel htmlFor='fName'>First Name</FormLabel>
                                                    <Input {...field} id='fName'  />
                                                    <FormErrorMessage>{form.errors.fName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        
                                        <Field name='lName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.lName && form.touched.lName}>
                                                    <FormLabel htmlFor='lName'>First Name</FormLabel>
                                                    <Input {...field} id='lName'  />
                                                    <FormErrorMessage>{form.errors.lName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Stack>
                                </ModalBody>
                                <ModalFooter borderTopWidth='1px'>
                                    <Button
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                        colorScheme='blue'
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
