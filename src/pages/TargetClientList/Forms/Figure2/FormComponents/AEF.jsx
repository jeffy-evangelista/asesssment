import {
    FormControl,
    FormLabel,
    Input,
    GridItem,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    InputLeftAddon,
    InputGroup,
    VStack
} from '@chakra-ui/react'
import {useState} from "react";



export default function Aef() {
    const [new1stMonthDate, set1stMonthDate] = useState("");
    const [new1stFundic, set1stFundic] = useState("");
    const [new1stFetalHeartTones, set1stFetalHeartTones] = useState("");
    const [new1stAOG, set1stAOG] = useState("");
    const [new1stLeopold, set1stLeopold] = useState("");
    const [new1stL1, set1stL1] = useState("");
    const [new1stL2, set1stL2] = useState("");
    const [new1stL3, set1stL3] = useState("");
    const [new1stL4, set1stL4] = useState("");

    const [new1stUterinActivity, set1stUterinActivity] = useState("");
    const [new2ndMonthDate, set2ndMonthDate] = useState("");
    const [new2ndFundic, set2ndFundic] = useState("");
    const [new2ndFetalHeartTones, set2ndFetalHeartTones] = useState("");
    const [new2ndAOG, set2ndAOG] = useState("");
    const [new2ndLeopold, set2ndLeopold] = useState("");
    const [new2ndL1, set2ndL1] = useState("");
    const [new2ndL2, set2ndL2] = useState("");
    const [new2ndL3, set2ndL3] = useState("");
    const [new2ndL4, set2ndL4] = useState("");
    const [new2ndUterinActivity, set2ndUterinActivity] = useState("");

    const [new3rdMonthDate, set3rdMonthDate] = useState("");
    const [new3rdFundic, set3rdFundic] = useState("");
    const [new3rdFetalHeartTones, set3rdFetalHeartTones] = useState("");
    const [new3rdAOG, set3rdAOG] = useState("");
    const [new3rdLeopold, set3rdLeopold] = useState("");
    const [new3rdL1, set3rdL1] = useState("");
    const [new3rdL2, set3rdL2] = useState("");
    const [new3rdL3, set3rdL3] = useState("");
    const [new3rdL4, set3rdL4] = useState("");
    const [new3rdUterinActivity, set3rdUterinActivity] = useState("");

    const [new4thMonthDate, set4thMonthDate] = useState("");
    const [new4thFundic, set4thFundic] = useState("");
    const [new4thFetalHeartTones, set4thFetalHeartTones] = useState("");
    const [new4thAOG, set4thAOG] = useState("");
    const [new4thLeopold, set4thLeopold] = useState("");
    const [new4thL1, set4thL1] = useState("");
    const [new4thL2, set4thL2] = useState("");
    const [new4thL3, set4thL3] = useState("");
    const [new4thL4, set4thL4] = useState("");
    const [new4thUterinActivity, set4thUterinActivity] = useState("");

    const [new5thMonthDate, set5thMonthDate] = useState("");
    const [new5thFundic, set5thFundic] = useState("");
    const [new5thFetalHeartTones, set5thFetalHeartTones] = useState("");
    const [new5thAOG, set5thAOG] = useState("");
    const [new5thLeopold, set5thLeopold] = useState("");
    const [new5thL1, set5thL1] = useState("");
    const [new5thL2, set5thL2] = useState("");
    const [new5thL3, set5thL3] = useState("");
    const [new5thL4, set5thL4] = useState("");
    const [new5thUterinActivity, set5thUterinActivity] = useState("");

    const [new6thMonthDate, set6thMonthDate] = useState("");
    const [new6thFundic, set6thFundic] = useState("");
    const [new6thFetalHeartTones, set6thFetalHeartTones] = useState("");
    const [new6thAOG, set6thAOG] = useState("");
    const [new6thLeopold, set6thLeopold] = useState("");
    const [new6thL1, set6thL1] = useState("");
    const [new6thL2, set6thL2] = useState("");
    const [new6thL3, set6thL3] = useState("");
    const [new6thL4, set6thL4] = useState("");
    const [new6thUterinActivity, set6thUterinActivity] = useState("");

    const [new7thMonthDate, set7thMonthDate] = useState("");
    const [new7thFundic, set7thFundic] = useState("");
    const [new7thFetalHeartTones, set7thFetalHeartTones] = useState("");
    const [new7thAOG, set7thAOG] = useState("");
    const [new7thLeopold, set7thLeopold] = useState("");
    const [new7thL1, set7thL1] = useState("");
    const [new7thL2, set7thL2] = useState("");
    const [new7thL3, set7thL3] = useState("");
    const [new7thL4, set7thL4] = useState("");
    const [new7thUterinActivity, set7thUterinActivity] = useState("");

    const [new8thMonthDate, set8thMonthDate] = useState("");
    const [new8thFundic, set8thFundic] = useState("");
    const [new8thFetalHeartTones, set8thFetalHeartTones] = useState("");
    const [new8thAOG, set8thAOG] = useState("");
    const [new8thLeopold, set8thLeopold] = useState("");
    const [new8thL1, set8thL1] = useState("");
    const [new8thL2, set8thL2] = useState("");
    const [new8thL3, set8thL3] = useState("");
    const [new8thL4, set8thL4] = useState("");
    const [new8thUterinActivity, set8thUterinActivity] = useState("");

    const [new9thMonthDate, set9thMonthDate] = useState("");
    const [new9thFundic, set9thFundic] = useState("");
    const [new9thFetalHeartTones, set9thFetalHeartTones] = useState("");
    const [new9thAOG, set9thAOG] = useState("");
    const [new9thLeopold, set9thLeopold] = useState("");
    const [new9thL1, set9thL1] = useState("");
    const [new9thL2, set9thL2] = useState("");
    const [new9thL3, set9thL3] = useState("");
    const [new9thL4, set9thL4] = useState("");
    const [new9thUterinActivity, set9thUterinActivity] = useState("");

    const [newRemMonthDate, setRemMonthDate] = useState("");
    const [newRemFundic, setRemFundic] = useState("");
    const [newRemFetalHeartTones, setRemFetalHeartTones] = useState("");
    const [newRemAOG, setRemAOG] = useState("");
    const [newRemLeopold, setRemLeopold] = useState("");
    const [newRemL1, setRemL1] = useState("");
    const [newRemL2, setRemL2] = useState("");
    const [newRemL3, setRemL3] = useState("");
    const [newRemL4, setRemL4] = useState("");
    const [newRemUterinActivity, setRemUterinActivity] = useState("");


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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
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
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </VStack>
            </GridItem>
            <GridItem colSpan={12}>
                <VStack>
                    <Text align="center" fontSize="xl">Remarks</Text>
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Input type="date" />
                    </FormControl>
                    {/* Fundic Height (cm) */}
                    <FormControl>
                        <FormLabel>Fundic Height (cm)</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Fetal Heart Tones */}
                    <FormControl>
                        <FormLabel>Fetal Heart Tones</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* AOG */}
                    <FormControl>
                        <FormLabel>AOG</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Leopold's */}
                    <FormControl>
                        <FormLabel>Leopold's</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L1 */}
                    <FormControl>
                        <FormLabel>L1</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L2 */}
                    <FormControl>
                        <FormLabel>L2</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L3 */}
                    <FormControl>
                        <FormLabel>L3</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* L4 */}
                    <FormControl>
                        <FormLabel>L4</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    {/* Uterine Acitivity */}
                    <FormControl>
                        <FormLabel>Uterine Acitivity</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </VStack>
            </GridItem>
        </>
    )
}
