//Temporary Modal To Display Client Information
import {
    SimpleGrid,
    Box,
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
    Heading,
    Stack
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
                                <Stack spacing={5}>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Name
                                        </Heading>
                                        <Text fontSize='md' fontSize='md' color="blue.600">{patient.fName} {patient.mName} {patient.lName}</Text>
                                    </Box>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Age
                                        </Heading>
                                        <Text fontSize='md' color="blue.600">{patient.age}</Text>
                                    </Box>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Sex
                                        </Heading>
                                        <Text fontSize='md' color="blue.600">{patient.sex}</Text>
                                    </Box>
                                    <SimpleGrid columns={2} spacing={5}>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Diagnosis
                                            </Heading>
                                            <Text fontSize='md' fontSize='md' color="blue.600">{patient.CommunicableDiseases.diagnosis} </Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Guardian
                                            </Heading>
                                            <Text fontSize='md' fontSize='md' color="blue.600">{patient.CommunicableDiseases.guardian} </Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Workplace / School
                                            </Heading>
                                            <Text fontSize='md' fontSize='md' color="blue.600">{patient.CommunicableDiseases.patientWorkplace} </Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Workplace / School Address
                                            </Heading>
                                            <Text fontSize='md' fontSize='md' color="blue.600">{patient.CommunicableDiseases.patientWorkplaceAddress} </Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Was the patient hostpitalized?
                                            </Heading>
                                            <Text fontSize='md' fontSize='md' color="blue.600">{patient.CommunicableDiseases.hostpitalized} </Text>
                                        </Box>
                                    </SimpleGrid>


                                </Stack >
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