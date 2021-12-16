// import React from "react";
// import { FormLabel } from "@chakra-ui/form-control";
// import { Field } from 'formik';

// export default function DatePicker({ label, name, validate }) {
//   return (
//     <>
//       <FormLabel>{label}</FormLabel>
//       <Field
//         name={name}
//         component="input"
//         type="date"
//         // placeholder={label}
//         validate={validate}
//         className="chakra-input css-1c6j008"
//       />
//     </>
//   );
// }



import React from 'react'
import DateView from 'react-datepicker'
import { Field } from 'formik'
import { FormLabel } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'
import ErrorMessaging from './ErrorMessaging'



export default function DatePicker(props) {
    const { label, name } = props
    return (
        <>
            <FormLabel>{label}</FormLabel>
            <Field name={name} >
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <DateView
                                className="chakra-input css-1c6j008"
                                id={name}
                                {...field}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                                // minDate={new Date()}
                                // dateFormat='dd/MM/yyyy'
                                isClearable
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessaging name={name} />
        </>
    )
}
