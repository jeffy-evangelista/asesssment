import { TabList, TabPanel, Heading, HStack, Flex, Spacer, Input, Box, TabPanels, Tabs, Tab } from '@chakra-ui/react'
import React, { useState, useEffect, useMemo } from 'react'
import { Layout } from '../../../components/Layout'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/init-firebase";
import DataTable from "react-data-table-component";

export default function IndexAnimalBite() {
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
                name: "Middle Name",
                selector: (row) => row.mName,
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
                    {/* <ViewUser works={works} />
                    <UpdateUser works={works} /> */}

                </HStack>
            },
        ],
        []
    );


    return (
        <Layout>
            <Heading pb={5}>Animal Bite</Heading>
            <Box
                maxW='full'
                borderWidth='1px'
                borderRadius='lg'
                p={5}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Patients List</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
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
                                    {/* <CreateUser /> */}
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
                                        value.mName
                                            .toLowerCase()
                                            .includes(filterText.toLowerCase())
                                    ) {
                                        return value;
                                    } else if (
                                        value.lName
                                            .toLowerCase()
                                            .includes(filterText.toLowerCase())
                                    )
                                     {
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
