import React from 'react'
import {
    ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Modal, useDisclosure,
    Button,
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Stack,
    NumberInput,
    NumberInputField,
} from '@chakra-ui/react'
import { Form, Field, Formik } from "formik";
import { useToast } from '@chakra-ui/react'
import { db } from '../../utils/init-firebase'
import { collection, addDoc } from "firebase/firestore"
import Select from "../components/Fields/Select";
import { AddIcon } from '@chakra-ui/icons'

export default function CreateUser() {

    async function createClient(values) {
        const usersCollectionRef = collection(db, "users");
        await addDoc(usersCollectionRef, {
        })
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()

    return (
        <>
            <Button onClick={onOpen}><AddIcon /></Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
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
