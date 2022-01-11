import {Box, Button, FormControl, GridItem, HStack, SimpleGrid, Spacer, useToast} from '@chakra-ui/react';
import React, {useState} from 'react'
import * as Yup from "yup";
import {Form, Formik} from 'formik';
import TextField from '../../../components/Fields/TextField';
import ErrorMessaging from '../../../components/Fields/ErrorMessaging';
import FormHeading from '../../../components/Labels/FormHeading';
import YearPicker from '../../../components/Fields/YearPicker';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../../../utils/init-firebase";
import Select from "../../../components/Fields/Select";
import {barangayOptions, provinceOptions, regionOptions} from "../../../components/Constants";
import NumberField from "../../../components/Fields/NumberField";


export default  function Figure1({works}) {
  const data2 = JSON.parse(JSON.stringify({works}))


  const newYear = data2.works.Figure1.year.seconds
  const newDate = new Date(newYear*1000)
  const newYear2 = newDate.getFullYear()

  const exp = data2.works.Figure1.expDateOfDel.seconds
  const newexp = new Date(exp*1000)

  const triFirst =data2.works.Figure1.firstTri.seconds
  const triSecond =data2.works.Figure1.secondTri.seconds
  const trithird =data2.works.Figure1.thirdTri.seconds

  const onetri = new Date(triFirst*1000)
  const twotri = new Date(triSecond*1000)
  const threetri = new Date(trithird*1000)

  const discharge = data2.works.Figure1.dayOfDischarge.seconds
  const sevendays = data2.works.Figure1.withinSevDays.seconds
  const live = data2.works.Figure1.liveBirth.seconds
  const maternal = data2.works.Figure1.maternalDeath.seconds
  const still = data2.works.Figure1.stillBirth.seconds
  const newb = data2.works.Figure1.earlyNewborn.seconds


  const daydischarge = new Date(discharge*1000)
  const onseven = new Date(sevendays*1000)
  const liveday = new Date(live*1000)
  const maternalday = new Date(maternal*1000)
  const stillday = new Date(still*1000)
  const newbday = new Date(newb*1000)

  const [data, setData] = useState({

    year:  newYear2,
    region:  data2.works.Figure1.region ,
    province: data2.works.Figure1.province,
    municipality: data2.works.Figure1.municipality,
    barangay:  data2.works.Figure1.barangay,
    birthingCenter: data2.works.Figure1.birthingCenter,
    birthingCenterAddress: data2.works.Figure1.birthingCenterAddress,
    referralCenter:  data2.works.Figure1.referralCenter,
    referralCenterAddress: data2.works.Figure1.referralCenterAddress,

    lastName: data2.works.last,
    firstName: data2.works.first,
    middleName: data2.works.middle,
    age: data2.works.age,
    gravidity:data2.works.Figure1.gravidity,
    parity: data2.works.Figure1.parity,
    expDateOfDel: newexp,

    firstTri: onetri,
    secondTri: twotri,
    thirdTri: threetri,
    pregOutcome: data2.works.Figure1.pregOutcome,



    dayOfDischarge: daydischarge,
    withinSevDays: onseven,
    liveBirth: liveday,
    maternalDeath: maternalday,
    stillBirth: stillday,
    earlyNewborn: newbday,

    nameOfBhw: data2.works.Figure1.nameOfBhw,
    barHealthStat: data2.works.Figure1.barHealthStat,
    nameOfMidwife: data2.works.Figure1.nameOfMidwife,
    ruralHealthUnit: data2.works.Figure1.ruralHealthUnit,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const makeRequest = (formData) => {
    updateUsers(formData)
  };
  const toast = useToast()
  async function updateUsers(formData) {

    const documentId = JSON.parse(JSON.stringify(works.id))
    const userRef = doc(db, 'client', documentId);
    await updateDoc(userRef, {
      Figure1: formData,
    }).catch(function(error) {
      toast({
        title: 'Document Updated.',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

    }).then(function(any){
      toast({
        title: 'Document Updated.',
        description: "Successfully Updated Figure 1.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

    })
  }

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({...prev, ...newData}));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = (newData) => {
    setData((prev) => ({...prev, ...newData}));
    setCurrentStep((prev) => prev - 1);
  };
  const steps = [

    <StepOne next={handleNextStep}  data={data}/>,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data}/>,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data}/>,
    <StepFour next={handleNextStep} prev={handlePrevStep} data={data}/>,
    <StepFive next={handleNextStep} prev={handlePrevStep} data={data}/>
  ];

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
                  props.data

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
                          <Select
                              label="Region District"
                              name="region"
                              options={regionOptions} />
                          <ErrorMessaging name="region" />
                        </GridItem>
                        <GridItem colSpan={4}>
                          <Select
                              label="Province"
                              name="province"
                              options={provinceOptions} />
                          <ErrorMessaging name="province" />
                        </GridItem>
                        <GridItem colSpan={4}>
                          <Select
                              label="Municipality"
                              name="municipality"
                              options={provinceOptions} />
                          <ErrorMessaging name="municipality" />
                        </GridItem>
                        <GridItem colSpan={4}>
                          <Select
                              label="Barangay"
                              name="barangay"
                              options={barangayOptions} />
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
                      <NumberField label="Age" name="age" />
                      <ErrorMessaging name="age" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <NumberField label="Gravidity" name="gravidity" />
                      <ErrorMessaging name="gravidity" />
                    </GridItem>
                    <GridItem colSpan={6}>
                      <NumberField label="Parity" name="parity" />
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
                      <FormHeading text="Antenatal Care Check-Ups" />
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
  withinSevDays: Yup.date().nullable(),
  liveBirth: Yup.date().nullable(),
  maternalDeath: Yup.date().nullable(),
  stillBirth: Yup.date().nullable(),
  earlyNewborn: Yup.date().nullable()

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
                    <FormHeading text="Mother and Child Postnatal Check-ups" />
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
                    <FormHeading text="Civil Registration" />
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

