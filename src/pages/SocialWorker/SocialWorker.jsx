import {
    Flex,
    Spacer,
    Stack,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td, Button,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import {
    collection, onSnapshot,
} from "firebase/firestore";
import { db } from '../../utils/init-firebase'
import Create from "./Create";
import Update from "./Update";
import {Layout} from "../../components/Layout";
import {DeleteIcon} from "@chakra-ui/icons";
export default function SocialWorker() {
    const [socialWork, setSocialWork] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const usersCollectionRef = collection(db, "users");
        onSnapshot(usersCollectionRef, (snapshot) => {
            let userData = []
            snapshot.docs.forEach(doc => {
                userData.push({ ...doc.data(), id: doc.id })
            })
            setSocialWork(userData)
        })

    };

    return (

        <Layout>
            <Flex>
                <Heading>Social Worker</Heading>
                <Spacer/>
                <Create/>
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

                            <Tr key={works.id}>
                                <Td>{works.displayName}</Td>
                                <Td>
                                    <Stack direction="row" spacing={1}>
                                   <Update works= {works}/>


                                    </Stack>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Layout>

    )
}