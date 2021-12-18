import { Box, Button, FormControl, GridItem, HStack, SimpleGrid, Spacer} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import ErrorMessaging from '../../../components/Fields/ErrorMessaging';
import HigherLabel from '../../../components/Labels/HigherLabel';
import YearPicker from '../../../components/Fields/YearPicker';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import {db} from "../../../../utils/init-firebase";

export default function Figure1({works}) {


const data2 = JSON.parse(JSON.stringify({works}))
console.log(data2,"This is data2")



  const [data, setData] = useState({
    year: "",
    region: "",
    province: "",
    municipality: "",
    barangay: "",
    birthingCenter: "",
    birthingCenterAddress: "",
    referralCenter: "",
    referralCenterAddress: "",

    lastName: "",
    firstName: "",
    middleName: "",
    age: "",
    gravidity: "",
    parity: "",
    expDateOfDel: "",

    firstTri: "",
    secondTri: "",
    thirdTri: "",
    pregOutcome: "",

    dayOfDischarge: "",
    withinSevDays: "",
    liveBirth: "",
    maternalDeath: "",
    stillBirth: "",
    earlyNewborn: "",

    nameOfBhw: "",
    barHealthStat: "",
    nameOfMidwife: "",
    ruralHealthUnit: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const makeRequest = (formData) => {
    updateUsers(formData)
  };

  async  function updateUsers(formData) {
    const documentId = JSON.parse(JSON.stringify(works.id))
    const userRef = doc(db, 'client', documentId);
    await  updateDoc(userRef,{
      Figure1: formData,

    }).then(() => {
      alert("Form Updated Successfully")
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }



  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepFive next={handleNextStep} prev={handlePrevStep} data={data} />
  ];
  // console.log("data", data);
  return <div className="App">{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({
  year: Yup.date().required('Required').nullable(),
  region: Yup.string().required('Required'),
  province: Yup.string().required('Required'),
  municipality: Yup.string().required('Required'),
  barangay: Yup.string().required('Required'),
  birthingCenter: Yup.string().required('Required'),
  birthingCenterAddress: Yup.string().required('Required'),
  referralCenter: Yup.string().required('Required'),
  referralCenterAddress: Yup.string().required('Required'),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik validationSchema={stepOneValidationSchema}
       initialValues={

       {
         year:"",
         region: "",
         province: "",
         municipality: "",
         barangay: "",
         birthingCenter: "",
         birthingCenterAddress: "",
         referralCenter: "",
         referralCenterAddress: "",
       }
       } onSubmit={handleSubmit}>
        {() => (
          <Form>
            <FormControl>
              <SimpleGrid columns={1} spacingY={4}>
                <GridItem colSpan={1}>
                  <SimpleGrid columns={12} spacingX={5}>
                    <GridItem colSpan={6}>
                      <YearPicker name="year" label="Year" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <TextField label="Region" name="region" />
                      <ErrorMessaging name="region" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <TextField label="Province" name="province" />
                      <ErrorMessaging name="province" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <TextField label="Municipality" name="municipality" />
                      <ErrorMessaging name="municipality" />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <TextField label="Barangay" name="barangay" />
                      <ErrorMessaging name="barangay" />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
                <GridItem colSpan={1}>
                  <SimpleGrid columns={12} spacingX={5}>
                    <GridItem colSpan={6}>
                      <TextField label="Birthing Center" name="birthingCenter" />
                      <ErrorMessaging name="birthingCenter" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <TextField label="Address" name="birthingCenterAddress" />
                      <ErrorMessaging name="birthingCenterAddress" />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
                <GridItem colSpan={1}>
                  <SimpleGrid columns={12} spacingX={5}>
                    <GridItem colSpan={6}>
                      <TextField label="Referral Center" name="referralCenter" />
                      <ErrorMessaging name="referralCenter" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <TextField label="Address" name="referralCenterAddress" />
                      <ErrorMessaging name="referralCenterAddress" />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
              </SimpleGrid>
            </FormControl>
            <HStack mt={5}>
              <Spacer />
              <Button type="submit" colorScheme='blue'>Next</Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const stepTwoValidationSchema = Yup.object({
  lastName: Yup.string().required().label("Last Name"),
  firstName: Yup.string().required().label("First Name"),
  middleName: Yup.string().required().label("Middle"),
  age: Yup.string().required().label("Age"),
  gravidity: Yup.string().required().label("Gravidity"),
  parity: Yup.string().required().label("Parity"),
  expDateOfDel: Yup.date().required('Required').nullable(),
});
const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <SimpleGrid columns={12} spacingX={5}>
                <GridItem colSpan={4}>
                  <TextField label="Last Name" name="lastName" />
                  <ErrorMessaging name="lastName" />
                </GridItem>
                <GridItem colSpan={4}>
                  <TextField label="First Name" name="firstName" />
                  <ErrorMessaging name="firstName" />
                </GridItem>
                <GridItem colSpan={4}>
                  <TextField label="Middle Name" name="middleName"  />
                  <ErrorMessaging name="middleName" />
                </GridItem>
                <GridItem colSpan={6}>
                  <TextField label="Age" name="age" />
                  <ErrorMessaging name="age" />
                </GridItem>
                <GridItem colSpan={6}>
                  <TextField label="Gravidity" name="gravidity" />
                  <ErrorMessaging name="gravidity" />
                </GridItem>
                <GridItem colSpan={6}>
                  <TextField label="Parity" name="parity" />
                  <ErrorMessaging name="parity" />
                </GridItem>
                <GridItem colSpan={6}>
                  <DatePicker name="expDateOfDel" label="Expected Date of Delivery" />
                </GridItem>
              </SimpleGrid>
              <HStack mt={5}>
                <Spacer />
                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                  Back
                </Button>
                <Button type="submit" colorScheme='blue'>Next</Button>
              </HStack>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


const stepThreeValidationSchema = Yup.object({
  firstTri: Yup.date().required('Required').nullable(),
  secondTri: Yup.date().required('Required').nullable(),
  thirdTri: Yup.date().required('Required').nullable(),
  pregOutcome: Yup.string().required('Required')
});
const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const pregOutcomeOpt = [
    { key: 'Live Birth', value: 'liveBirth' },
    { key: 'Preterm Birth', value: 'pretermBirth' },
    { key: 'Stillbirth', value: 'stillbirth' },
    { key: 'Abortion', value: 'abortion' }
  ];
  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <SimpleGrid columns={2} spacing={5}>
                <GridItem colSpan={2}>
                  <HigherLabel text="Antenatal Care Check-Ups" />
                </GridItem>
                <GridItem colSpan={1}>
                  <DatePicker name="firstTri" label="1st tri = up to 12 weeks and 6 days AOG" />
                </GridItem>
                <GridItem colSpan={1}>
                  <DatePicker name="secondTri" label="2nd tri = 13-27 weeks and 6 days AOG" />
                </GridItem>
                <GridItem colSpan={1}>
                  <DatePicker name="thirdTri" label="3rd tri = 28 weeks AOG and more" />
                </GridItem>
                <GridItem colSpan={1}>
                  <Radio label="Pregnancy Outcome" name="pregOutcome" options={pregOutcomeOpt} />
                </GridItem>
              </SimpleGrid>
              <HStack mt={5}>
                <Spacer />
                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                  Back
                </Button>
                <Button type="submit" colorScheme='blue'>Next</Button>
              </HStack>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const stepFourValidationSchema = Yup.object({
  dayOfDischarge: Yup.date().required('Required').nullable(),
  withinSevDays: Yup.date().required('Required').nullable(),
  liveBirth: Yup.date().required('Required').nullable(),
  maternalDeath: Yup.date().required('Required').nullable(),
  stillBirth: Yup.date().required('Required').nullable(),
  earlyNewborn: Yup.date().required('Required').nullable()

});
const StepFour = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik
        validationSchema={stepFourValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <GridItem>
                <HigherLabel text="Mother and Child Postnatal Check-ups" />
              </GridItem>
              <GridItem>
                <SimpleGrid columns={12} spacingX={5}>
                  <GridItem colSpan={6}>
                    <DatePicker name="dayOfDischarge" label="Day of Discharge / 24 hours after birth" />
                  </GridItem>
                  <GridItem colSpan={6}>
                    <DatePicker name="withinSevDays" label="Day of Discharge / 24 hours after birth" />
                  </GridItem>
                </SimpleGrid>
              </GridItem>
              <GridItem>
                <HigherLabel text="Civil Registration" />
              </GridItem>
              <GridItem>
                <SimpleGrid columns={12} spacingX={5}>
                  <GridItem colSpan={6}>
                    <DatePicker name="liveBirth" label="Livebirth" />
                  </GridItem>
                  <GridItem colSpan={6}>
                    <DatePicker name="maternalDeath" label="Maternal Death" />
                  </GridItem>
                  <GridItem colSpan={6}>
                    <DatePicker name="stillBirth" label="Stillbirth" />
                  </GridItem>
                  <GridItem colSpan={6}>
                    <DatePicker name="earlyNewborn" label="Early Newborn Death (0-7 days)" />
                  </GridItem>
                </SimpleGrid>
              </GridItem>
              <HStack mt={5}>
                <Spacer />
                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                  Back
                </Button>
                <Button type="submit" colorScheme='blue'>Next</Button>
              </HStack>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


const stepFiveValidationSchema = Yup.object({
  nameOfBhw: Yup.string().required().label("Password"),
  barHealthStat: Yup.string().required().label("Password"),
  nameOfMidwife: Yup.string().required().label("Password"),
  ruralHealthUnit: Yup.string().required().label("Password"),
});
const StepFive = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik
        validationSchema={stepFiveValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <SimpleGrid columns={1} spacingY={5}>
                <GridItem>
                  <SimpleGrid columns={12} spacingX={5}>
                    <GridItem colSpan={6}>
                      <TextField label="Name of BHW" name="nameOfBhw" />
                      <ErrorMessaging name="nameOfBhw" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <TextField label="Barangay Health Station" name="barHealthStat" />
                      <ErrorMessaging name="barHealthStat" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <TextField label="Name of Midwife" name="nameOfMidwife" />
                      <ErrorMessaging name="nameOfMidwife" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <TextField label="Rural Health Unit" name="ruralHealthUnit" />
                      <ErrorMessaging name="ruralHealthUnit" />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
              </SimpleGrid>
              <HStack mt={5}>
                <Spacer />
                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                  Back
                </Button>
                <Button type="submit" colorScheme='green'>Submit</Button>
              </HStack>
            </FormControl >
          </Form>
        )}
      </Formik>
    </Box>
  );
};


