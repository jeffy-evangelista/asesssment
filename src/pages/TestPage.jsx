import {
    Flex,
    Spacer,
    Stack,
    Button,
    Heading,
    Table,
    Thead,
    Tr,useToast,
    Th,
    Tbody,
    Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    Checkbox, CheckboxGroup,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    FormLabel, Box, Textarea, Select, InputLeftAddon, InputGroup, Input, FormControl,
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
import {auth, db} from '../utils/init-firebase'
import {createUserWithEmailAndPassword} from "firebase/auth";



export default function TestPage() {

    const [socialWork, setSocialWork] = useState([]);
    const [data1, data2] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const firstField = React.useRef()


 const  { register, handleSubmit } = useForm({
        defaultValues: {
            displayName: "bill"

        }
    });

   const onSubmit = data => {
        console.log(data)

   };



    function ThisClick(id) {

        data2(id)
    }


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

                                            ThisClick(works.id);

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box>
                                    <FormLabel >Name</FormLabel>
                                <Input {...register("email")} />
                                </Box>

                                <Box>
                                    <FormLabel >Display Name</FormLabel>
                                    <Input {...register("displayName")} />
                                </Box>
                                    <Box>
                                        <FormLabel >Legislative District</FormLabel>
                                        <Select {...register("districtLegislative", { required: true })}>

                                            <option value="d2">District 2</option>


                                        </Select>

                                    </Box>
                                        <Box>
                                            <FormLabel >Administrative District</FormLabel>
                                            <Select {...register("districtAdministrative", { required: true })}>
                                                <option value="paq">Paquibato</option>


                                            </Select>
                                        </Box>
                                            <Box>
                                                <FormLabel >Barangay</FormLabel>
                                                <Select {...register("barangay", { required: true })}>
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
                                                </Select>
                                            </Box>
                                                <Box>
                                                    <FormLabel >isAdmin</FormLabel>
                                                    <Checkbox type="checkbox" {...register("isAdmin")} />
                                                </Box>
                                <button type="submit">Submit</button>
                            </form>

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
