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
import React from 'react'

export default function SocialWorker() {
  return (
  <Layout>      
    <Flex>
        <Heading>Social Worker</Heading>
        <Spacer/>
        <Link to='/social-worker/create'>
            <Button rightIcon={<AddIcon />} colorScheme="green">
                Social Worker
            </Button>
        </Link>
    
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
                <Tr>
                    <Td>Gene Gulanes</Td>
                    <Td>
                        <Stack direction="row" spacing={1}>
                            <Button colorScheme="teal">
                                <ViewIcon/>
                            </Button>
                            <Link to='/social-worker/update'>
                              <Button colorScheme="yellow">
                                  <EditIcon/>
                              </Button>
                            </Link>
                            <Button colorScheme="red">
                                <DeleteIcon/>
                            </Button>
                        </Stack>
                    </Td> 
                </Tr>
                <Tr>
                    <Td>Jeffy Evangelista</Td>
                    <Td>
                        <Stack direction="row" spacing={1}>
                            <Button colorScheme="teal">
                                <ViewIcon/>
                            </Button>
                            <Button colorScheme="yellow">
                                <EditIcon/>
                            </Button>
                            <Button colorScheme="red">
                                <DeleteIcon/>
                            </Button>
                        </Stack>
                    </Td> 
                </Tr>
                <Tr>
                  <Td>Jhon Kristoffer Delgado</Td>
                  <Td>
                    <Stack direction="row" spacing={1}>
                      <Button colorScheme="teal">
                        <ViewIcon/>
                      </Button>
                      <Button colorScheme="yellow">
                        <EditIcon/>
                      </Button>
                      <Button colorScheme="red">
                        <DeleteIcon/>
                      </Button>
                    </Stack>
                  </Td> 
              </Tr>
                <Tr>
                  <Td>Eirol Coronado</Td>
                  <Td>
                    <Stack direction="row" spacing={1}>
                      <Button colorScheme="teal">
                        <ViewIcon/>
                      </Button>
                      <Button colorScheme="yellow">
                        <EditIcon/>
                      </Button>
                      <Button colorScheme="red">
                        <DeleteIcon/>
                      </Button>
                    </Stack>
                  </Td> 
              </Tr>
          </Tbody>
        </Table>
    </Center>
</Layout>
  )
}
