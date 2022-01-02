import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Center,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import TempModal from "./tempModal";
import WorkModal from "./WorkModal";
import Create from "./Create";
import {useTable} from 'react-table'

export default function TargetClientList() {
    const [targetClient, setTargetClient] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const usersCollectionRef = collection(db, "client");
        onSnapshot(usersCollectionRef, (snapshot) => {
            let userData = []
            snapshot.docs.forEach(doc => {
                userData.push({ ...doc.data(), id: doc.id })
            })
            setTargetClient(userData)
        })
    };

    return (
        <Layout>
            <Flex>
                <Heading>Target Client List</Heading>
                <Spacer />
                <Create />
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
                        {targetClient.map((works) => {
                            return (
                                <Tr key={works.id}>
                                    <Td>{works.first} {works.middle} {works.last}</Td>
                                    <Td>
                                        <HStack>
                                            <TempModal works={works} />
                                            <WorkModal works={works} />
                                        </HStack>
                                    </Td>

                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Center>
        </Layout>
    )
}
