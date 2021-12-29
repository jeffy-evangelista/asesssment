import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Button, Input, FormControl, FormErrorMessage, FormLabel, Stack,
} from '@chakra-ui/react'
import {Form,Field,Formik} from "formik";

import { useToast } from '@chakra-ui/react'
import { doc, updateDoc} from "firebase/firestore";
import {db} from "../../utils/init-firebase";

import { ViewIcon} from "@chakra-ui/icons";
import Select from "../components/Fields/Select";
import {legislativeDistrictOptions,administrativeDistricts,barangayOptions,positionOptions} from "../components/Constants"




export default  function Update ({works}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()

    async  function updateUsers(values) {
        const documentId = JSON.parse(JSON.stringify(values.id))
        const userRef = doc(db, 'users', documentId);
        await  updateDoc(userRef,{
            id: values.id,
            displayName:values.displayName,
            email: values.email,
            administrativeDistrict:values.administrativeDistrict,
            legislativeDistrict:values.legislativeDistrict,
            barangay:values.barangay,
            isAdmin: values.isAdmin,
        })
    }

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <ViewIcon />
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
                        Update Social Worker Account
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Formik
                                initialValues={{
                                    id: works.id,
                                    displayName:works.displayName,
                                    email: works.email,
                                    administrativeDistrict: works.administrativeDistrict,
                                    legislativeDistrict: works.legislativeDistrict,
                                    barangay: works.barangay,
                                    isAdmin: works.isAdmin,
                                }}
                                onSubmit={(values, actions) => {
                                    updateUsers(values)
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
                                        <Field name='displayName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.displayName && form.touched.displayName}>
                                                    <FormLabel htmlFor='displayName'>Display Name</FormLabel>
                                                    <Input {...field} id='displayName' placeholder='displayName' />
                                                    <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='email' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                                                    <Input {...field} id='email' placeholder='email' />
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Select
                                            label="Legislative District"
                                            name="legislativeDistrict"
                                            options={legislativeDistrictOptions}
                                        />
                                        <Select
                                            label="Administrative District"
                                            name="administrativeDistrict"
                                            options={administrativeDistricts}
                                        />
                                        <Select
                                            label="Barangay"
                                            name="barangay"
                                            options={barangayOptions}
                                        />
                                        <Select
                                            label="Position"
                                            name="isAdmin"
                                            options={positionOptions}
                                        />




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
