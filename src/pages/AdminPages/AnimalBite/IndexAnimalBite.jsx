import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Box,
    Input,
    Link, Tooltip, Button, Text,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { Layout } from '../../../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/init-firebase";
import ViewPatient from "./Patients/ViewPatient";
import AnimalBite from "./Patients/UpdatePatient";
import DataTable from "react-data-table-component";
import Create from './Patients/CreatePatient'

export default function IndexCommunicable() {
    const [filterText, setFilterText] = useState("");
    const [targetClient, setTargetClient] = useState([]);

    const Data = () => {
        const usersCollectionRef = collection(db, "patients");
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
                selector: (row) => row.fName,
                sortable: true,
                grow: 2,
            },
            {
                name: "Last Name",
                selector: (row) => row.lName,
                sortable: true,
                grow: 2,
            },
            {
                name: "Actions",
                cell: (works) => <HStack>
                    <ViewPatient works={works} />
                    < AnimalBite works={works} />

                </HStack>
            },
        ],
        []
    );


    return (

        <Layout>
            <Flex pb={5}>
                <Heading >
                    ABT Admin
                </Heading>
            </Flex>
            <Box
                borderWidth='1px'
                borderRadius='lg'
                p={5}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Patient List</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {/* <iframe src="https://datastudio.google.com/embed/reporting/09ea3264-dc68-4b96-ace1-0641d5d6faac/page/ytpjC" /> */}
                        </TabPanel>
                        <TabPanel>
                            <Flex pb={5}>
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
                                        value.fName
                                            .toLowerCase()
                                            .includes(filterText.toLowerCase())
                                    ) {
                                        return value;
                                    } else if (
                                        value.lName
                                            .toLowerCase()
                                            .includes(filterText.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                })}

                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>


        </Layout>
    )
}
