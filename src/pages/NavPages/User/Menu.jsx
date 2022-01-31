import {
  HStack,
  Heading,
  AspectRatio,
} from '@chakra-ui/react'
import React, { useEffect, useState, useMemo } from 'react'
import { Layout } from '../../../components/Layout'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/init-firebase";
import animation from '../../../assets/animation.mp4'
export default function Menu() {
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
        cell: (works) => <HStack>


        </HStack>
      },
    ],
    []
  );

  return (
    <Layout>
      <Heading mb={5}>
        MENU
      </Heading>
      <AspectRatio 
      maxH='720px' 
      maxW='1280px' 
      >
        <iframe
          src={animation}
          allowFullScreen
        />
      </AspectRatio>
    </Layout >

  )
}
