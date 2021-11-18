import {  chakra, 
          Container, 
          Heading,
          Avatar,
          Box,
          Center,
          Image,
          Flex,
          Text,
          Stack,
          Button,
          useColorModeValue
        } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Profilepage() {
  const { currentUser } = useAuth()
  return (
    <Layout>
      <Heading>User Profile</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        {/* <chakra.pre p={4}>
          {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
        </chakra.pre> */}
        <Center py={12}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'md'}
        overflow={'hidden'}
        boxShadow={'lg'}>
          
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Name
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Email</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Email address here...
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Location</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              location here...
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Date Created</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Date here
              </Text>
            </Stack>
          </Stack>

          
          <Link to='/profile/edit'>
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              >
                Edit User
            </Button>   
          </Link>
        </Box>
      </Box>
    </Center>
      </Container>
    </Layout>
  )
}
