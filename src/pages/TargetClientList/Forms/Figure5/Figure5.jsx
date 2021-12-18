import { Box, Button, Center, FormControl, FormHelperText, Divider, FormLabel, GridItem, HStack, ListItem, SimpleGrid, Spacer, Text, UnorderedList, VStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import * as Yup from "yup";
import { FieldArray, Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import ErrorMessaging from '../../../components/Fields/ErrorMessaging';
import FormHeading from '../../../components/Labels/FormHeading';
import YearPicker from '../../../components/Fields/YearPicker';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import Select from '../../../components/Fields/Select';
import Checkbox from '../../../components/Fields/Checkbox';
import TextArea from '../../../components/Fields/TextArea';
import SubHeading from '../../../components/Labels/SubHeading';

export default function Figure5() {
  const [data, setData] = useState({
    dateOfVisit: null,
    physicalExamination: {
      dateOfDelivery: null,
      attendant: "",
      sex: "",
      typeOfDelivery: "",
      placeOfDelivery: "",
      amtsl: {
        steps: {
          noOne: "",
          noTwo: "",
          noThree: ""
        },
        isProvided: ""
      }
    },
    assessment: {
      postPartumMother: {
        dangerSigns: {
          unconscious: [],
          VaginalBleeding: {
            hrs: "",
            days: "",
            otherVisit: ""
          },
          severeAbdominalPain: [],
          looksVeryIll: [],
          severeHeadache: [],
          severeDiffOfBreath: [],
          severeVomiting: [],
          postPartumDepression: [],
        },
        pelvicExamFindings: {
          uterus: {
            contracted: [],
            relaxed: []
          },
          vaginalBleeding: {
            profuse: [],
            moderate: [],
            scanty: []
          },
          vaginalDischarge: {
            color: [],
            odor: []
          },
          vaginalLaceration: {
            firstDegree: [],
            secondDegree: [],
            thirdDegree: [],
            lacerationSutured: ""
          },
          ifCs: []
        }
      },
      newborn: {
        withPoorSuck: [],
        ifBreathing: [],
        severeChestIndrawing: [],
        grunting: [],
        convulsions: [],
        floppyStiffExtremities: [],
        temp: [],
        severeJaundice: [],
        bleedingFromUmbilicalStumpOrCut: [],
        umbilicusDraining: [],
        foulSmellingDischarge: [],
        skinPostules: [],
        essentialNewbornCare: {
          one: "",
          two: "",
          three: "",
          four: "",
          earlyEncGiven: ""
        },
        breastFeeding: [],
        otherEncGiven: {
          vitKInjection: [],
          eyePropylaxis: [],
          newbornScreening: [],
          others: []
        },
        newbornScreeningDone: []
      }
    },
    supplementation: {
      noOfTabletsGven: {
        no: "",
        dateGiven: ""
      },
      vitaminA: {
        no: "",
        dateGiven: ""
      }
    },
    records: [
      {
        date: "",
        complaints: "",
        mncServicesGiven: "",
        nameOfProviderAndSignature: "",
        nextFollowUpSchedule: "",
      },
    ]
  });
  const [currentStep, setCurrentStep] = useState(0);
  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

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
    <StepFive next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepSix next={handleNextStep} prev={handlePrevStep} data={data} />
  ];
  console.log("data", data);
  return <div className="App">{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({

});
const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const attendantOpt = [
    { key: 'Doctor', value: 'doctor' },
    { key: 'Nurse', value: 'nurse' },
    { key: 'Midwife', value: 'midwife' },
    { key: 'TBA/Hilot', value: 'hilot' },
    { key: 'Others', value: 'others' }
  ];
  const sexOpt = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' }
  ];
  const typeOfDeliveryOpt = [
    { key: 'NSD', value: 'nsd' },
    { key: 'CS', value: 'cs' },
    { key: 'Others', value: 'Others' }
  ]
  const placeOfDeliveryOpt = [
    { key: 'Health Facility', value: 'healthFacility' },
    { key: 'Government Hospital', value: 'governmentHospital' },
    { key: 'Private Hospital', value: 'privateHospital' },
    { key: 'Private Clinic/Birthing', value: 'privateClinic' },
    { key: 'Main Health Center', value: 'mainHealthCenter' },
    { key: 'BHS/Birthing Home', value: 'birthingHome' },
    { key: 'Others', value: 'others' }
  ];
  const amtslStepOneOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
  ];
  const amtslStepTwoOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
  ];
  const amtslStepThreeOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
  ];
  const amtslProvidedOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
  ];
  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}>
        {() => (
          <Form>
            <FormControl>
              <SimpleGrid spacingY={4}>
                <GridItem>
                  <SimpleGrid columns={2} spacingX={5}>
                    <GridItem>
                      <DatePicker name="dateOfVisit" label="Date of visit:" />
                    </GridItem>
                    <GridItem >
                      <DatePicker
                        label="Date of Delivery:"
                        name="physicalExamination.dateOfDelivery"
                      />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
                <GridItem >
                  <FormHeading
                    text="Physical Examination"
                  />
                </GridItem>
                <GridItem >
                  <SimpleGrid columns={4} spacingX={5}>
                    <GridItem>
                      <Radio
                        label="Attendant"
                        name="physicalExamination.attendant"
                        options={attendantOpt}
                      />
                    </GridItem>
                    <GridItem>
                      <Radio
                        label="Sex"
                        name="physicalExamination.sex"
                        options={sexOpt}
                      />
                    </GridItem>
                    <GridItem>
                      <Radio
                        label="Type of Delivery"
                        name="physicalExamination.typeOfDelivery"
                        options={typeOfDeliveryOpt}
                      />
                    </GridItem>
                    <GridItem>
                      <Radio
                        label="Place of Delivery"
                        name="physicalExamination.placeOfDelivery"
                        options={placeOfDeliveryOpt}
                      />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
                <GridItem>
                  <SubHeading text="AMTSL Steps:" />
                  <SimpleGrid columns={2}>
                    <GridItem>
                      <Radio
                        label="1. Oxytocin injected w/in 1 minute of delivery"
                        name="physicalExamination.amtsl.steps.noOne"
                        options={amtslStepOneOpt}
                      />
                    </GridItem>
                    <GridItem>
                      <Radio
                        label="2. Controlled cord traction/counter traction done"
                        name="physicalExamination.amtsl.steps.noTwo"
                        options={amtslStepTwoOpt}
                      />
                    </GridItem>
                    <GridItem>
                      <Radio
                        label="3. Uterine massage done"
                        name="physicalExamination.amtsl.steps.noThree"
                        options={amtslStepThreeOpt}
                      />
                    </GridItem>
                    <GridItem>
                      <Radio
                        label="Therefore, AMTSL provided:"
                        name="physicalExamination.amtsl.isProvided"
                        options={amtslProvidedOpt}
                      />
                    </GridItem>
                  </SimpleGrid>
                  <Center>
                    <FormHelperText>
                      Check yes if all the 3 steps were done
                    </FormHelperText>
                  </Center>
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

});
const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const visitSelections = [
    { key: 'w/in 24 hrs', value: 'w/in24hrs' },
    { key: 'w/in 3-7 days', value: 'w/in3-7days' },
    { key: 'Other visits', value: 'otherVisits' }
  ];
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
              <SimpleGrid spacingY={5}>
                <FormHeading text="Assessment of the post partum mother (Postpartum Visits)" />
                <SimpleGrid columns={4} spacingX={5}>
                  <GridItem colSpan={4}>
                    <Text color="teal">Danger Signs (Mother)</Text>
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Unconscious"
                      name="assessment.postPartumMother.dangerSigns.unconscious"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem spacingY={2}>
                    <FormLabel>Vaginal Bleeding No. of pads per day</FormLabel>
                    <TextField
                      placeholder="w/in 24 hrs"
                      name="assessment.postPartumMother.dangerSigns.VaginalBleeding.hrs"
                    />
                    <TextField
                      placeholder="w/in 3-7 days"
                      name="assessment.postPartumMother.dangerSigns.VaginalBleeding.days"
                    />
                    <TextField
                      placeholder="Other visits"
                      name="assessment.postPartumMother.dangerSigns.VaginalBleeding.otherVisit"
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe abdominal Pain"
                      name="assessment.postPartumMother.dangerSigns.severeAbdominalPain"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Looks very ill"
                      name="assessment.postPartumMother.dangerSigns.looksVeryIll"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe headache with visual disturbance"
                      name="assessment.postPartumMother.dangerSigns.severeHeadache"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe difficulties of breathing"
                      name="assessment.postPartumMother.dangerSigns.severeDiffOfBreath"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe vomiting"
                      name="assessment.postPartumMother.dangerSigns.severeVomiting"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe partum depression"
                      name="assessment.postPartumMother.dangerSigns.postPartumDepression"
                      options={visitSelections}
                    />
                  </GridItem>
                </SimpleGrid>
              </SimpleGrid>
            </FormControl>
            <HStack mt={5}>
              <Spacer />
              <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                Back
              </Button>
              <Button type="submit" colorScheme='blue'>Next</Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const stepThreeValidationSchema = Yup.object({
 
});
const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const visitSelections = [
    { key: 'w/in 24 hrs', value: 'w/in24hrs' },
    { key: 'w/in 3-7 days', value: 'w/in3-7days' },
    { key: 'Other visits', value: 'otherVisits' }
  ];
  const lacerationSuturedOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
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
              <SimpleGrid spacingY={5}>
                <FormHeading text="Assessment of the post partum mother (Postpartum Visits)" />
                <SimpleGrid columns={2} spacingX={5}>
                  <GridItem colSpan={2}>
                    <Text color="teal">Pelvic Exam Findings</Text>
                  </GridItem>
                  <SimpleGrid columns={2}>
                    <GridItem colSpan={2}>
                      <FormLabel>
                        Uterus:
                      </FormLabel>
                    </GridItem>
                    <GridItem>
                      <Checkbox
                        label="Contracted"
                        name="assessment.postPartumMother.pelvicExamFindings.uterus.contracted"
                        options={visitSelections}
                      />
                    </GridItem>
                    <GridItem>
                      <Checkbox
                        label="Relaxed"
                        name="assessment.postPartumMother.pelvicExamFindings.uterus.relaxed"
                        options={visitSelections}
                      />
                    </GridItem>
                  </SimpleGrid>
                  <SimpleGrid columns={2}>
                    <GridItem colSpan={2}>
                      <FormLabel>
                        Vaginal Discharge:
                      </FormLabel>
                    </GridItem>
                    <GridItem>
                      <Checkbox
                        label="Color"
                        name="assessment.postPartumMother.pelvicExamFindings.vaginalDischarge.color"
                        options={visitSelections}
                      />
                    </GridItem>
                    <GridItem>
                      <Checkbox
                        label="Odor"
                        name="assessment.postPartumMother.pelvicExamFindings.vaginalDischarge.odor"
                        options={visitSelections}
                      />
                    </GridItem>
                  </SimpleGrid>
                  <GridItem colSpan={2}>
                    <SimpleGrid columns={3}>
                      <GridItem colSpan={3}>
                        <FormLabel>
                          Vaginal Bleeding:
                        </FormLabel>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          label="Profuse"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.profuse"
                          options={visitSelections}
                        />
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          label="Moderate"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.moderate"
                          options={visitSelections}
                        />
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          label="Scantry"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.scanty"
                          options={visitSelections}
                        />
                      </GridItem>
                    </SimpleGrid>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <SimpleGrid columns={3}>
                      <GridItem colSpan={4}>
                        <FormLabel>
                          Vaginal Laceration:
                        </FormLabel>
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          label="1st Degree"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.firstDegree"
                          options={visitSelections}
                        />
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          label="2nd Degree"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.secondDegree"
                          options={visitSelections}
                        />
                      </GridItem>
                      <GridItem>
                        <Checkbox
                          label="3rd Degree"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.thirdDegree"
                          options={visitSelections}
                        />
                      </GridItem>
                      <GridItem>
                        <Radio
                          label="If with laceration, Sutured?"
                          name="assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.lacerationSutured"
                          options={lacerationSuturedOpt}
                        />
                      </GridItem>
                    </SimpleGrid>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Checkbox
                      label="If CS, bleeding and/or swelling from the wound"
                      name="assessment.postPartumMother.pelvicExamFindings.ifCs"
                      options={visitSelections}
                    />
                  </GridItem>
                </SimpleGrid>
                <SimpleGrid spacingX={5}>
                  <GridItem>
                    <Text color="teal">Supplementation</Text>
                  </GridItem>
                  <SimpleGrid spacingX={5} columns={2}>
                    <GridItem colSpan={2}>
                      <FormLabel>
                        No. of tablets given(60mcg Iron with 400 mch Folic acid)
                      </FormLabel>
                    </GridItem>
                    <GridItem>
                      <TextField
                        placeholder="Number"
                        name="supplementation.noOfTabletsGiven.no" />
                    </GridItem>
                    <GridItem>
                      <DatePicker
                        name="supplementation.noOfTabletsGiven.dateGiven" />
                    </GridItem>
                  </SimpleGrid>
                  <SimpleGrid spacingX={5} columns={2}>
                    <GridItem colSpan={2}>
                      <FormLabel>
                        Vitamin A
                      </FormLabel>
                    </GridItem>
                    <GridItem>
                      <TextField
                        placeholder="Number"
                        name="supplementation.vitaminA.no" />
                    </GridItem>
                    <GridItem>
                      <DatePicker
                        name="supplementation.vitaminA.dateGiven" />
                    </GridItem>
                  </SimpleGrid>
                </SimpleGrid>
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

});
const StepFour = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const visitSelections = [
    { key: 'w/in 24 hrs', value: 'w/in24hrs' },
    { key: 'w/in 3-7 days', value: 'w/in3-7days' },
    { key: 'Other visits', value: 'otherVisits' }
  ];
  const encOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
  ];
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
              <SimpleGrid spacingY={5}>
                <FormHeading text="Newborn Assessment (Postnatal Visits)" />
                <SimpleGrid columns={4} spacingX={5}>
                  <GridItem colSpan={4}>
                    <Text color="teal">Danger Signs (Baby)</Text>
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="With poor wuch or difficulty of breathing"
                      name="assessment.newborn.withPoorSuck"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="if breathing is >60/min or <30/min"
                      name="assessment.newborn.ifBreathing"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe chest indrawing"
                      name="assessment.newborn.severeChestIndrawing"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Grunting"
                      name="assessment.newborn.grunting"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Convulsion"
                      name="assessment.newborn.convulsions"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Floppy or stiff extremities"
                      name="assessment.newborn.floppyStiffExtremities"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Temp. > 37.8 or < 35.5"
                      name="assessment.newborn.temp"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Severe Jaundice"
                      name="assessment.newborn.severeJaundice"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Bleeding from Umbilical Stump or cut"
                      name="assessment.newborn.bleedingFromUmbilicalStumpOrCut"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Umbilicus draining pus or umbilical redness extending to skin"
                      name="assessment.newborn.umbilicusDraining"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Foul-smelling discharge from cord stump"
                      name="assessment.newborn.foulSmellingDischarge"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="More than 10 sin postules or swelling, redness of skin"
                      name="assessment.newborn.skinPostules"
                      options={visitSelections}
                    />
                  </GridItem>
                </SimpleGrid>
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

const stepFiveValidationSchema = Yup.object({

});
const StepFive = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const visitSelections = [
    { key: 'w/in 24 hrs', value: 'w/in24hrs' },
    { key: 'w/in 3-7 days', value: 'w/in3-7days' },
    { key: 'Other visits', value: 'otherVisits' }
  ];
  const yesNoOpt = [
    { key: 'Yes', value: 'yes' },
    { key: 'No', value: 'no' }
  ];
  const breastFeedingSelections = [
    { key: 'After 90 minutes but w/in twenty-four (24) hrs', value: 'checked' }
  ];

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
              <SimpleGrid spacingY={5}>
                <FormHeading text="Newborn Assessment (Postnatal Visits)" />
                <SimpleGrid columns={2} spacingX={5}>
                  <GridItem colSpan={2}>
                    <Text color="teal">Essential Newborn Care (ENC)</Text>
                  </GridItem>
                  <GridItem>
                    <Radio
                      label="1. Immediate and thorough drying"
                      name="assessment.newborn.essentialNewbornCare.one"
                      options={yesNoOpt}
                    />
                  </GridItem>
                  <GridItem>
                    <Radio
                      label="2. Early skin to skin contact at least lasting for 90 minutes starting immediately after birth"
                      name="assessment.newborn.essentialNewbornCare.two"
                      options={yesNoOpt}
                    />
                  </GridItem>
                  <GridItem>
                    <Radio
                      label="3. Timely coed clamping and cutting"
                      name="assessment.newborn.essentialNewbornCare.three"
                      options={yesNoOpt}
                    />
                  </GridItem>
                  <GridItem>
                    <Radio
                      label="4. Early initiation of breast feeding and non-separation of the mother from the newborn"
                      name="assessment.newborn.essentialNewbornCare.four"
                      options={yesNoOpt}
                    />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Radio
                      label="Early ENC given (check yes if all 4 components were provided)"
                      name="assessment.newborn.essentialNewbornCare.earlyEncGiven"
                      options={yesNoOpt}
                    />
                  </GridItem>
                </SimpleGrid>
                <GridItem>
                  <Checkbox
                    label="Breastfeeding:"
                    name="assessment.newborn.breastFeeding"
                    options={breastFeedingSelections}
                  />
                </GridItem>
                <SimpleGrid columns={4} spacingX={5}>
                  <GridItem colSpan={4}>
                    <Text color="teal">Other ENC Given</Text>
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="1. Vitamin K injection"
                      name="assessment.newborn.otherEncGiven.vitKInjection"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="2. Eey propylaxis"
                      name="assessment.newborn.otherEncGiven.eyePropylaxis"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="3. Newborn screening (write done or referred)"
                      name="assessment.newborn.otherEncGiven.newbornScreening"
                      options={visitSelections}
                    />
                  </GridItem>
                  <GridItem>
                    <Checkbox
                      label="Others"
                      name="assessment.newborn.otherEncGiven.others"
                      options={visitSelections}
                    />
                  </GridItem>
                </SimpleGrid>
                <GridItem>
                  <Radio
                    label="Newborn Screening Done:"
                    name="assessment.newborn.newbornScreeningDone"
                    options={yesNoOpt}
                  />
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


const stepSixValidationSchema = Yup.object({

});
const StepSix = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <Box boxShadow={'lg'} p={10}>
      <Formik
        validationSchema={stepSixValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <SimpleGrid spacingY={5}>
                <GridItem>
                  <SimpleGrid columns={12} spacingX={3}>
                    <GridItem colSpan={2}>
                      <Center>
                        <FormLabel>
                          DATE
                        </FormLabel>
                      </Center>
                    </GridItem>
                    <GridItem colSpan={3}>
                      <UnorderedList>
                        <ListItem>Complaints/complication</ListItem>
                        <ListItem>Medical Observation</ListItem>
                        <ListItem>PE Findings including pelvic examination</ListItem>
                        <ListItem>laboratory</ListItem>
                        <ListItem>Other important comments</ListItem>
                      </UnorderedList>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Center>
                        <FormLabel>
                          MCN SERVICES GIVEN
                        </FormLabel>
                      </Center>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Center>
                        <FormLabel>
                          NAME OF PROVIDER AND SIGNATURE
                        </FormLabel>
                      </Center>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Center>
                        <FormLabel>
                          NEXT Follow-Up Schedule
                        </FormLabel>
                      </Center>
                    </GridItem>
                    <GridItem colSpan={1}></GridItem>
                  </SimpleGrid>
                </GridItem>
                <GridItem>
                  <FieldArray name="records">
                    {
                      ({ insert, remove, push }) => (
                        <div>
                          {values.records.length > 0 &&
                            values.records.map((record, index) => (
                              <SimpleGrid columns={12} spacingX={3}>

                                <GridItem colSpan={2}>
                                  <DatePicker name={`records.${index}.date`} />
                                </GridItem>
                                <GridItem colSpan={3}>
                                  <TextArea label="" name={`records.${index}.complaints`} />
                                </GridItem>
                                <GridItem colSpan={2}>
                                  <TextField label="" name={`records.${index}.mncServicesGiven`} />
                                </GridItem>
                                <GridItem colSpan={2}>
                                  <TextField label="" name={`records.${index}.nameOfProviderAndSignature`} />
                                </GridItem>
                                <GridItem colSpan={2}>
                                  <DatePicker name={`records.${index}.nextFollowUpSchedule`} />
                                </GridItem>

                                {/* {index > 0 && ( */}
                                <Button
                                  m='auto'
                                  isFullWidth="true"
                                  // type='button'
                                  onClick={() => remove(index)}
                                >
                                  -
                                </Button>
                                {/* )} */}

                              </SimpleGrid>
                            ))
                          }
                          <HStack>
                            <Spacer />
                            <Button
                              w={63.66}
                              type='button'
                              onClick={() => push({
                                date: null,
                                complaints: '',
                                mncServicesGiven: '',
                                nameOfProviderAndSignature: '',
                                nextFollowUpSchedule: null
                              })}
                            >
                              +
                            </Button>
                          </HStack>
                        </div>
                      )

                    }
                  </FieldArray>
                </GridItem>
              </SimpleGrid>
              <HStack mt={5}>
                <Spacer />
                <Button
                  type="button"
                  colorScheme='blue'
                  onClick={() => props.prev(values)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  colorScheme='green'
                >
                  Submit</Button>
              </HStack>
            </FormControl >
          </Form>
        )}
      </Formik>
    </Box>
  );
};


