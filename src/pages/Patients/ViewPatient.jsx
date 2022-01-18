//Temporary Modal To Display Client Information
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Tooltip, Text,
    Heading
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon } from '@chakra-ui/icons'



export default function ViewPatient({ works }) {

    const [data, setData] = useState([works]);

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Tooltip
                label="View Details"
                aria-label='A tooltip'
            >
                <Button
                    colorScheme='teal'
                    onClick={() => { onOpen() }}
                >
                    <ViewIcon />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Patient Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            {data.map(patient => (
                                <>
                                    <Heading as='h4' size='md' color='grey'>
                                        Name
                                    </Heading>
                                    <Text fontSize='md'>{patient.fName} {patient.mName} {patient.lName}</Text>
                                </>
                            ))}
                        </div>

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