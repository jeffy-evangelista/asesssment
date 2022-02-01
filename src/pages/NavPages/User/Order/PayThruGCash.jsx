import {
  Button, Stack, SimpleGrid, HStack, Center, Box, Heading, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  FormControl, FormLabel, Input, ModalFooter

} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Layout } from '../../../../components/Layout'

export default function PayThruGCash({ works }) {
  const [data, setData] = useState([works]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <>
      <Button onClick={onOpen}
        colorScheme="blue">View</Button>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='2xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {data.map(obj => (
              <Stack spacing={5}>
                <Box>
                  <Heading as='h4' size='md' color='grey'>
                    Customer Name
                  </Heading>
                  <Text fontSize='md'>{obj.customerName}</Text>
                </Box>
                <Box>
                  <Heading as='h4' size='md' color='grey'>
                    Order Status
                  </Heading>
                  <Text fontSize='md'>{obj.orderStatus}</Text>
                </Box>
                <Box>
                  <Heading as='h4' size='md' color='grey'>
                    Order Type
                  </Heading>
                  <Text fontSize='md'>{obj.orderType}</Text>
                </Box>
                <Center>
                  <Heading as='h4' size='md' color='grey'>
                    Order Details
                  </Heading>
                </Center>
                <SimpleGrid columns={3}>
                  <Text>
                    Food Item
                  </Text>
                  <Text>
                    Quantity
                  </Text>
                  <Text>
                    Price
                  </Text>
                </SimpleGrid>
                <SimpleGrid columns={3}>
                  <Box>
                    {obj.orderDetails.row1.foodItem}
                  </Box>
                  <Box>
                    {obj.orderDetails.row1.price}
                  </Box>
                  <Box>
                    {obj.orderDetails.row1.quantity}
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={3}>
                  <Box>
                    {obj.orderDetails.row2.foodItem}
                  </Box>
                  <Box>
                    {obj.orderDetails.row2.price}
                  </Box>
                  <Box>
                    {obj.orderDetails.row2.quantity}
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={3}>
                  <Box>
                    {obj.orderDetails.row3.foodItem}
                  </Box>
                  <Box>
                    {obj.orderDetails.row3.price}
                  </Box>
                  <Box>
                    {obj.orderDetails.row3.quantity}
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={3}>
                  <Box>
                    {obj.orderDetails.row4.foodItem}
                  </Box>
                  <Box>
                    {obj.orderDetails.row4.price}
                  </Box>
                  <Box>
                    {obj.orderDetails.row4.quantity}
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={3}>
                  <Box>
                    {obj.orderDetails.row5.foodItem}
                  </Box>
                  <Box>
                    {obj.orderDetails.row5.price}
                  </Box>
                  <Box>
                    {obj.orderDetails.row5.quantity}
                  </Box>
                </SimpleGrid>


              </Stack>
            ))}
          </ModalBody>

          <ModalFooter>

            <Button colorScheme='blue' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}
