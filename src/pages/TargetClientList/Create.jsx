import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, Button, Input, FormControl, FormErrorMessage, FormLabel, Stack,
} from '@chakra-ui/react'
import {Form,Field,Formik} from "formik";
import { useToast } from '@chakra-ui/react'
import {AddIcon} from "@chakra-ui/icons";
import { db } from '../../utils/init-firebase'
import {
  collection,
  addDoc
} from "firebase/firestore"




export default  function Create () {


async function createClient(values){
  const usersCollectionRef = collection(db, "client");
    await addDoc(usersCollectionRef, {
      first: values.firstname,
      middle: values.middlename,
      last: values.lastname,
      administrativeDistrict: values.administrativeDistrict,
      legislativeDistrict: values.legislativeDistrict,
      barangay: values.barangay,
    });

}



  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toast = useToast()
  const firstField = React.useRef()


  return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
    Add New Maternal Records
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Create New Social Worker Account
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing='24px'>
                <Formik
                    initialValues={{

                    }}
                    onSubmit={(values, actions) => {
                      createClient(values)

                          .then(() => {
                            toast({
                              title: 'Success',
                              description: 'User created successfully',
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

                    }}
                >
                  {(props) => (
                      <Form>
                        <Field name='firstname' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.firstname && form.touched.firstname}>
                                <FormLabel htmlFor='firstname'>First Name</FormLabel>
                                <Input {...field} id='firstname' placeholder='firstname' />
                                <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>

                        <Field name='middlename' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.middlename && form.touched.middlename}>
                                <FormLabel htmlFor='middlename'>Middle Name Name</FormLabel>
                                <Input {...field} id='middlename' placeholder='middlename' />
                                <FormErrorMessage>{form.errors.middlename}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>
                        <Field name='lastname' >
                          {({ field, form }) => (
                              <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                                <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                                <Input {...field} id='lastname' placeholder='lastname' />
                                <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                              </FormControl>
                          )}
                        </Field>
                        <FormControl >
                          <Field as="select" name="legislativeDistrict">
                            <option value="d1">D1</option>
                            <option value="d2">D2</option>
                            <option value="d3">D3</option>

                          </Field></FormControl>

                        <FormControl >

                          <Field Select as="select" name="administrativeDistrict" >

                            <option value="red">Paquibato</option>
                            <option value="red2">Paquibato2</option>

                          </Field>

                        </FormControl>
                        <FormControl >
                          <Field as="select" name="barangay">
                            <option value="col">Colosas</option>
                            <option value="fat">Fatima (Benowang)</option>
                            <option value="lum"> Lumiad</option>
                            <option value="mab">Mabuhay</option>
                            <option value="mal">  Malabog</option>
                            <option value="map"> Mapula</option>
                            <option value="pan"> Panalum</option>
                            <option value="pand">  Pandaitan</option>
                            <option value="paq">  Paquibato Proper</option>
                            <option value="pare">  Paradise Embak</option>
                            <option value="sal">  Salapawan</option>
                            <option value="sumi"> Sumimao</option>
                            <option value="tap"> Tapak</option>

                          </Field></FormControl>


                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                          Submit
                        </Button>
                      </Form>
                  )}
                </Formik>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>


            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
  )
}
