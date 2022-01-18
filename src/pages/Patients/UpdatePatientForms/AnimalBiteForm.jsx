import { Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import DatePicker from '../../components/Fields/DatePicker'
import Select from '../../components/Fields/Select'
import { Form, Field, Formik } from "formik";

export default function AnimalBiteForm() {
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
    return (
        <div>
            <Formik>
                <Form>
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
                </Form>
            </Formik>
        </div>
    )
}
