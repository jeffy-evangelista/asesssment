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
    VStack,
    Box,
    HStack,
    Heading,
    SimpleGrid,
    Stack,
    Divider
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon } from '@chakra-ui/icons'

export default function ViewPatient({ works }) {
    const [newValues, setData] = useState([works]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    
     const data = JSON.parse(JSON.stringify(newValues))
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
                                        <Text fontSize='md' color="green.600">{patient.fName} {patient.mName} {patient.lName}</Text>
                                    </Box>
                                    <SimpleGrid columns={2} spacing={5}>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Age
                                            </Heading>
                                            <Text fontSize='md' color="green.600">{patient.age}</Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Sex
                                            </Heading>
                                            <Text fontSize='md' color="green.600">{patient.sex}</Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Animal
                                            </Heading>
                                            <Text fontSize='md' color="green.600">{patient.animal}</Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Ownership
                                            </Heading>
                                            <Text fontSize='md' color="green.600">{patient.AnimalBite.ownership}</Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Mode of Transmission
                                            </Heading>
                                            <Text fontSize='md' color="green.600">{patient.AnimalBite.modeOfTransmission}</Text>
                                        </Box>
                                        <Box>
                                            <Heading as='h5' size='sm' color='grey'>
                                                Date of Transmission
                                            </Heading>
                                            <Text fontSize='md' color="green.600">{patient.AnimalBite.dateOfTransmission}</Text>
                                        </Box>
                                    </SimpleGrid>
                                    <Box span={2}>
                                        <Divider />
                                    </Box>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Area of Transmission
                                        </Heading>
                                        {/* <Text fontSize='md' color="green.600">{patient.AnimalBite.areaOfTransmission}</Text> */}
                                    </Box>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Location of Transmission
                                        </Heading>
                                        {/* <Text fontSize='md' color="green.600">{patient.AnimalBite.locationOfTransmission}</Text> */}
                                    </Box>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Status of the Patient
                                        </Heading>
                                        {/* <Text fontSize='md' color="green.600">{patient.AnimalBite.statusOfThePatient}</Text> */}
                                    </Box>
                                    <Box>
                                        <Heading as='h5' size='sm' color='grey'>
                                            Course of Treatment
                                        </Heading>
                                        {/* <Text fontSize='md' color="green.600">{patient.AnimalBite.courseOfTreatment}</Text> */}
                                    </Box>
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
