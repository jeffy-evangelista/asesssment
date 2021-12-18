import { Button } from '@chakra-ui/button'
import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormHelperText, FormLabel, } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightAddon, } from '@chakra-ui/input'
import { Box, SimpleGrid, GridItem, VStack, HStack, Text, Divider} from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import React, { useState } from 'react'
import {

    updateDoc,
   doc,
} from "firebase/firestore"
  import { db } from '../../../../utils/init-firebase'
  import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Figure6({works}) {
    const [fim, setFim] = useState("");
    const [syphilisScreening, setSyphilisScreening] = useState("");
    const [hepatitisBScreening, setHepatitisBScreening] = useState("");
    const [gestationalDiabetes, setGestationalDiabetes] = useState("");
    const [cbc, setCbc] = useState("");
    const [sex, setSex] = useState("");
    const [outcome, setOutcome] = useState("");
    const [delivery, setDelivery] = useState("");
    const [type, setType] = useState("");
    const [ownership, setOwnership] = useState("");
    const [birthAttendant, setBirthAttendant] = useState("");
    const [serialNum, setSerialNum] = useState("");
    const [first, setFirst] =useState("");
    const [middle, setMiddle] = useState("");
    const [last, setLast] = useState("");
    const [address, setAddress] = useState("");
    const [econStatus, setStatus] = useState("");
    const [age1, setAge1] = useState("");
    const [age2, setAge2] = useState("");
    const [age3, setAge3] = useState("");
    const [lmp1, setLmp1] = useState("");
    const [lmp2, setLmp2] = useState("");
    const [vist1, setVist1] = useState("");
    const [vist2, setVist2] = useState("");
    const [vist3, setVist3] = useState("");
    const [vist4, setVist4] = useState("");
    const [carbVist1, setCarbVist1] = useState("");
    const [carbVist2, setCarbVist2] = useState("");
    const [carbVist3, setCarbVist3] = useState("");
    const [nutriAsses1, setNutriAsses1] = useState("");
    const [nutriAsses2, setNutriAsses2] = useState("");
    const [nutriAsses3, setNutriAsses3] = useState("");
    const [birthweight1, setBrithWeight1] = useState("");
    const [birthweight2, setBrithWeight2] = useState("");
    const [facility, setFacility] = useState("");
    const [remark, setRemark] = useState("");
    const [tablet1, setTablet1] = useState("");
    const [tablet2, setTablet2] = useState("");
    const [tablet3, setTablet3] = useState("");
    const [remark1, setRemark1] = useState("");
    const [dateReg, setDateReg] = useState(new Date());
    const [edc, setEdc] = useState(new Date());
    const [firstTri, setFirstTri] = useState(new Date());
    const [secondTri, setSecondTri] = useState(new Date());
    const [thirdTri, setThirdTri] = useState(new Date());
    const [calDate1, setCalDate1] = useState(new Date());
    const [calDate2, setCalDate2] = useState(new Date());
    const [calDate3, setCalDate3] = useState(new Date());
    const [td1, setTd1] = useState(new Date());
    const [td2, setTd2] = useState(new Date());
    const [td3, setTd3] = useState(new Date());
    const [td4, setTd4] = useState(new Date());
    const [td5, setTd5] = useState(new Date());
    const [supp1, setSupp1] = useState(new Date());
    const [supp2, setSupp2] = useState(new Date());
    const [supp3, setSupp3] = useState(new Date());
    const [supp4, setSupp4] = useState(new Date());
    const [iodine, setIodine] =useState(new Date());
    const [deworm, setDeworm] = useState(new Date());
    const [syphilis, setSyphilis] = useState(new Date());
    const [hepa, setHepa] = useState(new Date());
    const [hiv, setHiv] = useState(new Date());
    const [diabetes, setDiabetes] = useState(new Date());
    const [blood, setBlood] = useState(new Date());
    const [terminate, setTerminate] = useState(new Date());
    const [dateDeliver, setDateDeliver] = useState(new Date());
    const [hourDeliver, setHourDeliver] = useState(new Date());
    const [dayDeliver, setDayDeliver] = useState(new Date());
    const [supplement1, setSupplement1] = useState(new Date());
    const [supplement2, setSupplement2] = useState(new Date());
    const [supplement3, setSupplement3] = useState(new Date());
    const [supplement4, setSupplement4] = useState(new Date());

    const documentId = JSON.parse(JSON.stringify(works.id))
    const usersCollectionRef = doc(db, 'client', documentId);

    const createUser = async () => {
        await updateDoc(usersCollectionRef,
            { 
            registration: dateReg,
            serial: serialNum, 
            firstname: first, 
            middlename: middle,
            lastname: last,
            address: address,
            econstatus: econStatus,
            age1: age1,
            age2: age2,
            age3: age3,
            lmp1: lmp1,
            lmp2: lmp2,
            vist1: vist1,
            vist2: vist2,
            vist3: vist3,
            vist4: vist4,
            carbVist1: carbVist1,
            carbVist2: carbVist2,
            carbVist3: carbVist3,
            nutriAsses1: nutriAsses1,
            nutriAsses2: nutriAsses2,
            nutriAsses3: nutriAsses3,
            birthweight1: birthweight1,
            birthweight2: birthweight2,
            facility: facility,
            remark: remark,
            tablet1: tablet1,
            tablet2: tablet2,
            tablet3: tablet3,
            remark1: remark1,
            EDC: edc,
            PrenatalFirst: firstTri,
            PrenatalSecond: secondTri,
            PrenatalThird: thirdTri,
            TD1: td1,
            TD2: td2,
            TD3: td3,
            TD4: td4,
            TD5: td5,
            Calcium1: calDate1,
            Calcium2: calDate2,
            Calcium3: calDate3,
            Supplement1: supp1,
            Supplement2: supp2,
            Supplement3: supp3,
            Supplement4: supp4,
            iodine: iodine,
            deworm: deworm,
            syphilis: syphilis,
            hepatitis: hepa,
            HIV: hiv,
            diabetes: diabetes,
            blood: blood,
            terminate: terminate,
            dateDeliver: dateDeliver,
            hourDeliver: hourDeliver,
            dayDeliver: dayDeliver,
            MicroSupplement1: supplement1,
            MicroSupplement2: supplement2,
            MicroSupplement3: supplement3,
            MicroSupplement4: supplement4,
            
        });
      };





    return (
        <Box boxShadow={'lg'} p={8}>
            <VStack spacing={3} alignItems="flex-start">
                <FormControl>
                    <SimpleGrid columns={12} gap={3}>
                        <GridItem colSpan={12}>
                            {/* Figure 6 */}
                            <SimpleGrid columns={12} gap={3}>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Date of Registration
                                    </FormLabel>
                                    <DatePicker selected={dateReg} onChange={(date) => setDateReg(date)} />
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Family Serial No.
                                    </FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setSerialNum(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        First Name
                                    </FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setFirst(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        Middle Name
                                    </FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setMiddle(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        Last Name
                                    </FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setLast(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Address
                                    </FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setAddress(event.target.value);
                                    }}/>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Socio-Economic Status
                                    </FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setStatus(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <FormLabel>
                                Age
                            </FormLabel>
                            <HStack>
                                <Input type="text" placeholder="10-14 y/o" 
                                    onChange={(event) => {
                                    setAge1(event.target.value);
                                    }}/>
                                <Input type="text" placeholder="15-19 y/o" 
                                    onChange={(event) => {
                                    setAge2(event.target.value);
                                    }}/>
                                <Input type="text" placeholder="20-49 y/o" 
                                    onChange={(event) => {
                                    setAge3(event.target.value);
                                    }}/>
                            </HStack>
                            <FormHelperText>
                                Input on the proper category
                            </FormHelperText>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormLabel>
                                LMP
                            </FormLabel>
                            <VStack>
                                <Input type="text" placeholder="LMP" 
                                    onChange={(event) => {
                                    setLmp1(event.target.value);
                                    }}/>
                                <Input type="text" placeholder="G-P" 
                                    onChange={(event) => {
                                    setLmp2(event.target.value);
                                    }}/>
                            </VStack>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormLabel>
                                EDC
                            </FormLabel>
                            <DatePicker selected={edc} onChange={(date) => setEdc(date)} />
                        </GridItem>
                        <GridItem colSpan={12}>
                            <Text align="center" fontSize="2xl">
                                Dates of Pre-natal Check-ups
                            </Text>
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel>
                                1st Tri
                            </FormLabel>
                            <DatePicker selected={firstTri} onChange={(date) => setFirstTri(date)} />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel>
                                2nd Tri
                            </FormLabel>
                            <DatePicker selected={secondTri} onChange={(date) => setSecondTri(date)} />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel>
                                3rd Tri
                            </FormLabel>
                            <DatePicker selected={thirdTri} onChange={(date) => setThirdTri(date)} />
                        </GridItem>
                        {/* Figure 7 */}
                        {/* Immunization Status */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Immunization Status
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <VStack spacing={3} align='stretch'>
                                <Text fontSize="xl">
                                    Date Tetanus diptheria(Td) or Tetanus Toxoid (TT) given
                                </Text>
                                <SimpleGrid columns={10} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td1/TT1
                                        </FormLabel>
                                        <DatePicker selected={td1} onChange={(date) => setTd1(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td2/TT2
                                        </FormLabel>
                                        <DatePicker selected={td2} onChange={(date) => setTd2(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td3/TT3
                                        </FormLabel>
                                        <DatePicker selected={td3} onChange={(date) => setTd3(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td4/TT4
                                        </FormLabel>
                                        <DatePicker selected={td4} onChange={(date) => setTd4(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td5/TT5
                                        </FormLabel>
                                        <DatePicker selected={td5} onChange={(date) => setTd5(date)} />
                                    </GridItem>
                                </SimpleGrid>
                                <HStack>
                                    <FormLabel>
                                        FIM Status
                                    </FormLabel>
                                    <RadioGroup onChange={setFim} value={fim}>
                                        <HStack>
                                            <Radio value='check'>✓</Radio>
                                            <Radio value='x'>X</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </HStack>
                            </VStack>
                        </GridItem>
                        {/* Micronutrient Supplementation */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Micronutrient Supplementation
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            {/* Iron sulfate with Folic Acid */}
                            <VStack spacing={3} align='stretch'>
                                <Text fontSize="xl">
                                    Iron sulfate with Folic Acid
                                </Text>
                                <SimpleGrid columns={8} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            1st visit (1st tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setVist1(event.target.value);
                                    }}/>
                                        <DatePicker selected={supp1} onChange={(date) => setSupp1(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            2nd visit (2nd tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setVist2(event.target.value);
                                    }}/>
                                        <DatePicker selected={supp2} onChange={(date) => setSupp2(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            3rd visit (3rd tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setVist3(event.target.value);
                                    }}/>
                                        <DatePicker selected={supp3} onChange={(date) => setSupp3(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            4th visit (3rd tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setVist4(event.target.value);
                                    }}/>
                                        <DatePicker selected={supp4} onChange={(date) => setSupp4(date)} />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Date and Number of tablets given</FormHelperText>
                                {/* Calcium Carbonate */}
                                <Text fontSize="xl">
                                    Calcium Carbonate
                                </Text>
                                <SimpleGrid columns={6} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            2nd visit (2nd tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setCarbVist1(event.target.value);
                                    }}/>
                                       <DatePicker selected={calDate1} onChange={(date) => setCalDate1(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            3rd visit (3rd tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setCarbVist2(event.target.value);
                                    }}/>
                                        <DatePicker selected={calDate2} onChange={(date) => setCalDate2(date)} />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            4th visit (3rd tri)
                                        </FormLabel>
                                        <Input type="text" placeholder="#" 
                                    onChange={(event) => {
                                    setCarbVist3(event.target.value);
                                    }}/>
                                        <DatePicker selected={calDate3} onChange={(date) => setCalDate3(date)} />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Date and Number of tablets given</FormHelperText>
                                {/* Iodine Capsules */}
                                <Text fontSize="xl">
                                    Iodine Capsules
                                </Text>
                                <SimpleGrid columns={6}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            1st visit
                                        </FormLabel>
                                        <DatePicker selected={iodine} onChange={(date) => setIodine(date)} />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Data 2 capsules given</FormHelperText>
                            </VStack>
                        </GridItem>
                        {/* Nutritional Assessment */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Nutritional Assessment
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <VStack spacing={3} align='stretch'>
                                <SimpleGrid columns={6} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Low
                                        </FormLabel>
                                        <Input type="text" placeholder="< 18.5" 
                                    onChange={(event) => {
                                    setNutriAsses1(event.target.value);
                                    }}/>
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Normal
                                        </FormLabel>
                                        <Input type="text" placeholder="18.5 - 22.9" 
                                    onChange={(event) => {
                                    setNutriAsses2(event.target.value);
                                    }}/>
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            High
                                        </FormLabel>
                                        <Input type="text" placeholder="≥ 23" 
                                    onChange={(event) => {
                                    setNutriAsses3(event.target.value);
                                    }}/>
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Wrtie the BMI for 1st Tri</FormHelperText>
                            </VStack>
                        </GridItem>
                        {/* Deworming Tablet */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Deworming Tablet
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <VStack spacing={3} align='stretch'>
                                <SimpleGrid columns={6} gap={2}>
                                    <GridItem colSpan={2}>
                                    <DatePicker selected={deworm} onChange={(date) => setDeworm(date)} />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Date Given, 2nd or 3rd Tri</FormHelperText>
                            </VStack>
                        </GridItem>
                        {/* Infectious Disease Surveillance */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Infectious Disease Surveillance
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Syphilis Screening */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="xl">
                                        Syphilis Screening
                                    </Text>
                                    <FormHelperText>RPR or RDT Result</FormHelperText>
                                    <DatePicker selected={syphilis} onChange={(date) => setSyphilis(date)} />
                                    <RadioGroup onChange={setSyphilisScreening} value={syphilisScreening}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Hepatitis B Screening */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="xl">
                                        Hepatitis B Screening
                                    </Text>
                                    <FormHelperText>Result HBsAg Test</FormHelperText>
                                    <DatePicker selected={hepa} onChange={(date) => setHepa(date)} />
                                    <RadioGroup onChange={setHepatitisBScreening} value={hepatitisBScreening}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* HIV Screening */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="xl">
                                        HIV Screening
                                    </Text>
                                    <FormHelperText>Date screened</FormHelperText>
                                    <DatePicker selected={hiv} onChange={(date) => setHiv(date)} />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Laboratory Screening */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Laboratory Screening
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Gestational Diabetes */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Gestational Diabetes
                                    </Text>
                                    <FormLabel>Date Screened</FormLabel>
                                    <DatePicker selected={diabetes} onChange={(date) => setDiabetes(date)} />
                                    <RadioGroup onChange={setGestationalDiabetes} value={gestationalDiabetes}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Hepatitis B Screening */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        CBC/Hgb {`&`} Hct Count
                                    </Text>
                                    <FormLabel>Date Screened</FormLabel>
                                    <DatePicker selected={blood} onChange={(date) => setBlood(date)} />
                                    <RadioGroup onChange={setCbc} value={cbc}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    <FormLabel>
                                        Given Iron
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Pregnancy Outcome */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Pregnancy Outcome
                            </Text>
                            <FormHelperText>Obtain data from the health facility record and LCR and reconcile to avoid double reporting</FormHelperText>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Date Terminated */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Date Terminated
                                    </Text>
                                    <DatePicker selected={terminate} onChange={(date) => setTerminate(date)} />
                                </GridItem>
                                {/* Outcome */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Outcome
                                    </Text>
                                    <RadioGroup onChange={setOutcome} value={outcome}>
                                        <HStack>
                                            <Radio value='full term'>Full Term</Radio>
                                            <Radio value='pre term'>Pre Term</Radio>
                                            <Radio value='fatal death'>Fatal Death</Radio>
                                            <Radio value='abortion/miscarriage'>Abortion/Miscarriage</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    <FormLabel>Sex</FormLabel>
                                    <RadioGroup onChange={setSex} value={sex}>
                                        <HStack>
                                            <Radio value='m'>M</Radio>
                                            <Radio value='f'>F</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Type of Delivery */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Type of Delivery
                                    </Text>
                                    <RadioGroup onChange={setDelivery} value={delivery}>
                                        <HStack>
                                            <Radio value='cd'>Caesarian Section</Radio>
                                            <Radio value='vd'>Vaginal Delivery</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Birth Weight */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Birth Weight
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Low */}
                                <GridItem colSpan={4}>
                                    <FormLabel>Low</FormLabel>
                                    <InputGroup>
                                        <Input type="text" 
                                    onChange={(event) => {
                                    setBrithWeight1(event.target.value);
                                    }}/>
                                        <InputRightAddon children='g' />
                                    </InputGroup>
                                    <FormHelperText>{`<`} 2,500 grams</FormHelperText>
                                </GridItem>
                                {/* Normal */}
                                <GridItem colSpan={4}>
                                    <FormLabel>Low</FormLabel>
                                    <InputGroup>
                                        <Input type="text"
                                    onChange={(event) => {
                                    setBrithWeight2(event.target.value);
                                    }} />
                                        <InputRightAddon children='g' />
                                    </InputGroup>
                                    <FormHelperText>{`≥`} 2,500 grams</FormHelperText>
                                </GridItem>
                                {/* Unknown */}
                                <GridItem colSpan={4}>
                                    <FormLabel>Unknown</FormLabel>
                                    <Checkbox size='lg'></Checkbox>
                                    <FormHelperText>Place a check if unknown</FormHelperText>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Place of Delivery */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Place of Delivery
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Health Facility */}
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Health Facility
                                    </Text>
                                    <FormLabel>Type</FormLabel>
                                    <RadioGroup onChange={setType} value={type}>
                                        <HStack>
                                            <Radio value='bhs'>BHS</Radio>
                                            <Radio value='rhu/mhc'>RHU/MHC</Radio>
                                            <Radio value='lying-in'>Lying-in</Radio>
                                            <Radio value='hospital'>Hospital</Radio>
                                            <Radio value='birthing homes'>Birthing Homes</Radio>
                                            <Radio value='doh-licensed ambulance'>DOH-Licensed Ambulance</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Outcome */}
                                <GridItem colSpan={6}>
                                    <FormLabel>BEmONC/CEmONC capable</FormLabel>
                                    <Checkbox size='lg'></Checkbox>
                                </GridItem>
                                {/* Ownership */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Ownership</FormLabel>
                                    <RadioGroup onChange={setOwnership} value={ownership}>
                                        <HStack>
                                            <Radio value='public'>Public</Radio>
                                            <Radio value='private'>Private</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Non-Health Facility */}
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Non-Health Facility
                                    </Text>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setFacility(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Birth Attendant */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Birth Attendant</FormLabel>
                                    <RadioGroup onChange={setBirthAttendant} value={birthAttendant}>
                                        <HStack>
                                            <Radio value='md'>Doctor</Radio>
                                            <Radio value='rn'>Nurse</Radio>
                                            <Radio value='mw'>Midwife</Radio>
                                            <Radio value='h'>Hilot/TBA</Radio>
                                            <Radio value='o'>Others</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Remarks */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Remarks</FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setRemark(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Date and Time of Delivery */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Date and Time of Delivery
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Date */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Date</FormLabel>
                                    <DatePicker selected={dateDeliver} onChange={(date) => setDateDeliver(date)} />
                                </GridItem>
                                {/* Time */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Time</FormLabel>
                                    <Input type="time" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Date of Mothers with their Newborns' Post-Partum Check-ups */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Date of Mothers with their Newborns' Post-Partum Check-ups
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Within 24 hours after delivery */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Within 24 hours after delivery</FormLabel>
                                    <DatePicker selected={hourDeliver} onChange={(date) => setHourDeliver(date)} />
                                </GridItem>
                                {/* Within 7 days after delivery */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Within 7 days after delivery</FormLabel>
                                    <DatePicker selected={dayDeliver} onChange={(date) => setDayDeliver(date)} />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Micronutrient Supplementation */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Micronutrient Supplementation
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>

                            <SimpleGrid columns={12} gap={2}>
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Iron with Folic Acid
                                    </Text>
                                </GridItem>
                                {/* 1st month postpartum */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="md" align="center">1st month postpartum</Text>
                                    <FormLabel>No. of Tablets</FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setTablet1(event.target.value);
                                    }}/>
                                    <FormLabel>Date Given</FormLabel>
                                    <DatePicker selected={supplement1} onChange={(date) => setSupplement1(date)} />
                                </GridItem>
                                {/* 2nd month postpartum */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="md" align="center">2nd month postpartum</Text>
                                    <FormLabel>No. of Tablets</FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setTablet2(event.target.value);
                                    }}/>
                                    <FormLabel>Date Given</FormLabel>
                                    <DatePicker selected={supplement2} onChange={(date) => setSupplement2(date)} />
                                </GridItem>
                                {/* 3rd month postpartum */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="md" align="center">3rd month postpartum</Text>
                                    <FormLabel>No. of Tablets</FormLabel>
                                    <Input type="text" 
                                    onChange={(event) => {
                                    setTablet3(event.target.value);
                                    }}/>
                                    <FormLabel>Date Given</FormLabel>
                                    <DatePicker selected={supplement3} onChange={(date) => setSupplement3(date)} />
                                </GridItem>
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Vitamin A
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={6}>

                                    <FormLabel>
                                        Date Given
                                    </FormLabel>
                                    <DatePicker selected={supplement4} onChange={(date) => setSupplement4(date)} />
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Remarks
                                    </FormLabel>
                                    <Input type="type" 
                                    onChange={(event) => {
                                    setRemark1(event.target.value);
                                    }}/>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Submit */}
                        <GridItem colSpan={12}>
                            <Button colorScheme="green" w='full' onClick={createUser}>
                                Submit
                            </Button>
                        </GridItem>
                    </SimpleGrid>
                </FormControl>
            </VStack>
        </Box>
    )
}
