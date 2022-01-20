import React from 'react'
import {
  Button, Modal, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, Heading, Tooltip,
} from '@chakra-ui/react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import Select from "../../../components/Fields/Select";
import TextField from "../../../components/Fields/TextField";
import Radio from "../../../components/Fields/Radio";
import { Formik, Field, Form } from 'formik';
import DatePicker from '../../../components/Fields/DatePicker';
import { EditIcon } from '@chakra-ui/icons'

export default function UpdatePatient({ works }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const diagnosisOpt = [
    { key: 'Select an option', value: '' },
    { key: 'HIV', value: 'HIV' },
    { key: 'Tuberculosis', value: 'Tuberculosis' },
    { key: 'Pneumonia', value: 'Pneumonia' },
    { key: 'Infectious diarrhea', value: 'Infectious diarrhea' },
    { key: 'Malaria', value: 'Malaria' }
  ]
  const hospitalizedOpt = [
    { key: 'Yes', value: 'Yes' },
    { key: 'No', value: 'No' }

  ]

  const initialValues = {
    ...works.CommunicableDiseases
  }

  const onSubmit = (values) => {
    updateUsers2(values)
  }

  async function updateUsers2(values) {
    const userRef = doc(db, 'patients', works.id);
    const newValues = JSON.parse(JSON.stringify(values))
    await updateDoc(userRef, {
      CommunicableDiseases: newValues
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
              <ModalHeader>Update Patient</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

                <Select
                  label="Diagnosis"
                  name="diagnosis"
                  options={diagnosisOpt}
                />
                {/* <DatePicker
                  name="date"
                  label="Date"
                /> */}
                <TextField
                  label="Guardian Name"
                  name="guardian"
                />
                <TextField
                  label="Patient workplace / School"
                  name="patientWorkplace"
                />
                <TextField
                  label="Patient workplace / School Address"
                  name="patientWorkplaceAddress"
                />
                <Radio
                  label="was hospitalized ?"
                  name="hostpitalized"
                  options={hospitalizedOpt}
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
