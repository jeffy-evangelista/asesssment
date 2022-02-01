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
import React, { useEffect, useState, useMemo } from 'react'
import { Layout } from '../../../../components/Layout'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import PayThruGCash from './PayThruGCash'
import PlaceOrder from './PlaceOrder'
import DataTable from "react-data-table-component";
import SendProofOfPayment from './SendProofOfPayment'

export default function Order() {
  const [filterText, setFilterText] = useState("");
  const [targetClient, setTargetClient] = useState([]);

  const Data = () => {
    const usersCollectionRef = collection(db, "orders");
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
        name: "Customer Name",
        selector: (row) => row.customerName,
        sortable: true,
        grow: 1,
      },
      {
        name: "Order Status",
        selector: (row) => row.orderStatus,
        sortable: true,
        grow: 1,
      },
      {
        name: "Order Type",
        selector: (row) => row.orderType,
        sortable: true,
        grow: 1,
      },
      {
        name: "Actions",
        cell: (works) =>
            <HStack>
              <PayThruGCash
                works={works}
              />
              <SendProofOfPayment
                works={works}
              />
            </HStack>
      },
            ],
            []
            );

            return (
            <Layout>
              <Heading mb={5}>
                LIST OF ORDERS
              </Heading>


              <Box p={5} borderWidth="1px">
                <Flex pb={5}>
                  <Spacer />
                  <HStack>
                    <Input
                      type="text"
                      placeholder="Search List"
                      onChange={(e) => setFilterText(e.target.value)}
                    />

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
                      value.customerName
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.orderStatus
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.orderType
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                    ) {
                      return value;
                    }
                  })}

                />
              </Box>
            </Layout >

            )
}
