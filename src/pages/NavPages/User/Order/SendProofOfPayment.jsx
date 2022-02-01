import {
  Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter
} from '@chakra-ui/react'
import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import { Formik, Form } from 'formik';
import Radio from '../../../components/Fields/Radio';

const orderStatusOpt = [
  { key: 'Pending', value: 'Pending' },
  { key: 'Done', value: 'Done' },
  { key: 'Being Delivered', value: 'Being Delivered' }
];
export default function SendProofOfPayment({ works }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialValues = {
    ...works
  }
  const onSubmit = (values) => {
    updateUsers2(values)
  }

  async function updateUsers2(values) {
    const userRef = doc(db, 'orders', works.id);
    const newValues = JSON.parse(JSON.stringify(values))
    await updateDoc(userRef, {
      orderStatus: values.orderStatus
    })
  }
  
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <>
      <Button onClick={onOpen}
        colorScheme="blue">Edit Status</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        >
          <Form>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Order Status</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Radio
                  label=""
                  name="orderStatus"
                  options={orderStatusOpt}
                />
              </ModalBody>

              <ModalFooter>
                <Button type="submit" colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        </Formik>
      </Modal>
    </>

  )
}
