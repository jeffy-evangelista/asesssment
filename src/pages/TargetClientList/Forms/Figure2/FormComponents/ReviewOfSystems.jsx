import {
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    GridItem,
    Text,
    Stack,
    Checkbox,
    Flex,
    Spacer
} from '@chakra-ui/react'

export default function ReviewOfSystems() {

    return (
        <>
            {/* Review of Systems */}
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Review of Systems</Text>
            </GridItem>
            {/* Heent */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Heent</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Epilepsy/Convulsion/Seizure</Checkbox>
                        <Checkbox>Severe headache/dizziness</Checkbox>
                        <Checkbox>Visual disturbance/blurring of vision</Checkbox>
                        <Checkbox>Yellowish conjuctiva</Checkbox>
                        <Checkbox>Enlarged thyroid</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Chest/Heart */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Chest/Heart</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Epilepsy/Convulsion/Seizure</Checkbox>
                        <Checkbox>Severe headache/dizziness</Checkbox>
                        <Checkbox>Visual disturbance/blurring of vision</Checkbox>
                        <Checkbox>Yellowish conjuctiva</Checkbox>
                        <Checkbox>Enlarged thyroid</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Abdomen */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Abdomen</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Mass in the abdomen</Checkbox>
                        <Checkbox>History of gallbladder disease</Checkbox>
                        <Checkbox>History of liver disease</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Genital */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Genital</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Vaginal discharge</Checkbox>
                        <Checkbox>Intermenstrual bleeding</Checkbox>
                        <Checkbox>Postcoital bleeding</Checkbox>
                        <Checkbox>Mass in the uterus</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Extremities */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Extremities</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Severe varicosities</Checkbox>
                        <Checkbox>Sweling or severe pain the legs not related to injuries</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Skin */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Skin</FormLabel>
                    <Stack spacing={1}>
                        <Checkbox>Yellowish skin</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Family History */}
            <GridItem colSpan={5}>
                <FormControl>
                    <Text fontSize="2xl">Family History</Text>
                    <Stack spacing={1}>
                        <Checkbox>CVA (strokes)</Checkbox>
                        <Checkbox>Hypertension</Checkbox>
                        <Checkbox>Asthma</Checkbox>
                        <Checkbox>Diabetes</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Past Health History */}
            <GridItem colSpan={7}>
                <FormControl>
                    <Text fontSize="2xl">Past Health History</Text>
                    <Stack spacing={1}>
                        <Checkbox>Allergies</Checkbox>
                        <Checkbox>Drug intake (anti-tuberculosis, anti-diabetic, anticonvulsant)</Checkbox>
                        <Checkbox>Bleeding tendencies (nose, gums, etc.)</Checkbox>
                        <Checkbox>Anemia</Checkbox>
                        <Checkbox>Diabetes</Checkbox>
                        <Checkbox>Itching or sores in or around vagina</Checkbox>
                        <Checkbox>Pain or burning sensation on urination</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Social History */}
            <GridItem colSpan={12}>
                <FormControl>
                    <Text fontSize="2xl">Social History</Text>
                    <Stack spacing={1}>
                        <Flex>
                            <Checkbox>Smoking</Checkbox>
                            <Input type="text" placeholder="sticks per day" />
                        </Flex>
                        <Flex>
                            <Checkbox>Alcohoilc beverage</Checkbox>
                            <Input type="text" placeholder="Amt. per day" />
                        </Flex>
                        <Checkbox>Obesity</Checkbox>
                        <Checkbox>History of domestic violence(VAW)</Checkbox>
                        <Checkbox>History of psychological or mood discturbances</Checkbox>
                        <Checkbox>Unpleasant relationship with partner</Checkbox>
                        <Checkbox>Treated for STIs in the past </Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Obsterical History */}
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Obsterical History</Text>
            </GridItem>
            <GridItem colSpan={6}>
                <FormControl>
                    <Stack spacing={1}>
                        <Checkbox>Number of pregrnancies:</Checkbox>
                        <SimpleGrid columns={12}>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Full Term" />
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Premature" />
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Abortions" />
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Input type="text" placeholder="Living Children" />
                            </GridItem>
                        </SimpleGrid>
                        <Checkbox>History of giving birth to preterm of LBW infants</Checkbox>
                        <Checkbox>History of ectopic pregnancy Hydatidiform mole(within the last 12 months)</Checkbox>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* History of Previous Deliveries */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>History of Previous Deliveries</FormLabel>
                    <Stack spacing={1}>
                        <Flex>
                            <Checkbox>Date of last delivery</Checkbox>
                            <Input type="date" />
                        </Flex>
                        <Flex>
                            <Checkbox>Type of last delivery</Checkbox>
                            <Input type="text" />
                        </Flex>
                        <Flex>
                            <Checkbox>Birth Attendant in last delivery</Checkbox>
                            <Input type="text" />
                        </Flex>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Menstrual History */}
            <GridItem colSpan={12}>
                <FormControl>
                    <FormLabel>Menstrual History</FormLabel>
                    <Stack spacing={1}>
                        <Flex>
                            <Checkbox>Last menstrual period</Checkbox>
                            <Input type="date" />
                        </Flex>
                        <Flex>
                            <Checkbox>Past menstrual period</Checkbox>
                            <Input type="text" />
                        </Flex>
                        <Flex>
                            <Checkbox>Duration of Menstrual bleeding</Checkbox>
                            <Spacer />
                            <Input type="text" />
                        </Flex>
                        <Flex>
                            <Checkbox>Character of Menstrual bleeding</Checkbox>
                            <Input type="number" placeholder="no. of pads" />
                        </Flex>
                    </Stack>
                </FormControl>
            </GridItem>
            {/* Family Planning History */}
            <GridItem colSpan={12}>
                <Text fontSize="2xl">Family Planning History</Text>
                <FormControl>
                    <FormLabel>Previously Used Method:</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
        </>
    )
}
