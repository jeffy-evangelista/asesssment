import { Box, Button, Center, FormControl, FormHelperText, FormLabel, GridItem, HStack, ListItem, SimpleGrid, Spacer, Text, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react'
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import FormHeading from '../../../components/Labels/FormHeading';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import Checkbox from '../../../components/Fields/Checkbox';
import SubHeading from '../../../components/Labels/SubHeading';
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../../../utils/init-firebase";

export default function Figure5({works}) {
  const data6 = JSON.parse(JSON.stringify({works}))


  const datevisit =     data6.works.Figure5.dateOfVisit.seconds
  const newdatevisit = new Date(datevisit*1000)

  const dateDelivery =     data6.works.Figure5.physicalExamination.dateOfDelivery.seconds
  const newdateDelivery = new Date(dateDelivery*1000)

  const dateGiven =    data6.works.Figure5.supplementation.noOfTabletsGiven.dateGiven.seconds
   const newdatedateGivenNo = new Date(dateGiven*1000)


  const dateGivenA = data6.works.Figure5.supplementation.vitaminA.dateGiven.seconds
  const newdatedateGivenVitaminA = new Date(dateGivenA*1000)



    const recordDate = data6.works.Figure5.records.date.seconds

   const newrecordDate = new Date(recordDate*1000)

  const [data, setData] = useState({
    dateOfVisit: newdatevisit,
    physicalExamination: {
      dateOfDelivery: newdateDelivery,
      attendant:  data6.works.Figure5.physicalExamination.attendant,
      sex: data6.works.Figure5.physicalExamination.sex,
      typeOfDelivery: data6.works.Figure5.physicalExamination.typeOfDelivery,
      placeOfDelivery: data6.works.Figure5.physicalExamination.placeOfDelivery,
      amtsl: {
        steps: {
          noOne: data6.works.Figure5.physicalExamination.amtsl.steps.noOne,
          noTwo: data6.works.Figure5.physicalExamination.amtsl.steps.noTwo,
          noThree: data6.works.Figure5.physicalExamination.amtsl.steps.noThree
        },
        isProvided: data6.works.Figure5.physicalExamination.amtsl.isProvided
      }
    },
    assessment: {
      postPartumMother: {
        dangerSigns: {

          unconscious: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.unconscious)),
          VaginalBleeding: {
            hrs: data6.works.Figure5.assessment.postPartumMother.dangerSigns.VaginalBleeding.hrs,
            days: data6.works.Figure5.assessment.postPartumMother.dangerSigns.VaginalBleeding.days,
            otherVisit: data6.works.Figure5.assessment.postPartumMother.dangerSigns.VaginalBleeding.otherVisit
          },
          severeAbdominalPain: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.severeAbdominalPain)),
          looksVeryIll: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.looksVeryIll)),
          severeHeadache: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.severeHeadache)),
          severeDiffOfBreath: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.severeDiffOfBreath)),
          severeVomiting: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.severeVomiting)),
          postPartumDepression: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.dangerSigns.postPartumDepression)),
        },
        pelvicExamFindings: {
          uterus: {
            contracted: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.uterus.contracted)),
            relaxed: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.uterus.relaxed))
          },
          vaginalBleeding: {
            profuse: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.profuse)),
            moderate: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.moderate)),
            scanty: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalBleeding.scanty))
          },
          vaginalDischarge: {
            color: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalDischarge.color)),
            odor:  JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalDischarge.odor))
          },
          vaginalLaceration: {
            firstDegree: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.firstDegree)),
            secondDegree: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.secondDegree)),
            thirdDegree: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.thirdDegree)),
            lacerationSutured: data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.vaginalLaceration.lacerationSutured
          },
          ifCs: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.postPartumMother.pelvicExamFindings.ifCs)),
        }
      },
      newborn: {
        withPoorSuck: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.withPoorSuck)),
        ifBreathing: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.ifBreathing)),
        severeChestIndrawing: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.severeChestIndrawing)),
        grunting: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.grunting)),
        convulsions: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.convulsions)),
        floppyStiffExtremities: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.floppyStiffExtremities)),
        temp: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.temp)),
        severeJaundice: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.severeJaundice)),
        bleedingFromUmbilicalStumpOrCut:JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.bleedingFromUmbilicalStumpOrCut)) ,
        umbilicusDraining: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.umbilicusDraining)),
        foulSmellingDischarge: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.foulSmellingDischarge)),
        skinPostules: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.skinPostules)),
        essentialNewbornCare: {
          one: data6.works.Figure5.assessment.newborn.essentialNewbornCare.one,
          two: data6.works.Figure5.assessment.newborn.essentialNewbornCare.two,
          three: data6.works.Figure5.assessment.newborn.essentialNewbornCare.three,
          four: data6.works.Figure5.assessment.newborn.essentialNewbornCare.four,
          earlyEncGiven: data6.works.Figure5.assessment.newborn.essentialNewbornCare.earlyEncGiven
        },
        breastFeeding: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.breastFeeding)),
        otherEncGiven: {
          vitKInjection: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.otherEncGiven.vitKInjection)) ,
          eyePropylaxis: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.otherEncGiven.eyePropylaxis)),
          newbornScreening: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.otherEncGiven.newbornScreening)),
          others: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.otherEncGiven.others))
        },
        newbornScreeningDone: JSON.parse(JSON.stringify(data6.works.Figure5.assessment.newborn.newbornScreeningDone))
      }
    },
    supplementation: {
      noOfTabletsGiven: {
        no: data6.works.Figure5.supplementation.noOfTabletsGiven.no,
        dateGiven: newdatedateGivenNo
      },
      vitaminA: {
        no: data6.works.Figure5.supplementation.vitaminA.no,
        dateGiven: newdatedateGivenVitaminA
      }
    },
    records: {
      row1: {
        date: "",
        complaints: "",
        mncServicesGiven: "",
        nameOfProviderAndSignature: "",
        nextFollowUpSchedule: ""
      },
      row2: {
        date: "",
        complaints: "",
        mncServicesGiven: "",
        nameOfProviderAndSignature: "",
        nextFollowUpSchedule: ""
      },
      row3: {
        date: "",
        complaints: "",
        mncServicesGiven: "",
        nameOfProviderAndSignature: "",
        nextFollowUpSchedule: ""
      },
      row4: {
        date: "",
        complaints: "",
        mncServicesGiven: "",
        nameOfProviderAndSignature: "",
        nextFollowUpSchedule: ""
      }
    }
  });
  const [currentStep, setCurrentStep] = useState(0);


  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
    updateUsers(formData);
  };

  async  function updateUsers(formData) {
    const documentId = JSON.parse(JSON.stringify(works.id))
    const userRef = doc(db, 'client', documentId);
    await  updateDoc(userRef,{
      Figure5: formData

    }).then(() => {
      alert("Form Updated Successfully")
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
    //create alert

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
                  <GridItem colSpan={3}>
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
                </SimpleGrid>
                <SimpleGrid columns={12} spacingX={3}>
                  <GridItem colSpan={2}>
                    <DatePicker label="" name="sideB.records.row1.date" />
                    <DatePicker label="" name="sideB.records.row2.date" />
                    <DatePicker label="" name="sideB.records.row3.date" />
                    <DatePicker label="" name="sideB.records.row4.date" />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <TextField label="" name="sideB.records.row1.complaints" />
                    <TextField label="" name="sideB.records.row2.complaints" />
                    <TextField label="" name="sideB.records.row3.complaints" />
                    <TextField label="" name="sideB.records.row4.complaints" />
                  </GridItem>
                  <GridItem colSpan={3}>
                    <TextField label="" name="sideB.records.row1.mncServicesGiven" />
                    <TextField label="" name="sideB.records.row2.mncServicesGiven" />
                    <TextField label="" name="sideB.records.row3.mncServicesGiven" />
                    <TextField label="" name="sideB.records.row4.mncServicesGiven" />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <TextField label="" name="sideB.records.row1.nameOfProviderAndSignature" />
                    <TextField label="" name="sideB.records.row2.nameOfProviderAndSignature" />
                    <TextField label="" name="sideB.records.row3.nameOfProviderAndSignature" />
                    <TextField label="" name="sideB.records.row4.nameOfProviderAndSignature" />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <DatePicker label="" name="sideB.records.row1.nextFollowUpSchedule" />
                    <DatePicker label="" name="sideB.records.row2.nextFollowUpSchedule" />
                    <DatePicker label="" name="sideB.records.row3.nextFollowUpSchedule" />
                    <DatePicker label="" name="sideB.records.row4.nextFollowUpSchedule" />
                  </GridItem>
                </SimpleGrid>
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


