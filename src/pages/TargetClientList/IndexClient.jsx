import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Box,
    Input,
    Link, Tooltip, Button, Text
} from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import ViewClient from "./ViewClient";
import UpdateClient from "./UpdateClient";
import Create from "./Create";
import DataTable from "react-data-table-component";
import { EditIcon } from '@chakra-ui/icons'

export default function IndexClient() {
    const [filterText, setFilterText] = useState("");
    const [targetClient, setTargetClient] = useState([]);

    const Data = () => {
        const usersCollectionRef = collection(db, "client");
        onSnapshot(usersCollectionRef, (snapshot) => {
            let userData = []
            snapshot.docs.forEach(doc => {
                userData.push({ ...doc.data(), id: doc.id })
            })
            setTargetClient(userData)
        })
    };

    useEffect(() => {
        Data();
    }, []);

    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: (row) => row.first,
                sortable: true,
                grow: 2,
            },
            {
                name: "Last Name",
                selector: (row) => row.last,
                sortable: true,
                grow: 2,
            },
            {
                name: "Actions",
                cell: (works) => <HStack>
                    <ViewClient works={works} />
                    <UpdateClient works={works} />

                </HStack>
            },
        ],
        []
    );


    return (

        <Layout>

            <Flex pb={5}>
                <Heading >
                    Target Client List
                </Heading>
                <Spacer />
                <HStack>
                    <Input
                        type="text"
                        placeholder="Search List"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    <Create />
                </HStack>
            </Flex>

            <DataTable
                highlightOnHover
                pagination
                direction="ltr"
                responsive
                striped
                columns={columns}
                data={targetClient.filter((value) => {
                    if (filterText === "") {
                        return value;
                    } else if (
                        value.first
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    } else if (
                        value.last
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    }
                })}

            />
        </Layout>
    )
}
