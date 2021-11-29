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

export default function Figure5() {
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
          {/* Family Serial NO. */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Family Serial NO.</Text>
          </GridItem>
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Client:</Text>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Middle Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Birthday</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <NumberInput allowMouseWheel defaultValue={10} min={10} max={100}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl id="education">
              <FormLabel>Highest Education</FormLabel>
              <Select placeholder="Select">
                <option>Elementary</option>
                <option>High School</option>
                <option>College</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Occupation</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>No. Street</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Barangay</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Municipality</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Province</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Spouse:</Text>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Middle Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Birthday</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl id="education">
              <FormLabel>Highest Education</FormLabel>
              <Select placeholder="Select">
                <option>Elementary</option>
                <option>High School</option>
                <option>College</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Occupation</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <Text fontSize="2xl">Average Monthly Family</Text>
              <InputGroup>
                <InputLeftAddon children="₱"/>
                <NumberInput precision={2}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </InputGroup>
              
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Date of Visit</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Physical Examination</Text>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Date of Delivery</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          {/* Attendant */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Attendant</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setOutCome} value={outCome}>
                  <HStack spacing={10} >
                    <Radio value="Soctor">Doctor</Radio>
                    <Radio value="Nurse">Nurse</Radio>
                    <Radio value="Midwife">Midwife</Radio>
                    <Radio value="TBA/Hilot">TBA/Hilot</Radio>
                    <Radio value="Others">Others</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Outcome */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Outcome</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setAttendant} value={attendant}>
                  <HStack spacing={10} >
                    <Radio value="Livebirth">Livebirth</Radio>
                    <Radio value="Still Birth">Still Birth</Radio>
                    <Radio value="Miscarriage/Abortion">Miscarriage/Abortion</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Sex */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Sex</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setSex} value={sex}>
                  <HStack spacing={10} >
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Type of Delivery */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Type of Delivery</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setTod} value={tod}>
                  <HStack spacing={10} >
                    <Radio value="NSD">NSD</Radio>
                    <Radio value="CS">CS</Radio>
                    <Radio value="Others">Others</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <FormLabel>Place of Delivery</FormLabel>
              <RadioGroup colorScheme="teal" onChange={setPod} value={pod}>
                <HStack spacing={10} >
                  <Radio value="Home">Home</Radio>
                  <Radio value="Health Facility">Health Facility</Radio>
                  <Radio value="Government Hospital">Government Hospital</Radio>
                  <Radio value="Private Hospital">Private Hospital</Radio>
                  <Radio value="Private Clinic/Birthing">Private Clinic/Birthing</Radio>
                  <Radio value="Main Health Center">Main Health Center</Radio>
                  <Radio value="Others">Others</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <Text fontSize="2xl">AMTSL Steps:</Text>
          </GridItem>
          {/* 1. Oxytocin injected w/in 1 minute of deliver */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>1. Oxytocin injected w/in 1 minute of delivery</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setStep1} value={step1}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 2. Controlled cord traction/counter traction done */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>2. Controlled cord traction/counter traction done</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setStep2} value={step2}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 3. Utermine massage */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>3. Utermine massage</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setStep3} value={step3}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <Text fontSize="2xl">Therefore, AMTSL provided:</Text>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setTap} value={tap}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
              <FormHelperText>Check Yes if all the 3 steps were done</FormHelperText>
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          {/* Assessment of the post partum mother */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Assessment of the post partum mother</Text>
          </GridItem>
          {/* unconscious */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Unconscious</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Vaginal Bleeding No. of pads per day */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Vaginal Bleeding No. of pads per day</FormLabel>
                <Spacer />
                <Flex>
                  <Input type="Text" />
                  <Input type="Text" />
                  <Input type="Text" />
                </Flex>

              </Flex>
            </FormControl>
          </GridItem>
          {/* Severed Abdominal Pain */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Severed Abdominal Pain</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack align="center" spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Looks very ill */}
          <GridItem colSpan={12}>
            <FormControl as="fieldset">
              <Flex>
                <FormLabel as="legend">Looks very ill</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup></Flex>
            </FormControl>
          </GridItem>
          {/* Severe headache with visual disturbance */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Severe headache with visual disturbance</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Severe difficulties of breathing */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Severe difficulties of breathing</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Severe Vomiting */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Severe Vomiting</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Severe partum depression */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Severe partum depression</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Pelvic Exam Findings */}
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Pelvic Exam Findings</Text>
          </GridItem>
          {/* Uterus */}
          <GridItem colSpan={12}>
            <Text fontSize="xl">Uterus:</Text>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Contracted</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Relaxed</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Vaginal Bleeding */}
          <GridItem colSpan={12}>
            <Text fontSize="xl">Vaginal Bleeding:</Text>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Profuse</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Moderate</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Scanty</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Vaginal Discharge */}
          <GridItem colSpan={12}>
            <Text fontSize="xl">Vaginal Discharge:</Text>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Color (Whitish or Others)</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Odor (Foul or no odor)</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Vaginal Laceration */}
          <GridItem colSpan={12}>
            <Text fontSize="xl">Vaginal Laceration:</Text>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>1st Degree</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>2nd Degree</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>3rd Degree</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>If with laceration, Sutured?</FormLabel>
                <Spacer />
                <RadioGroup onChange={setSutured} value={sutured}>
                  <HStack spacing="24px">
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* If CS, bleeding and/or swelling from the wound  */}
          <GridItem colSpan={12}>
            <Text fontSize="xl"></Text>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>If CS, bleeding and/or swelling from the wound </FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Supplementation</Text>
          </GridItem>
          {/* No. of tablets given (60mcg Iron with 400mcg Folic acid) */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>No. of tablets given (60mcg Iron with 400mcg Folic acid)</FormLabel>
                <Spacer />
                <Flex>
                  <NumberInput max={50} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Input type="date" />
                </Flex>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Vitamin A */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Vitamin A)</FormLabel>
                <Spacer />
                <Flex>
                  <NumberInput max={50} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Input type="date" />
                </Flex>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Newborn Assessment */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Newborn Assessment</Text>
          </GridItem>
          {/* With poor suck or difficulty of breastfeeding */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>With poor suck or difficulty of breastfeeding</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* If breathing is{`>`}60 min or {`<`}30 min> */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>If breathing is{`>`}60/min or {`<`}30/min</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack align="center" spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Severe chest indrawing */}
          <GridItem colSpan={12}>
            <FormControl as="fieldset">
              <Flex>
                <FormLabel as="legend">Severe chest indrawing</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup></Flex>
            </FormControl>
          </GridItem>
          {/* Grunting */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Grunting</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Convulsions */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Convulsions</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Floppy or stiff extremities */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Floppy or stiff extremities</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Temp.{`>`}37.8 or {`<`}35.5 */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Temp.{`>`}37.8 or {`<`}35.5</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Bleeding from umbilical stump or cut */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Bleeding from umbilical stump or cut</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Umblilicus draining pus or umbilical redness extending to skin */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Umblilicus draining pus or umbilical redness extending to skin</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Foul-smwlling discharge ffrom cord stump */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Foul-smelling discharge from cord stump</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* More than 10 skin pustules or swelling. redness of skin */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>More than 10 skin pustules or swelling. redness of skin</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Essential Newborn Care (ENC) */}
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Essential Newborn Care (ENC)</Text>
          </GridItem>
          {/* 1. Immediate & thorough drying */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>1. Immediate {`&`} thorough drying</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setEnc1} value={enc1}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 2. Early skin to skin contact at least lasting for 90 minutes starting immediately after birth */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>2. Early skin to skin contact at least lasting for 90 minutes starting immediately after birth</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setEnc2} value={enc2}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 3. Timely cord clampoing and cutting */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>3. Timely cord clampoing and cutting</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setEnc3} value={enc3}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 4. Early intitiation of brestfeeding, and mon-separation of the mother from the newborn */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>4. Early intitiation of brestfeeding, and mon-separation of the mother from the newborn</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setEnc4} value={enc4}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Early ENC given (check yes if all 4 bcomponents were provided) */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Early ENC given (check yes if all 4 bcomponents were provided)</FormLabel>
                <Spacer />
                <RadioGroup colorScheme="teal" onChange={setEnc5} value={enc5}>
                  <HStack spacing={10} >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Breastfeeding: */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Breastfeeding:</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="After 90 minutes but wi/in twenty-four (24) hrs">After 90 minutes but wi/in twenty-four (24) hrs</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Other ENC Given */}
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Other ENC Given</Text>
          </GridItem>
          {/* 1. Vit. K injection */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>1. Vit. K injection</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 2. Eye prophylaxis */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>2. Eye prophylaxis</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* 3. Newborn Screening */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>3. Newborn Screening</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Others */}
          <GridItem colSpan={12}>
            <FormControl>
              <Flex>
                <FormLabel>Others</FormLabel>
                <Spacer />
                <CheckboxGroup colorScheme="teal">
                  <HStack spacing={10}>
                    <Checkbox value="w/in 24 hrs">w/in 24 hrs</Checkbox>
                    <Checkbox value="w/in 3-7 days">w/in 3-7 days</Checkbox>
                    <Checkbox value="Other visits">Other visits</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Flex>
            </FormControl>
          </GridItem>
          {/* Other ENC Given */}
          <GridItem colSpan={12}>
            <Text fontSize="2xl">Newborn Screening Done:</Text>
          </GridItem>
          {/* SideB */}
          
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">SideB</Text>
          </GridItem>
          <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
            {/* Complaints/Complication */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>Complaints/Complication</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* MCN Services Given */}
            <GridItem colSpan={4}>
                <FormControl>
                    <FormLabel>MCN Services Given</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Name of Provider and Signature */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>Name of Provider and Signature</FormLabel>
                    <Input type="text" />
                </FormControl>
            </GridItem>
            {/* Next follow-up schedule */}
            <GridItem colSpan={6}>
                <FormControl>
                    <FormLabel>Next follow-up schedule</FormLabel>
                    <Input type="date" />
                </FormControl>
            </GridItem>
          {/* Submit Button */}
          <GridItem colSpan={12} >
            <Button colorScheme='green' w='full'>
              Submit
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>

  )
}
