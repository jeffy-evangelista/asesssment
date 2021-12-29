import { Box, Button, Center, FormControl, FormLabel, GridItem, HStack, ListItem, SimpleGrid, Spacer, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import FormHeading from '../../../components/Labels/FormHeading';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import Select from '../../../components/Fields/Select';
import Checkbox from '../../../components/Fields/Checkbox';
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../../../utils/init-firebase";


export default function Figure2({works}) {
    const data3 = JSON.parse(JSON.stringify({works}))

    const birty = data3.works.Figure2.sideA.familySerial.client.birthday.seconds
    const newbirty = new Date(birty*1000)

    const sbirty = data3.works.Figure2.sideA.familySerial.spouse.birthday.seconds
    const newsbirty = new Date(sbirty*1000)


    const row1 = data3.works.Figure2.sideB.records.row1.date.seconds
    const newrow1 = new Date(row1*1000)

    const row4 = data3.works.Figure2.sideB.records.row4.date.seconds
    const newrow4 = new Date(row4*1000)


    const row2 = data3.works.Figure2.sideB.records.row2.date.seconds
    const newrow2 = new Date(row2*1000)

    const row3 = data3.works.Figure2.sideB.records.row3.date.seconds
    const newrow3 = new Date(row3*1000)


    const nextrow1 = data3.works.Figure2.sideB.records.row1.nextFollowUpSchedule.seconds
    const newnextrow1 = new Date(nextrow1*1000)

    const nextrow2 = data3.works.Figure2.sideB.records.row2.nextFollowUpSchedule.seconds
    const newnextrow2 = new Date(nextrow2*1000)

    const nextrow3 = data3.works.Figure2.sideB.records.row3.nextFollowUpSchedule.seconds
    const newnextrow3 = new Date(nextrow3*1000)


    const nextrow4 = data3.works.Figure2.sideB.records.row4.nextFollowUpSchedule.seconds
    const newnextrow4 = new Date(nextrow4*1000)


    const fmonth = data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.date.seconds
    const f2month = data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.date.seconds
    const f3month = data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.date.seconds
    const f4month = data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.date.seconds
    const f5month = data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.date.seconds
    const f6month = data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.date.seconds
    const f7month = data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.date.seconds
    const f8month = data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.date.seconds
    const f9month = data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.date.seconds
    const frmonth = data3.works.Figure2.sideB.abdominalExamFindings.remarks.date.seconds

    const new1month = new Date(fmonth*1000)
    const new2month = new Date(f2month*1000)
    const new3month = new Date(f3month*1000)
    const new4month = new Date(f4month*1000)
    const new5month = new Date(f5month*1000)
    const new6month = new Date(f6month*1000)
    const new7month = new Date(f7month*1000)
    const new8month = new Date(f8month*1000)
    const new9month = new Date(f9month*1000)
    const newrmonth = new Date(frmonth*1000)


    const [data, setData] = useState({
        sideA: {
            familySerial: {
                client: {
                    birthday: newbirty,
                    highestEducation: data3.works.Figure2.sideA.familySerial.client.highestEducation,
                    occupation: data3.works.Figure2.sideA.familySerial.client.occupation,
                    addressStreet: data3.works.Figure2.sideA.familySerial.client.addressStreet,
                    addressBarangay:data3.works.Figure2.sideA.familySerial.client.addressBarangay,
                    addressMunicipality: data3.works.Figure2.sideA.familySerial.client.addressMunicipality,
                    addressProvince: data3.works.Figure2.sideA.familySerial.client.addressProvince,
                },
                spouse: {
                    firstName: data3.works.Figure2.sideA.familySerial.spouse.firstName,
                    middleName: data3.works.Figure2.sideA.familySerial.spouse.middleName,
                    lastName: data3.works.Figure2.sideA.familySerial.spouse.lastName,
                    birthday: newsbirty,
                    highestEducation: data3.works.Figure2.sideA.familySerial.spouse.highestEducation,
                    occupation: data3.works.Figure2.sideA.familySerial.spouse.occupation
                },
                avgFamilyIncome: data3.works.Figure2.sideA.familySerial.avgFamilyIncome,
                noOfChildren: data3.works.Figure2.sideA.familySerial.noOfChildren,
                birthPlan: data3.works.Figure2.sideA.familySerial.birthPlan
            },
            medicalHistory: {
                reviewOfSystems: {
                    heent: JSON.parse(JSON.stringify( data3.works.Figure2.sideA.medicalHistory.reviewOfSystems.heent)),
                    chestHeart: JSON.parse(JSON.stringify( data3.works.Figure2.sideA.medicalHistory.reviewOfSystems.chestHeart)),
                    abdomen: JSON.parse(JSON.stringify( data3.works.Figure2.sideA.medicalHistory.reviewOfSystems.abdomen)),
                    genital: JSON.parse(JSON.stringify( data3.works.Figure2.sideA.medicalHistory.reviewOfSystems.genital)),
                    extremeties: JSON.parse(JSON.stringify( data3.works.Figure2.sideA.medicalHistory.reviewOfSystems.extremeties)),
                    skin: JSON.parse(JSON.stringify( data3.works.Figure2.sideA.medicalHistory.reviewOfSystems.skin)),
                },
                familyHistory: data3.works.Figure2.sideA.medicalHistory.familyHistory,
                pastHealthHistory: data3.works.Figure2.sideA.medicalHistory.pastHealthHistory,
                socialHistory: data3.works.Figure2.sideA.medicalHistory.socialHistory,
                obstericalHistory: {
                    historyOfPreviousDeliveries: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.medicalHistory.obstericalHistory.historyOfPreviousDeliveries)),
                    menstrualHistory: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.medicalHistory.obstericalHistory.menstrualHistory)),
                },
                familyPlanningHistory: {
                    previouslyUsedMethod: data3.works.Figure2.sideA.medicalHistory.familyPlanningHistory.previouslyUsedMethod
                }
            },
            physicalExamination: {
                vitalSigns: {
                    bloodPressure: data3.works.Figure2.sideA.physicalExamination.vitalSigns.bloodPressure,
                    weight: data3.works.Figure2.sideA.physicalExamination.vitalSigns.weight,
                    height: data3.works.Figure2.sideA.physicalExamination.vitalSigns.height,
                    bmi: data3.works.Figure2.sideA.physicalExamination.vitalSigns.bmi,
                    pulseRate: data3.works.Figure2.sideA.physicalExamination.vitalSigns.pulseRate
                },
                conjunctiva: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.conjunctiva)),
                neck: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.neck)),
                breast: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.breast)),
                thorax: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.thorax)),
                abdomen: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.abdomen)),
                vaginalExamination: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.vaginalExamination)),
                extremities: JSON.parse(JSON.stringify(data3.works.Figure2.sideA.physicalExamination.extremities)),
                toxoidVaccineStatus: data3.works.Figure2.sideA.physicalExamination.toxoidVaccineStatus,
                impressionDiagnosis: data3.works.Figure2.sideA.physicalExamination.impressionDiagnosis
            }
        },

        sideB: {
            records: {
                row1: {
                    date: newrow1,
                    complaints: data3.works.Figure2.sideB.records.row1.complaints,
                    mncServicesGiven: data3.works.Figure2.sideB.records.row1.mncServicesGiven,
                    nameOfProviderAndSignature: data3.works.Figure2.sideB.records.row1.nameOfProviderAndSignature,
                    nextFollowUpSchedule: newnextrow1
                },
                row2: {
                    date: newrow2,
                    complaints: data3.works.Figure2.sideB.records.row2.complaints,
                    mncServicesGiven: data3.works.Figure2.sideB.records.row2.mncServicesGiven,
                    nameOfProviderAndSignature: data3.works.Figure2.sideB.records.row2.nameOfProviderAndSignature,
                    nextFollowUpSchedule: newnextrow2
                },
                row3: {
                    date: newrow3,
                    complaints: data3.works.Figure2.sideB.records.row3.complaints,
                    mncServicesGiven: data3.works.Figure2.sideB.records.row3.mncServicesGiven,
                    nameOfProviderAndSignature: data3.works.Figure2.sideB.records.row3.nameOfProviderAndSignature,
                    nextFollowUpSchedule: newnextrow3
                },
                row4: {
                    date: newrow4,
                    complaints: data3.works.Figure2.sideB.records.row4.complaints,
                    mncServicesGiven: data3.works.Figure2.sideB.records.row4.mncServicesGiven,
                    nameOfProviderAndSignature: data3.works.Figure2.sideB.records.row4.nameOfProviderAndSignature,
                    nextFollowUpSchedule: newnextrow4
                }
            },
            abdominalExamFindings: {
                firstTrimester: {
                    firstMonth: {
                        date: new1month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.firstMonth.uterineAcitivty
                    },
                    secondMonth: {
                        date: new2month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.secondMonth.uterineAcitivty
                    },
                    thirdMonth: {
                        date: new3month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.firstTrimester.thirdMonth.uterineAcitivty

                    }
                },
                secondTrimester: {
                    fourthMonth: {
                        date: new4month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fourthMonth.uterineAcitivty
                    },
                    fifthMonth: {
                        date: new5month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.fifthMonth.uterineAcitivty
                    },
                    sixthMonth: {
                        date: new6month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.secondTrimester.sixthMonth.uterineAcitivty
                    }
                },
                thirdTrimester: {
                    seventhMonth: {
                        date: new7month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.seventhMonth.uterineAcitivty
                    },
                    eightMonth: {
                        date: new8month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.eightMonth.uterineAcitivty
                    },
                    ninethMonth: {
                        date: new9month,
                        fundicHeight:  data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.fundicHeight,
                        fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.fetalHeartTomes,
                        aog: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.aog,
                        leopolds: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.leopolds,
                        lOne: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lOne,
                        lTwo: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lTwo,
                        lThree: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lThree,
                        lFour: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lFour,
                        uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.thirdTrimester.ninethMonth.uterineAcitivty
                    }
                },
                remarks: {
                    date: newrmonth,
                    fundicHeight: data3.works.Figure2.sideB.abdominalExamFindings.remarks.fundicHeight,
                    fetalHeartTomes: data3.works.Figure2.sideB.abdominalExamFindings.remarks.fetalHeartTomes,
                    aog: data3.works.Figure2.sideB.abdominalExamFindings.remarks.aog,
                    leopolds: data3.works.Figure2.sideB.abdominalExamFindings.remarks.leopolds,
                    lOne: data3.works.Figure2.sideB.abdominalExamFindings.remarks.lOne,
                    lTwo: data3.works.Figure2.sideB.abdominalExamFindings.remarks.lTwo,
                    lThree: data3.works.Figure2.sideB.abdominalExamFindings.remarks.lThree,
                    lFour: data3.works.Figure2.sideB.abdominalExamFindings.remarks.lFour,
                    uterineAcitivty: data3.works.Figure2.sideB.abdominalExamFindings.remarks.uterineAcitivty
                }
            }
        }
    });

    const [currentStep, setCurrentStep] = useState(0);
    const makeRequest = (formData) => {

        updateUsers(formData);
    };

    async  function updateUsers(formData) {
        const documentId = JSON.parse(JSON.stringify(works.id))
        const userRef = doc(db, 'client', documentId);
        await  updateDoc(userRef,{
            Figure2: formData
        }).then(() => {
            alert("Form Updated Successfully")
        }).catch(function (error) {
            console.error("Error writing document: In Figure 2 ", error);
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
        <StepFive next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepSix next={handleNextStep} prev={handlePrevStep} data={data} />
    ];

    return <div className="App">{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({

});
const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
        // alert(JSON.stringify(values, null, 2));
    };
    const highestEducationOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Primary Education', value: 'primaryEducation' },
        { key: 'Secondary Education', value: 'secondaryEducation' },
        { key: 'Vocation', value: 'vocation' },
        { key: 'College', value: 'college' }
    ]
    return (
        <Box boxShadow={'lg'} p={10}>
            <Formik
                validationSchema={stepOneValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <FormControl>
                            <SimpleGrid columns={12} spacingX={5}>
                                <GridItem colSpan={12}>
                                    <Text fontSize="2xl">Client</Text>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <DatePicker
                                        name="sideA.familySerial.client.birthday"
                                        label="Birthday" />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Select
                                        label="Highest Education"
                                        name="sideA.familySerial.client.highestEducation"
                                        options={highestEducationOptions} />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <TextField
                                        name="sideA.familySerial.client.occupation"
                                        label="Occupation" />
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <TextField
                                        name="sideA.familySerial.client.addressStreet"
                                        label="Street" />

                                </GridItem>
                                <GridItem colSpan={3}>
                                    <TextField
                                        name="sideA.familySerial.client.addressBarangay"
                                        label="Barangay" />
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <TextField
                                        name="sideA.familySerial.client.addressMunicipality"
                                        label="Municipality" />
                                </GridItem>
                                <GridItem colSpan={3}>
                                    <TextField
                                        name="sideA.familySerial.client.addressProvince"
                                        label="Province" />
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
    const highestEducationOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Primary Education', value: 'primaryEducation' },
        { key: 'Secondary Education', value: 'secondaryEducation' },
        { key: 'Vocation', value: 'vocation' },
        { key: 'College', value: 'college' }
    ]
    const birthPlanOptions = [
        { key: 'Hospital', value: 'hospital' },
        { key: 'RHU', value: 'rhu' },
        { key: 'LIC', value: 'lic' },
        { key: 'Home', value: 'home' }
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
                            <SimpleGrid columns={1} spacingY={10}>
                                <GridItem>
                                    <SimpleGrid columns={12} spacingX={5}>
                                        <GridItem colSpan={12}>
                                            <Text fontSize="2xl">Spouse</Text>
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <TextField
                                                name="sideA.familySerial.spouse.lastName"
                                                label="Last Name"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <TextField
                                                name="sideA.familySerial.spouse.firstName"
                                                label="First Name"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <TextField
                                                name="sideA.familySerial.spouse.middleName"
                                                label="Middle Name"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <DatePicker
                                                name="sideA.familySerial.spouse.birthday"
                                                label="Birthday"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <Select
                                                label="Highest Education"
                                                name="sideA.familySerial.spouse.highestEducation"
                                                options={highestEducationOptions}
                                            />
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <TextField
                                                name="sideA.familySerial.spouse.occupation"
                                                label="Occupation"
                                            />
                                        </GridItem>
                                    </SimpleGrid>
                                </GridItem>
                                <GridItem>
                                    <SimpleGrid columns={2} spacingX={5}>
                                        <GridItem colSpan={1}>
                                            <TextField
                                                name="sideA.familySerial.avgFamilyIncome"
                                                label="Average Family Income"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <TextField
                                                name="sideA.familySerial.noOfChildren"
                                                label="No. of Children"
                                            />
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <Radio
                                                label="Birth Plan"
                                                name="sideA.familySerial.birthPlan"
                                                options={birthPlanOptions}
                                            />
                                        </GridItem>
                                    </SimpleGrid>
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

});
const StepThree = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };
    const heentSelections = [
        { key: 'Epilepsy/Convulsion/Seizure', value: 'epilepsyConvulsionSeizure' },
        { key: 'Severe Headache/dizziness', value: 'severeHeadacheDizziness' },
        { key: 'Visual Disturbance/blurring of vision', value: 'visualDisturbanceBlurringOfVision' },
        { key: 'Yellowish conjunctiva', value: 'yellowishConjunctiva' },
        { key: 'Enlarged thyroid', value: 'enlargedThyroid' }
    ];
    const chestHeartSelections = [
        { key: 'Severe chest pain', value: 'severeChestPain' },
        { key: 'Shortness of breath and easy fatigability', value: 'shortnessOfBreath' },
        { key: 'Breast/axillary masses', value: 'breastAxillaryMasses' },
        { key: 'Nipple discharges (specify if blood or pus)', value: 'nippleDischarges ' }
    ];
    const abdomenSelections = [
        { key: 'Mass in the Abdomen', value: 'massInTheAbdomen' },
        { key: 'History of gallbladder disease', value: 'historyOfGallbladderDisease' },
        { key: 'History of liver disease', value: 'historyOfLiverDisease' }
    ];
    const genitalSelections = [
        { key: 'Vaginal discharge', value: 'vaginalDischarge' },
        { key: 'Intermenstrual bleeding', value: 'intermenstrualBleeding' },
        { key: 'Postcoital bleeding', value: 'postcoitalBleeding' },
        { key: 'Mass in the uterus', value: 'massInTheUterus' }
    ];
    const extremitiesSelections = [
        { key: 'Severe varicosities', value: 'severeVaricosities' },
        { key: 'Swelling or servere pain in the legs not related to injuries', value: 'historyOfGallbladderDisease' }
    ];
    const skinSelections = [
        { key: 'Yellowish Skin', value: 'yellowishSkin' }
    ];
    const familyHistorySelections = [
        { key: 'CVA (strokes)', value: 'cvaStrokes' },
        { key: 'Hypertension', value: 'hypertension' },
        { key: 'Asthma', value: 'asthma' },
        { key: 'Heart disease', value: 'heartDisease' },
        { key: 'Diabetes', value: 'diabetes' }
    ];
    const pastHealthHistorySelections = [
        { key: 'Allergies', value: 'allergies' },
        { key: 'Drug intake (anti-tuberculosis, anti-diabetic, anticonvulsant)', value: 'drugIntake' },
        { key: 'Bleeding tendencies (nose, gums, etc.)', value: 'bleedingTendencies' },
        { key: 'Anemia', value: 'anemia' },
        { key: 'Diabetes', value: 'diabetes' },
        { key: 'Itching or sores in or around vagina', value: 'itching' },
        { key: 'Pain or burning sensation on urination', value: 'painOrBurning' }
    ];
    const socialHistorySelections = [
        { key: 'Smoking', value: 'smoking' },
        { key: 'Alcohol beverage', value: 'alcoholBeverage' },
        { key: 'History of domestic violence', value: 'vaw' },
        { key: 'History of psychological or mood disturbance', value: 'moodDisturbances' },
        { key: 'Unpleasant relationship with partner', value: 'unpleasantRelationship' },
        { key: 'Treated for STIs in the past', value: 'sTI' }
    ];
    const obstericalHistorySelections = [
        { key: 'Number of pregnancies', value: 'noOfPreg' },
        { key: 'History of giving birth to preterm or LBW infants', value: 'lBW' },
        { key: 'History of Ectopic pregnancy Hydatidiform mole (within the last 12 months)', value: 'ectopicPregnancy' }
    ];
    const historyOfPreviouDeliveriesSelections = [
        { key: 'Date of last delivery', value: 'dateOflastDelivery' },
        { key: 'Type of last Delivery', value: 'typeOfLastDelivery' },
        { key: 'Birth Attendant in last delivery', value: 'birthAttendant' }
    ];
    const menstrualHistorySelections = [
        { key: 'Last menstrual period', value: 'lastMenstrualPeriod' },
        { key: 'Past menstrual period', value: 'pastMenstrualPeriod' },
        { key: 'Duration of menstrual Bleeding', value: 'durationOfMenstrualBleeding' },
        { key: 'Character of Menstrual bleeding', value: 'characterOfMenstrualBleeding' }
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
                                    <FormHeading text='Medical History' />
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Box borderWidth='1px' borderRadius='lg' padding={5}>
                                        <VStack align='stretch'>
                                            <Text fontSize='xl'>
                                                Review of Systems:
                                            </Text>
                                            <Checkbox
                                                label="Heent"
                                                name="sideA.medicalHistory.reviewOfSystems.heent"
                                                options={heentSelections}
                                            />
                                            <Checkbox
                                                label="Chest/Heart"
                                                name="sideA.medicalHistory.reviewOfSystems.chestHeart"
                                                options={chestHeartSelections}
                                            />
                                            <Checkbox
                                                label="Abdomen"
                                                name="sideA.medicalHistory.reviewOfSystems.abdomen"
                                                options={abdomenSelections}
                                            />
                                            <Checkbox
                                                label="Genital"
                                                name="sideA.medicalHistory.reviewOfSystems.genital"
                                                options={genitalSelections}
                                            />
                                            <Checkbox
                                                label="Extremities"
                                                name="sideA.medicalHistory.reviewOfSystems.extremities"
                                                options={extremitiesSelections}
                                            />
                                            <Checkbox
                                                label="Skin"
                                                name="sideA.medicalHistory.reviewOfSystems.skin"
                                                options={skinSelections}
                                            />
                                        </VStack >
                                    </Box>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <SimpleGrid spacingY={5}>
                                        <GridItem>
                                            <Box
                                                borderWidth='1px'
                                                borderRadius='lg'
                                                padding={5}
                                            >
                                                <Text fontSize='xl'>
                                                    Family History:
                                                </Text>
                                                <Checkbox
                                                    label=""
                                                    name="sideA.medicalHistory.familyHistory"
                                                    options={familyHistorySelections}
                                                />
                                            </Box>
                                        </GridItem>
                                        <GridItem>
                                            <Box
                                                borderWidth='1px'
                                                borderRadius='lg'
                                                padding={5}
                                            >
                                                <Text fontSize='xl'>
                                                    Past Health History:
                                                </Text>
                                                <Checkbox
                                                    label=""
                                                    name="sideA.medicalHistory.pastHealthHistory"
                                                    options={pastHealthHistorySelections}
                                                />
                                            </Box>
                                        </GridItem>
                                        <GridItem>
                                            <Box
                                                borderWidth='1px'
                                                borderRadius='lg'
                                                padding={5}>
                                                <Text fontSize='xl'>
                                                    Social History:
                                                </Text>
                                                <Checkbox
                                                    label=""
                                                    name="sideA.medicalHistory.socialHistory"
                                                    options={socialHistorySelections}
                                                />
                                            </Box>
                                        </GridItem>
                                    </SimpleGrid>
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Box
                                        borderWidth='1px'
                                        borderRadius='lg'
                                        padding={5}
                                    >
                                        <SimpleGrid columns={3} spacingX={5}>
                                            <GridItem colSpan={3}>
                                                <Text fontSize='xl'>
                                                    Obsterical History:
                                                </Text>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Checkbox
                                                    label=""
                                                    name="sideA.medicalHistory.obsterical.obstericalHistory"
                                                    options={obstericalHistorySelections}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Checkbox
                                                    label="History of Previous Deliveries"
                                                    name="sideA.medicalHistory.obstericalHistory.historyOfPreviousDeliveries"
                                                    options={historyOfPreviouDeliveriesSelections}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Checkbox
                                                    label="Menstrual History"
                                                    name="sideA.medicalHistory.obstericalHistory.menstrualHistory"
                                                    options={menstrualHistorySelections}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={3}>
                                                <TextField
                                                    label="Previously used method"
                                                    name="sideA.medicalHistory.familyPlanningHistory.previouslyUsedMethod"
                                                />
                                            </GridItem>
                                        </SimpleGrid>
                                    </Box>
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
});
const StepFour = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };
    const conjunctivaSelections = [
        { key: 'Pale', value: 'pale' },
        { key: 'Yellowish', value: 'yellowish' }
    ];
    const neckSelections = [
        { key: 'Enlarged thyroid nodes', value: 'enlargedThyroid' },
        { key: 'Enlarged Lymph', value: 'enlargedLymph' }
    ];
    const breastSelections = [
        { key: 'Mass', value: 'mass' },
        { key: 'Nipple discharge', value: 'nippleDischarge' },
        { key: 'skin - orange peel or dimpling', value: 'skin' },
        { key: 'Enlarged axillary lymph nodes', value: 'enlargedAxillary ' }
    ];
    const thoraxSelections = [
        { key: 'Abnormal heart sounds / rate / rhythym', value: 'abnormalHeartSounds' },
        { key: 'Abnormal Breath sounds / respiratory rate', value: 'abnormalBreathSounds' }
    ];
    const abdomenSelections = [
        { key: 'Enlarged Liver', value: 'enlargedLiver' },
        { key: 'Mass', value: 'mass' },
        { key: 'Tenderness', value: 'tenderness' },
        { key: 'Scar', value: 'scar' }
    ];
    const vaginalExaminationSelections = [
        { key: 'Bleeding', value: 'bleeding' },
        { key: 'Discharges', value: 'discharges' },
        { key: 'Cyst/mass', value: 'cyst' },
        { key: 'Scars', value: 'scars' },
        { key: 'Warts', value: 'warts' },
        { key: 'Lacerations', value: 'lacerations' },
        { key: 'others, specify', value: 'others' }
    ];
    const extremitiesSelections = [
        { key: 'Edema', value: 'edema' },
        { key: 'Varicosities', value: 'varicosities' },
        { key: 'Pain on forced dorsiflexion', value: 'dorsiflexion' }
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
                            <SimpleGrid spacing={5}>
                                <GridItem >
                                    <FormHeading text='Physical Examination' />
                                </GridItem>
                                <GridItem >
                                    <Box borderWidth='1px' borderRadius='lg' padding={5}>
                                        <Text fontSize='xl'>Vital Signs:</Text>
                                        <SimpleGrid spacingY={5}>
                                            <GridItem>
                                                <SimpleGrid columns={2} spacingX={5}>
                                                    <GridItem>
                                                        <TextField
                                                            label='Blood pressure'
                                                            name="sideA.physicalExamination.vitalSigns.bloodPressure"
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <TextField
                                                            label='Weight'
                                                            name="sideA.physicalExamination.vitalSigns.weight"
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <TextField
                                                            label='Height'
                                                            name="sideA.physicalExamination.vitalSigns.height"
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <TextField
                                                            label='Body Mass Index'
                                                            name="sideA.physicalExamination.vitalSigns.bmi"
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <TextField
                                                            label='Pulse Rate'
                                                            name="sideA.physicalExamination.vitalSigns.pulseRate"
                                                        />
                                                    </GridItem>
                                                </SimpleGrid>
                                            </GridItem>
                                            <GridItem>
                                                <SimpleGrid columns={2} spacing={5}>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Conjunctiva"
                                                            name="sideA.physicalExamination.conjunctiva"
                                                            options={conjunctivaSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Neck"
                                                            name="sideA.physicalExamination.neck"
                                                            options={neckSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Breast"
                                                            name="sideA.physicalExamination.breast"
                                                            options={breastSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Thorax"
                                                            name="sideA.physicalExamination.thorax"
                                                            options={thoraxSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Abdomen"
                                                            name="sideA.physicalExamination.abdomen"
                                                            options={abdomenSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Vaginal Examination"
                                                            name="sideA.physicalExamination.vaginalExamination"
                                                            options={vaginalExaminationSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <Checkbox
                                                            label="Extremities"
                                                            name="sideA.physicalExamination.extremities"
                                                            options={extremitiesSelections}
                                                        />
                                                    </GridItem>
                                                    <GridItem>
                                                        <TextField
                                                            label="Td toxoid vaccine Status:"
                                                            name="sideA.physicalExamination.toxoidVaccineStatus"
                                                        />
                                                    </GridItem>
                                                </SimpleGrid>
                                            </GridItem>
                                        </SimpleGrid>
                                    </Box>
                                </GridItem>
                                <GridItem >
                                    <Box borderWidth='1px' borderRadius='lg' padding={5}>
                                        <Text fontSize='xl'>Impression/Diagnosis:</Text>
                                        <TextField
                                            label=""
                                            name="sideA.physicalExamination.impressionDiagnosis"
                                        />
                                    </Box>
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

const stepFiveValidationSchema = Yup.object({

});
const StepFive = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
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
                                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                                    Back
                                </Button>
                                <Button type="submit" colorScheme='blue'>Next</Button>
                            </HStack>
                        </FormControl >
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
        <Box boxShadow={'lg'} p={8}>
            <Formik
                validationSchema={stepSixValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}
            >

                {({ values }) => (
                    <Form>
                        <FormControl>
                            <SimpleGrid columns={2} spacing={3}>
                                <GridItem>
                                    <Box
                                        borderRadius='lg'
                                        borderWidth='1px'
                                        padding={3}
                                    >
                                        <SimpleGrid columns={3} spacingX={2}>
                                            <GridItem colSpan={3}>
                                                <Center>
                                                    <Text>
                                                        1st Trimester
                                                    </Text>
                                                </Center>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            1st mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.firstMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            2nd mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.secondMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            3rd mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.firstTrimester.thirdMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                        </SimpleGrid>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Box
                                        borderRadius='lg'
                                        borderWidth='1px'
                                        padding={3}
                                    >
                                        <SimpleGrid columns={3} spacingX={2}>
                                            <GridItem colSpan={3}>
                                                <Center>
                                                    <Text>
                                                        2nd Trimester
                                                    </Text>
                                                </Center>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            4th mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fourthMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            5th mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.fifthMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            6th mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.secondTrimester.sixthMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                        </SimpleGrid>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Box
                                        borderRadius='lg'
                                        borderWidth='1px'
                                        padding={3}
                                    >
                                        <SimpleGrid columns={3} spacingX={2}>
                                            <GridItem colSpan={3}>
                                                <Center>
                                                    <Text>
                                                        3rd Trimester
                                                    </Text>
                                                </Center>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            7th mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.seventhMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            8th mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.eightMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <Center>
                                                        <Text>
                                                            9th mo
                                                        </Text>
                                                    </Center>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.thirdTrimester.ninethMonth.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                        </SimpleGrid>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Box
                                        borderRadius='lg'
                                        borderWidth='1px'
                                        padding={3}
                                    >
                                        <SimpleGrid spacingX={2}>
                                            <GridItem >
                                                <Center>
                                                    <Text mb={5}>
                                                        Remarks
                                                    </Text>
                                                </Center>
                                            </GridItem>
                                            <GridItem>
                                                <VStack spacing='3px'>
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.date"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.fundicHeight"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.fetalHeartTomes"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.aog"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.leopolds"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.lOne"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.lTwo"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.lThree"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.lFour"
                                                    />
                                                    <TextField
                                                        label=""
                                                        name="sideB.abdominalExamFindings.remarks.uterineAcitivty"
                                                    />
                                                </VStack>
                                            </GridItem>
                                        </SimpleGrid>
                                    </Box>
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


