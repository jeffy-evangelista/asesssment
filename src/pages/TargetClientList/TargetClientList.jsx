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
    chakra
} from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import TempModal from "./tempModal";
import WorkModal from "./WorkModal";
import Create from "./Create";
import { useTable, useSortBy } from 'react-table'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

export default function TargetClientList() {
    const [targetClient, setTargetClient] = useState([]);

    useEffect(() => {
        Data();
    }, []);

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

    const data = React.useMemo(
        () => [
            {
                fromUnit: 'inches',
                toUnit: 'millimetres (mm)',
                factor: 25.4,
            },
            {
                fromUnit: 'feet',
                toUnit: 'centimetres (cm)',
                factor: 30.48,
            },
            {
                fromUnit: 'yards',
                toUnit: 'metres (m)',
                factor: 0.91444,
            },
        ],
        [],
    )
    const columns = React.useMemo(
        () => [
            {
                Header: 'To convert',
                accessor: 'fromUnit',
            },
            {
                Header: '',
                accessor: 'toUnit',
            },
            {
                Header: 'Multiply by',
                accessor: 'factor',
                isNumeric: true,
            },
        ],
        [],
    )
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy)

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
            {/* <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    isNumeric={column.isNumeric}
                                >
                                    {column.render('Header')}
                                    <chakra.span pl='4'>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <TriangleDownIcon aria-label='sorted descending' />
                                            ) : (
                                                <TriangleUpIcon aria-label='sorted ascending' />
                                            )
                                        ) : null}
                                    </chakra.span>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                        {cell.render('Cell')}
                                    </Td>
                                ))}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table> */}
        </Layout>
    )
}
