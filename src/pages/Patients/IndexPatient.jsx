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
import ViewUser from "./ViewPatient";
// import UpdateUser from "./UpdatePatient";
import CreateUser from "./CreatePatient";
import DataTable from "react-data-table-component";
import { EditIcon } from '@chakra-ui/icons'
import AnimalBite from './UpdatePatient';

export default function IndexPatient() {
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
                    <ViewUser works={works} />

                </HStack>
            },
        ],
        []
    );


    return (

        <Layout>

            <Flex pb={5}>
                <Heading >
                    Patients List
                </Heading>
                <Spacer />
                <HStack>
                    <Input
                        type="text"
                        placeholder="Search List"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    <CreateUser />
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
        </Layout>
    )
}
