import {
  Heading,
  Stack,
  Box, Link, Text, Container, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, TabPanel, TabPanels, FormLabel, HStack, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tab, Tabs, TabList, Center 
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import banner from '../assets/banner.jpg'


export default function Homepage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
<Layout>
  <SimpleGrid columns={12} gap={5}>
    <GridItem colSpan={3}>
      <Box borderWidth="1px" borderRadius="lg" p={10}>
      <Stack spacing={5}>
        <Box>
          <FormLabel>Name</FormLabel>
          Maria Juana Dela Churizo
        </Box>
        <Box>
        <FormLabel>Address</FormLabel>
        Barangay Baliw, San Juan, Ilocos Sur
        </Box>
        <Box>
        <FormLabel>Telephone</FormLabel>
          0912314311
        </Box>
        <Box>
        <FormLabel>Age</FormLabel>
          69
        </Box>
        <Box>
        <FormLabel>Occupation</FormLabel>
          wala
        </Box>
        <Box>
        <FormLabel>Status</FormLabel>
         Single
        </Box>
        <Box>
        <FormLabel>Complaint</FormLabel>
          Tooth ache
        </Box>
      </Stack>
      </Box>
    </GridItem>
   <GridItem colSpan={9}>

      <Box borderWidth="1px" p={10}>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>
            Paid Balances
            </Tab>
            <Tab>
            Unsettled Balances
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th >Acions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>01/22/22</Td>
                  <Td>Pasta</Td>
                  <Td><Button colorScheme="teal"  onClick={onOpen}>View Details</Button></Td>
                </Tr>
              </Tbody>

            </Table>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </GridItem>
  </SimpleGrid>
  <Modal size='4xl' isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Stack spacing={5}>

       <Box borderWidth="1px" p={5}>
       <Center>
       <HStack spacing={10}>
          <Box>
            <FormLabel>Date Added</FormLabel>
            <text>01/05/22</text>
          </Box>
          <Box>
            <FormLabel>Description</FormLabel>
            <text>Pasta</text>
          </Box>
          <Box>
            <FormLabel>Check Number</FormLabel>
            <text>N/A</text>
          </Box>
          <Box>
            <FormLabel>Amount</FormLabel>
            <text>5000</text>
          </Box>
          
        </HStack>
       </Center>
       </Box>
        <Box p={5} borderWidth="1px" borderRadius="lg">
          <Center><Text fontSize="3xl">Payment History</Text></Center>
        <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Processed By</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>01/05/22</Td>
            <Td>Ms. Secretary</Td>
            <Td>2,500</Td>
          </Tr>
          <Tr>
            <Td>01/12/22</Td>
            <Td>Dr. Josela</Td>
            <Td>2,500</Td>
          </Tr>
          <Tr>
            <Td>01/25/22</Td>
            <Td>Ms. Secretary</Td>
            <Td>5000</Td>
          </Tr>
        </Tbody>
            </Table>
        </Box>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        {/* <Button variant='ghost'>Secondary Action</Button> */}
      </ModalFooter>
    </ModalContent>
  </Modal>
</Layout>

  )
}

