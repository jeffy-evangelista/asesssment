import {
    Flex,
    Spacer,
    Stack,
    Button,
    Heading,
    Table,
    Thead,
    Tr, useToast,
    Th,
    Tbody,
    Td,
    useDisclosure,
    Drawer,
    DrawerBody,
    Checkbox, CheckboxGroup,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    FormLabel,Input, FormControl, FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import {
    ViewIcon,
    AddIcon } from '@chakra-ui/icons'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {
    addDoc,
    collection,
    getDocs, updateDoc,doc
} from "firebase/firestore";
import { db} from '../utils/init-firebase'
import {Formik,Form,Field} from "formik";


export default function TestPage() {

    const [socialWork, setSocialWork] = useState([]);
    const [data1, data2] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const firstField = React.useRef()







    const toast = useToast( )


    useEffect(() => {
        const getSocialWork = async () => {
            const data = await getDocs(usersCollectionRef);
            setSocialWork(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getSocialWork();
    }, []);



        return (


        <Layout>
            <Flex>
                <Heading>Social Worker</Heading>
                <Spacer/>
                <Link to='/social-worker/create'>
                    <Button rightIcon={<AddIcon />} colorScheme="green">
                        Social Worker
                    </Button>
                </Link>

            </Flex>
            <Table variant='striped'>

                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {socialWork.map((works) => {

                        return (

                            <Tr >
                                <Td key={works.id}>{works.displayName}</Td>
                                <Td>
                                    <Stack direction="row" spacing={1}>
                                        <Button   ref={btnRef} colorScheme='teal'   onClick={() => {
                                            onOpen();

                                        }} >

                                            <ViewIcon/>
                                        </Button>
                                    </Stack>
                                </Td>
                            </Tr>



                        );


                    })}
                </Tbody>

            </Table>
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
                      Update Social Worker
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Formik
                                initialValues={{  }}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2))
                                        actions.setSubmitting(false)
                                    }, 1000)
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
                                        <FormControl >
                                        <Field as="select" name="legislativeDistrict">
                                            <option value="red">D1</option>
                                            <option value="green">D2</option>
                                            <option value="blue">D3</option>

                                        </Field></FormControl>

                                            <FormControl >
                                        <Field as="select" name="administrativeDistrict" >

                                            <option value="red">Paquibato</option>
                                            <option value="red2">Paquibato2</option>

                                        </Field></FormControl>
                                                <FormControl >
                                        <Field as="select" name="barangay">
                                            <option value="col">Colosas</option>
                                            <option value="fat">Fatima (Benowang)</option>
                                            <option value="lum"> Lumiad</option>
                                            <option value="mab">Mabuhay</option>
                                            <option value="mal">  Malabog</option>
                                            <option value="map"> Mapula</option>
                                            <option value="pan"> Panalum</option>
                                            <option value="pand">  Pandaitan</option>
                                            <option value="paq">  Paquibato Proper</option>
                                            <option value="pare">  Paradise Embak</option>
                                            <option value="sal">  Salapawan</option>
                                            <option value="sumi"> Sumimao</option>
                                            <option value="tap"> Tapak</option>

                                        </Field></FormControl>
                                                    <FormControl >
                                        <Field as="select" name="isAdmin" >

                                            <option value="true">isAdmin</option>
                                            <option value="false">isNotAdmin</option>

                                        </Field>
                                                    </FormControl>
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


        </Layout>

    )
}
