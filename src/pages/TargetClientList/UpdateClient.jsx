//Temporary Modal To Create Client Information
import { Modal, ModalOverlay, ModalContent, Flex, HStack, Tooltip, VStack, Text, Spacer, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import Figure1 from "./Forms/Figure1/Figure1";
import FormOneA from "./Forms/Prenatal/FormOneA";
import FormOneB from "./Forms/Prenatal/FormOneB";
import BirthPlan from "./Forms/Prenatal/BirthPlan";
import Figure5 from "./Forms/Figure5/Figure5";
import Figure6 from "./Forms/Figure6/Figure6";

import { EditIcon } from '@chakra-ui/icons'

export default function UpdateClient({ works }) {
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
          <ModalHeader>Update Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="right">
              <Text fontWeight='bold' mb='1rem'>
                MATERNAL CLIENT RECORD for Prenatal Care
              </Text>
              <HStack align='stretch'>
                <FormOneA />
                <FormOneB />
                <BirthPlan />
              </HStack>
              <Spacer />
              <Text fontWeight='bold' mb='1rem'>
                Maternal Client Record for Postpartum and Neotanatal Care
              </Text>
              <HStack align='stretch'>
                <Button>MNC Form 2 Side 1</Button>
                <Button>MNC Form 2 Side B</Button>
              </HStack>
              <Spacer />
            </VStack>
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