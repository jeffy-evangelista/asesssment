import {
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
    SimpleGrid,
    GridItem,
    Button,
    RadioGroup,
    HStack,
    CheckboxGroup,
    Checkbox,
    Radio,
    Text,
    FormHelperText,
    Divider,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    Flex,
    Spacer,
    InputLeftAddon,
    InputGroup

} from '@chakra-ui/react'
import React, { useState } from 'react'
import Serial from './Serial'
import Review from './Review'


export default function Figure2() {
    const [outCome, setOutCome] = useState("");
    const [attendant, setAttendant] = useState("");
    const [sex, setSex] = useState("");
    const [tod, setTod] = useState("");
    const [pod, setPod] = useState("");
    const [step1, setStep1] = useState("");
    const [step2, setStep2] = useState("");
    const [step3, setStep3] = useState("");
    const [tap, setTap] = useState("");
    const [sutured, setSutured] = useState("");
    const [enc1, setEnc1] = useState("");
    const [enc2, setEnc2] = useState("");
    const [enc3, setEnc3] = useState("");
    const [enc4, setEnc4] = useState("");
    const [enc5, setEnc5] = useState("");

    return (
        <Box boxShadow={'lg'} p={8}>
            <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={12} columnGap={3} rowGap="6" w="full">
                    <GridItem colSpan={12}>
                        <Text fontSize="4xl" textAlign="center" color="teal">Family Serial NO.</Text>
                    </GridItem>
                    <Serial />
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Medical History</Text>
                    </GridItem>
                    <Review/>

                </SimpleGrid>
            </VStack>
        </Box>

    )
}
