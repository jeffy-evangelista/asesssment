import {
    FormControl,
    FormLabel,
    Input,
    GridItem,
    Text,
    VStack
} from '@chakra-ui/react'
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    collection,
    addDoc,
  } from "firebase/firestore"
  import { db } from '../../../../../utils/init-firebase'



export default function Aef() {
    const [new1stMonthDate, set1stMonthDate] = useState(new Date());
    const [new1stFundic, set1stFundic] = useState("");
    const [new1stFetalHeartTones, set1stFetalHeartTones] = useState("");
    const [new1stAOG, set1stAOG] = useState("");
    const [new1stLeopold, set1stLeopold] = useState("");
    const [new1stL1, set1stL1] = useState("");
    const [new1stL2, set1stL2] = useState("");
    const [new1stL3, set1stL3] = useState("");
    const [new1stL4, set1stL4] = useState("");

    const [new1stUterinActivity, set1stUterinActivity] = useState("");
    const [new2ndMonthDate, set2ndMonthDate] = useState(new Date());
    const [new2ndFundic, set2ndFundic] = useState("");
    const [new2ndFetalHeartTones, set2ndFetalHeartTones] = useState("");
    const [new2ndAOG, set2ndAOG] = useState("");
    const [new2ndLeopold, set2ndLeopold] = useState("");
    const [new2ndL1, set2ndL1] = useState("");
    const [new2ndL2, set2ndL2] = useState("");
    const [new2ndL3, set2ndL3] = useState("");
    const [new2ndL4, set2ndL4] = useState("");
    const [new2ndUterinActivity, set2ndUterinActivity] = useState("");

    const [new3rdMonthDate, set3rdMonthDate] = useState(new Date);
    const [new3rdFundic, set3rdFundic] = useState("");
    const [new3rdFetalHeartTones, set3rdFetalHeartTones] = useState("");
    const [new3rdAOG, set3rdAOG] = useState("");
    const [new3rdLeopold, set3rdLeopold] = useState("");
    const [new3rdL1, set3rdL1] = useState("");
    const [new3rdL2, set3rdL2] = useState("");
    const [new3rdL3, set3rdL3] = useState("");
    const [new3rdL4, set3rdL4] = useState("");
    const [new3rdUterinActivity, set3rdUterinActivity] = useState("");

    const [new4thMonthDate, set4thMonthDate] = useState(new Date);
    const [new4thFundic, set4thFundic] = useState("");
    const [new4thFetalHeartTones, set4thFetalHeartTones] = useState("");
    const [new4thAOG, set4thAOG] = useState("");
    const [new4thLeopold, set4thLeopold] = useState("");
    const [new4thL1, set4thL1] = useState("");
    const [new4thL2, set4thL2] = useState("");
    const [new4thL3, set4thL3] = useState("");
    const [new4thL4, set4thL4] = useState("");
    const [new4thUterinActivity, set4thUterinActivity] = useState("");

    const [new5thMonthDate, set5thMonthDate] = useState(new Date);
    const [new5thFundic, set5thFundic] = useState("");
    const [new5thFetalHeartTones, set5thFetalHeartTones] = useState("");
    const [new5thAOG, set5thAOG] = useState("");
    const [new5thLeopold, set5thLeopold] = useState("");
    const [new5thL1, set5thL1] = useState("");
    const [new5thL2, set5thL2] = useState("");
    const [new5thL3, set5thL3] = useState("");
    const [new5thL4, set5thL4] = useState("");
    const [new5thUterinActivity, set5thUterinActivity] = useState("");

    const [new6thMonthDate, set6thMonthDate] = useState(new Date());
    const [new6thFundic, set6thFundic] = useState("");
    const [new6thFetalHeartTones, set6thFetalHeartTones] = useState("");
    const [new6thAOG, set6thAOG] = useState("");
    const [new6thLeopold, set6thLeopold] = useState("");
    const [new6thL1, set6thL1] = useState("");
    const [new6thL2, set6thL2] = useState("");
    const [new6thL3, set6thL3] = useState("");
    const [new6thL4, set6thL4] = useState("");
    const [new6thUterinActivity, set6thUterinActivity] = useState("");

    const [new7thMonthDate, set7thMonthDate] = useState(new Date());
    const [new7thFundic, set7thFundic] = useState("");
    const [new7thFetalHeartTones, set7thFetalHeartTones] = useState("");
    const [new7thAOG, set7thAOG] = useState("");
    const [new7thLeopold, set7thLeopold] = useState("");
    const [new7thL1, set7thL1] = useState("");
    const [new7thL2, set7thL2] = useState("");
    const [new7thL3, set7thL3] = useState("");
    const [new7thL4, set7thL4] = useState("");
    const [new7thUterinActivity, set7thUterinActivity] = useState("");

    const [new8thMonthDate, set8thMonthDate] = useState(new Date());
    const [new8thFundic, set8thFundic] = useState("");
    const [new8thFetalHeartTones, set8thFetalHeartTones] = useState("");
    const [new8thAOG, set8thAOG] = useState("");
    const [new8thLeopold, set8thLeopold] = useState("");
    const [new8thL1, set8thL1] = useState("");
    const [new8thL2, set8thL2] = useState("");
    const [new8thL3, set8thL3] = useState("");
    const [new8thL4, set8thL4] = useState("");
    const [new8thUterinActivity, set8thUterinActivity] = useState("");

    const [new9thMonthDate, set9thMonthDate] = useState(new Date());
    const [new9thFundic, set9thFundic] = useState("");
    const [new9thFetalHeartTones, set9thFetalHeartTones] = useState("");
    const [new9thAOG, set9thAOG] = useState("");
    const [new9thLeopold, set9thLeopold] = useState("");
    const [new9thL1, set9thL1] = useState("");
    const [new9thL2, set9thL2] = useState("");
    const [new9thL3, set9thL3] = useState("");
    const [new9thL4, set9thL4] = useState("");
    const [new9thUterinActivity, set9thUterinActivity] = useState("");

    const [newRemMonthDate, setRemMonthDate] = useState(new Date());
    const [newRemFundic, setRemFundic] = useState("");
    const [newRemFetalHeartTones, setRemFetalHeartTones] = useState("");
    const [newRemAOG, setRemAOG] = useState("");
    const [newRemLeopold, setRemLeopold] = useState("");
    const [newRemL1, setRemL1] = useState("");
    const [newRemL2, setRemL2] = useState("");
    const [newRemL3, setRemL3] = useState("");
    const [newRemL4, setRemL4] = useState("");
    const [newRemUterinActivity, setRemUterinActivity] = useState("");


    const usersCollectionRef = collection(db, "users");
    const createUser = async () => {
        await addDoc(usersCollectionRef, { 
            Date: new1stMonthDate, 
            Fundic: new1stFundic, 
            Heart: new1stFetalHeartTones,
            AOG: new1stAOG,
            Leopold: new1stLeopold,
            L1: new1stL1,
            L2: new1stL2,
            L3: new1stL3,
            L4: new1stL4,
            Uterine: new1stUterinActivity,
            Date2: new2ndMonthDate, 
            Fundic2: new2ndFundic, 
            Heart2: new2ndFetalHeartTones,
            AOG2: new2ndAOG,
            Leopold2: new2ndLeopold,
            twoL1: new2ndL1,
            twoL2: new2ndL2,
            twoL3: new2ndL3,
            twoL4: new2ndL4,
            twoUterine: new2ndUterinActivity,
            Date3: new3rdMonthDate, 
            thirdFundic: new3rdFundic, 
            thirdHeart: new3rdFetalHeartTones,
            thirdAOG: new3rdAOG,
            thirdLeopold: new3rdLeopold,
            thirdL1: new3rdL1,
            thirdL2: new3rdL2,
            thirdL3: new3rdL3,
            thirdL4: new3rdL4,
            thirdUterine: new3rdUterinActivity,
            Date4: new4thMonthDate, 
            forthFundic: new4thFundic, 
            forhHeart: new4thFetalHeartTones,
            forthAOG: new4thAOG,
            forthLeopold: new4thLeopold,
            forthL1: new4thL1,
            forthL2: new4thL2,
            forthL3: new4thL3,
            forthL4: new4thL4,
            forthUterine: new4thUterinActivity,
            Date5: new5thMonthDate, 
            fifthFundic: new5thFundic, 
            fifthHeart: new5thFetalHeartTones,
            fifthAOG: new5thAOG,
            fifthLeopold: new5thLeopold,
            fifthL1: new5thL1,
            fifthL2: new5thL2,
            fifthL3: new5thL3,
            fifthL4: new5thL4,
            fifthUterine: new5thUterinActivity,
            Date6: new6thMonthDate, 
            sixthFundic: new6thFundic, 
            sixthHeart: new6thFetalHeartTones,
            sixthAOG: new6thAOG,
            sixthLeopold: new6thLeopold,
            sixthL1: new6thL1,
            sixthL2: new6thL2,
            sixthL3: new6thL3,
            sixthL4: new6thL4,
            sixthUterine: new6thUterinActivity,
            Date7: new7thMonthDate, 
            seventhFundic: new7thFundic, 
            seventhHeart: new7thFetalHeartTones,
            seventhAOG: new7thAOG,
            seventhLeopold: new7thLeopold,
            seventhL1: new7thL1,
            seventhL2: new7thL2,
            seventhL3: new7thL3,
            seventhL4: new7thL4,
            seventhUterine: new7thUterinActivity,
            Date8: new8thMonthDate, 
            eightFundic: new8thFundic, 
            eightHeart: new8thFetalHeartTones,
            eightAOG: new8thAOG,
            eightLeopold: new8thLeopold,
            eightL1: new8thL1,
            eightL2: new8thL2,
            eightL3: new8thL3,
            eightL4: new8thL4,
            eightUterine: new8thUterinActivity,
            Date9: new9thMonthDate, 
            nineFundic: new9thFundic, 
            nineHeart: new9thFetalHeartTones,
            nineAOG: new9thAOG,
            nineLeopold: new9thLeopold,
            nineL1: new9thL1,
            nineL2: new9thL2,
            nineL3: new9thL3,
            nineL4: new9thL4,
            nienUterine: new9thUterinActivity,
            DateRemark: newRemMonthDate, 
            RemarkFundic: newRemFundic, 
            RemarkHeart: newRemFetalHeartTones,
            RemarkAOG: newRemAOG,
            RemarkLeopold: newRemLeopold,
            RemarkL1: newRemL1,
            RemarkL2: newRemL2,
            RemarkL3: newRemL3,
            RemarkL4: newRemL4,
            RemarkUterine: newRemUterinActivity,            
        });
      };


    return (
        <>
            {/* 1st Trimester */}
            <GridItem colSpan={12}>
                <Text align="center" fontSize="2xl">
                    1st Trimester
                </Text>
            </GridItem>
            {/* 1st month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        1st Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new1stMonthDate} onChange={(date) => set1stMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set1stUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 2nd month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        2nd Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new2ndMonthDate} onChange={(date) => set2ndMonthDate(date)} />
                    </FormControl>
                   {/* Fundic Height (cm) */}
                   <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 3rd month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        3rd Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new3rdMonthDate} onChange={(date) => set3rdMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set2ndL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set3rdUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 2nd Trimester */}
            <GridItem colSpan={12}>
                <Text align="center" fontSize="2xl">
                    2nd Trimester
                </Text>
            </GridItem>
            {/* 4th month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        4th Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new4thMonthDate} onChange={(date) => set4thMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set4thUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 5th month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        5th Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new5thMonthDate} onChange={(date) => set5thMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set5thUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 6th month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        6th Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new6thMonthDate} onChange={(date) => set6thMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set6thUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 3rd Trimester */}
            <GridItem colSpan={12}>
                <Text align="center" fontSize="2xl">
                    3rd Trimester
                </Text>
            </GridItem>
            {/* 7th month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        7th Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new7thMonthDate} onChange={(date) => set7thMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set7thUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 8th month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        8th Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new8thMonthDate} onChange={(date) => set8thMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set8thUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            {/* 9th month */}
            <GridItem colSpan={4}>
                <VStack>
                    <Text fontSize="xl">
                        9th Month
                    </Text>
                    {/* Date */}
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={new9thMonthDate} onChange={(date) => set9thMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        set9thUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            <GridItem colSpan={12}>
                <VStack>
                    <Text align="center" fontSize="xl">Remarks</Text>
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <DatePicker selected={newRemMonthDate} onChange={(date) => setRemMonthDate(date)} />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        setRemFundic(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" 
                        onChange={(event) => {
                        setRemFetalHeartTones(event.target.value);
                        }}/>
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemAOG(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemLeopold(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemL1(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemL2(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemL3(event.target.value);
                        }}/>
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemL4(event.target.value);
                        }}/>
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text"  
                        onChange={(event) => {
                        setRemUterinActivity(event.target.value);
                        }}/>
                    </FormControl>
                </VStack>
            </GridItem>
            <button onClick={createUser}> Submit</button>
        </>
    )
}
