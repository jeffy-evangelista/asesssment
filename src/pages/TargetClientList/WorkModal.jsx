//Temporary Modal To Create Client Information
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
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react'
import {AddIcon} from "@chakra-ui/icons";
import React, {useEffect, useState} from 'react'
import {collection, getDocs, query, where,doc,getDoc} from "firebase/firestore";
import {db} from "../../utils/init-firebase";
import Figure1 from "./Forms/Figure1/Figure1";
import Figure2 from "./Forms/Figure2/Figure2";
import Figure4 from "./Forms/Figure4/Figure4";
import Figure5 from "./Forms/Figure5";
import Figure6 from "./Forms/Figure6/Figure6";




export default function WorkModal({works}) {
    const [ setData,setNewData] = useState(works);
console.log(works.id,"this is the id")

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button   onClick={() => { onOpen()}} >Update Details</Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading mb={5}>Add New Client</Heading>
                        <Accordion allowToggle >
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
                                    <Figure1  works= {works} />
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
                                    <Figure2 works= {works} />
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
                                    <Figure4 works= {works} />
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
                                    <Figure5  works= {works} />
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
                                    <Figure6 works= {works} />
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