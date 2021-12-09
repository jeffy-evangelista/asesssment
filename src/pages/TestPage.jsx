

import AnimeList from './modal';
import {
    Flex,
    Spacer,
    Stack,
    Button,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import {
    ViewIcon,
    AddIcon } from '@chakra-ui/icons'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { db } from '../utils/init-firebase'


export default function SocialWorker() {

    const [socialWork, setSocialWork] = useState([]);
    const usersCollectionRef = collection(db, "users");

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

                            <Tr key={works.id}>
                                <Td>{works.displayName}</Td>
                                <Td>
                                    <Stack direction="row" spacing={1}>
                                            <AnimeList colorScheme="teal"/>
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
