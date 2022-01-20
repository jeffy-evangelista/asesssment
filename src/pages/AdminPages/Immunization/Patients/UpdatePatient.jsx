import React from 'react'
import {
  Button, Modal, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, Heading, Tooltip,
} from '@chakra-ui/react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import Select from "../../../components/Fields/Select";
import { Formik, Field, Form } from 'formik';
import DatePicker from '../../../components/Fields/DatePicker';
import { EditIcon } from '@chakra-ui/icons'

export default function UpdatePatient({ works }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const animalOpt = [
    { key: 'Select an option', value: '' },
    { key: 'Dog', value: 'Dog' },
    { key: 'Cat', value: 'Cat' }
  ]

  const transmissionOpt = [
    { key: 'Select an option', value: '' },
    { key: 'Bitten', value: 'Bitten' },
    { key: 'Scratch', value: 'Scratch' },
    { key: 'Saliva', value: 'Saliva' }
  ]

  const initialValues = {
    ...works.AnimalBite
  }

  const onSubmit = (values) => {
    updateUsers2(values)
  }

  async function updateUsers2(values) {
    const userRef = doc(db, 'patients', works.id);
    const newValues = JSON.parse(JSON.stringify(values))
    await updateDoc(userRef, {
      AnimalBite: newValues
    })
  }


  return (
    <>
      <Tooltip
        label="Update Patient"
        aria-label='A tooltip'
      >
        <Button
          colorScheme='yellow'
          onClick={() => { onOpen() }}
        >
          <EditIcon />
        </Button>
      </Tooltip>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size='xl'
        scrollBehavior='inside'
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Birth Plan</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Heading size="md">
                  Animal Bite
                </Heading>
                <Select
                  label="Animal"
                  name="animal"
                  options={animalOpt}
                />
                <Select
                  label="Mode of Transmission"
                  name="transmission"
                  options={transmissionOpt}
                />
                <DatePicker
                  name="date"
                  label="Date"
                />
              </ModalBody>
              <ModalFooter>
                <Button margin={5} type="submit" colorScheme='blue'>Submit</Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
