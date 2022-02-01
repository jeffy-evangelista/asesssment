import { Box, Center, HStack, Text, Avatar, Wrap, WrapItem, Stack, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { useAuth } from '../../contexts/AuthContext'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from '../../utils/init-firebase'

import Update from './Update'

export default function Profile() {
  const { currentUser } = useAuth()
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const userData = []
    const q = query(collection(db, "admins"), where("email", "==", currentUser.email))
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        userData.push(doc.data())
      })
      setData(userData)
    })

  };

  return (
    <Layout>
      <Center>
        <Box
          borderWidth='1px'
          p={10}
          borderRadius='lg'
        >

          <Stack spacing={10}>
            <HStack justify={'right'}>
              {data.map(item => (
                <Flex align={'center'}>
                  <Update id={item} />
                </Flex>
              ))}
            </HStack>
            <Center>
              <Wrap>
                <WrapItem>
                  <Avatar size='2xl' src='https://bit.ly/broken-link' />
                </WrapItem>
              </Wrap>
            </Center>
            {data.map(item => (
              <HStack spacing={20}>
                <Box>
                  <Center>
                    <Text color='gray.500' fontWeight={700}>
                      Frist Name
                    </Text>
                  </Center>
                  {item.fName}
                </Box>
                <Box>
                  <Center>
                    <Text color='gray.500' fontWeight={700}>
                      Last Name
                    </Text>
                  </Center>
                  {item.lName}
                </Box>
                <Box>
                  <Center>
                    <Text color='gray.500' fontWeight={700}>
                      Username
                    </Text>
                  </Center>
                  {item.userName}
                </Box>
              </HStack>
            ))}

          </Stack>
        </Box>


      </Center>

    </Layout>
  )
}
