import {
    Flex,
    Spacer,
    Stack,
    Button,
    Heading,
    Center,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import { 
    EditIcon, 
    ViewIcon, 
    DeleteIcon, 
    AddIcon } from '@chakra-ui/icons'
import { Layout } from '../../components/Layout'
import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/init-firebase";

export default function TargetClientList() {
    const [targetClient, setTargetClient] = useState([]);


    useEffect(() => {
        const usersCollectionRef = collection(db, "client");
        const getSocialWork = async () => {
            const data = await getDocs(usersCollectionRef);
            setTargetClient(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getSocialWork();
    }, []);



  return (
    <Layout>
        
        <Flex>
            <Heading>Target Client List</Heading>
            <Spacer/>
            <Link to='/target-client-list/create'>
                <Button rightIcon={<AddIcon />} colorScheme="green">
                    New Client
                </Button>
            </Link>
        
        </Flex>
        <Center py={6}>
            <Table variant="striped" >
                <Thead>
                    <Tr>
                        <Th>Client Name</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Juana Dela Cruz</Td>
                        <Td>
                            <Stack direction="row" spacing={1}>
                                <Button colorScheme="teal">
                                    <ViewIcon/>
                                </Button>
                                <Link to='/target-client-list/update'>
                                    <Button colorScheme="yellow">
                                        <EditIcon/>
                                    </Button>
                                </Link>
                                <Button colorScheme="red">
                                    <DeleteIcon/>
                                </Button>
                            </Stack>
                        </Td> 
                    </Tr>
                    <Tr>
                        <Td>Maria Katorse</Td>
                        <Td>
                            <Stack direction="row" spacing={1}>
                                <Button colorScheme="teal">
                                    <ViewIcon/>
                                </Button>
                                <Button colorScheme="yellow">
                                    <EditIcon/>
                                </Button>
                                <Button colorScheme="red">
                                    <DeleteIcon/>
                                </Button>
                            </Stack>
                        </Td> 
                    </Tr>
                    <Tr>
                        <Td>Angel Condense</Td>
                        <Td>
                            <Stack direction="row" spacing={1}>
                                <Button colorScheme="teal">
                                    <ViewIcon/>
                                </Button>
                                <Button colorScheme="yellow">
                                    <EditIcon/>
                                </Button>
                                <Button colorScheme="red">
                                    <DeleteIcon/>
                                </Button>
                            </Stack>
                        </Td> 
                    </Tr>
                </Tbody>
            </Table>
        </Center>
  </Layout>
  )
}
