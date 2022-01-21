import {
  Button, useDisclosure,Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  FormControl, FormLabel, Input, ModalFooter
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../../../components/Layout'

export default function SendProofOfPayment() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <>
      <Button onClick={onOpen}
       colorScheme="blue"> Proof of Payment</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Proof of Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}
