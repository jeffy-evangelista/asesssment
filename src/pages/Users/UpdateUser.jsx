//Temporary Modal To Create Client Information
import { Modal, ModalOverlay, ModalContent, Flex, HStack, Tooltip, VStack, Text, Spacer, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

import { EditIcon } from '@chakra-ui/icons'

export default function UpdateUser({ works }) {
  const [setData] = useState(works);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Tooltip
        label="Update Client"
        aria-label='A tooltip'
      >
        <Button
          colorScheme='yellow'
          onClick={() => { onOpen() }}
        >
          <EditIcon />
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}