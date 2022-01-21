import React from 'react'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  Heading,
  NumberInput,
  NumberInputField,
  HStack,
  Box,
  Divider,
  Center,
  Text,
  SimpleGrid
} from '@chakra-ui/react'

import { Form, Field, Formik } from "formik";
import { useToast } from '@chakra-ui/react';
import { db } from '../../../../utils/init-firebase'
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio'
import { collection, addDoc } from "firebase/firestore"
import TextField from '../../../components/Fields/TextField';
import NumberField from '../../../components/Fields/NumberField';
import { AddIcon } from '@chakra-ui/icons'


export default function PlaceOrder() {
  async function placeOrder(values) {
    const usersCollectionRef = collection(db, "orders");
    await addDoc(usersCollectionRef, {
      date: new Date(),
      customerName: values.customerName,
      orderType: values.orderType,
      orderDetails: {
        row1: {
          foodItem: values.orderDetails.row1.foodItem,
          quantity: values.orderDetails.row1.quantity,
          price: values.orderDetails.row1.price,
        },
        row2: {
          foodItem: "",
          quantity: "",
          price: "",
        },
        row3: {
          foodItem: "",
          quantity: "",
          price: "",
        },
        row4: {
          foodItem: "",
          quantity: "",
          price: "",
        },
        row5: {
          foodItem: "",
          quantity: "",
          price: "",
        }
      },
      totalAmount: "",
      orderStatus: "pending"
    })
  }

  const OrderTypeOpt = [
    { key: 'Delivery', value: 'Delivery' },
    { key: 'Pick-up', value: 'Pick-up' }
  ]
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toast = useToast()
  const firstField = React.useRef()
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        colorScheme="green"
        rightIcon={<AddIcon />}
      >
        Place Order
      </Button>


      <Modal
        initialFocusRef={firstField}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Place Order
          </ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
              placeOrder(values)

                .then(() => {
                  toast({
                    title: 'Success',
                    description: 'Order successfully placed',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                  actions.setSubmitting(false)
                  onClose()
                })

                .catch(err => {
                  toast({
                    title: 'Error',
                    description: err.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                  actions.setSubmitting(false)
                })
            }
            }
          >
            {(props) => (
              <Form>
                <ModalBody>
                  <Stack>
                    <Box>
                      {/* <DatePicker
                      name="date"
                      label="wala"
                      /> */}
                    </Box>
                    <Box>
                      <TextField
                        name="customerName"
                        label="Customer Name"
                      />
                    </Box>
                    <Box>
                      <Radio
                        name="orderType"
                        label="Order Type"
                        options={OrderTypeOpt}
                      />
                    </Box>
                    <Box>
                      <Center>
                        <Text
                          fontSize='xl'
                        >
                          ORDER DETAILS
                        </Text>
                      </Center>
                      <SimpleGrid columns={3} spacingX={2}>
                        <Center>
                          <Text>
                            Food Item
                          </Text>
                        </Center>
                        <Center>
                          <Text>
                            Quantity
                          </Text>
                        </Center>
                        <Center>
                          <Text>
                            Price
                          </Text>
                        </Center>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row1.foodItem"
                          />
                        </Box>
                        <Box>
                          <NumberField
                            label=""
                            name="orderDetails.row1.quantity"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row1.price"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row2.foodItem"
                          />
                        </Box>
                        <Box>
                          <NumberField
                            label=""
                            name="orderDetails.row2.quantity"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row2.price"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row3.foodItem"
                          />
                        </Box>
                        <Box>
                          <NumberField
                            label=""
                            name="orderDetails.row3.quantity"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row3.price"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row4.foodItem"
                          />
                        </Box>
                        <Box>
                          <NumberField
                            label=""
                            name="orderDetails.row4.quantity"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row4.price"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row5.foodItem"
                          />
                        </Box>
                        <Box>
                          <NumberField
                            label=""
                            name="orderDetails.row5.quantity"
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=""
                            name="orderDetails.row5.price"
                          />
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </Stack>
                </ModalBody>
                <ModalFooter>
                  <Button 
                  isLoading={props.isSubmitting} 
                  colorScheme='blue'
                  type='submit' 
                  mr={3}
                  >
                    Sumbit
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>

  )
}
