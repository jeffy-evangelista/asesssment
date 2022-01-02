//Temporary Modal To Create Client Information
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Heading, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import Figure1 from "./Forms/Figure1/Figure1";
import Figure2 from "./Forms/Figure2/Figure2";
import Figure4 from "./Forms/Figure4/Figure4";
import Figure5 from "./Forms/Figure5/Figure5";
import Figure6 from "./Forms/Figure6/Figure6";

import { EditIcon } from '@chakra-ui/icons'

export default function WorkModal({ works }) {
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
            <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Client</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Accordion allowToggle defaultIndex={[0]} >
                            {/* Figure 1 */}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                                        <Box flex="1" textAlign="left">
                                            Figure 1
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Figure1 works={setData} />
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Figure 2 */}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                                        <Box flex="1" textAlign="left">
                                            Figure 2
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Figure2 works={setData} />
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Figure 4 */}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                                        <Box flex="1" textAlign="left">
                                            Figure 4
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Figure4 works={setData} />
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Figure 5 */}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                                        <Box flex="1" textAlign="left">
                                            Figure 5
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Figure5 works={setData} />
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Figure 6 */}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                                        <Box flex="1" textAlign="left">
                                            Figure 6
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Figure6 works={setData} />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>


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