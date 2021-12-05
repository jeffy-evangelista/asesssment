import {
  Flex,
  Spacer,
  Stack,
  Button,
  Heading,
  Center,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'
import {
  EditIcon,
  ViewIcon,
  DeleteIcon,
  AddIcon } from '@chakra-ui/icons'
import { Layout } from '../../components/Layout'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from '../../utils/init-firebase'
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
                          <Link to={{
                                  pathname: '/social-worker/update',
                                  state: {
                                      userId:works.id,
                                      Name:works.displayName,
                                      Email:works.email,
                                      Barangay:works.barangay,
                                      DistrictA:works.districtAdministrative,
                                      DistrictL:works.districtLegislative,
                                      isAdmin:works.isAdmin,
                                      uid:works.uid

                                  }
                              }}>






                              <Button colorScheme="teal">
                                  <ViewIcon/>
                              </Button>
                          </Link>

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
