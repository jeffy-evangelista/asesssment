import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Divider,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Figure1() {
  const [po, setPo] = useState("");
  return (
    <Box boxShadow={'lg'} p={8} >
      <VStack spacing={3} alignItems="flex-start">
        <SimpleGrid columns={12} columnGap={3} rowGap="6" w="full">
          {/* RHU Location */}
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Birthing Center</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Region</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Province</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Referral Center</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Municipality</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Barangay</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          {/* Basic Information */}
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
            <FormControl>
              <FormLabel>Gravidity</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Parity</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Expected Date of Delivery</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          {/* Antenatal Care Check-Ups */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Antenatal Care Check-Ups</Text>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>1st tri = up to 12 weeks and 6 days AOG</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>2nd tri = 13-27 weeks and 6 days AOG</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>3rd tri = 28 weeks AOG and more</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>3rd tri = 28 weeks AOG and more</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          {/* Pregnancy Outcome */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Pregnancy Outcome</Text>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl>
              <RadioGroup colorScheme="teal" onChange={setPo} value={po}>
                <Stack spacing={10} direction="row">
                  <Radio value="Live Birth">Live Birth</Radio>
                  <Radio value="Preterm Birth">Preterm Birth</Radio>
                  <Radio value="Stillbirth">Stillbirth</Radio>
                  <Radio value="Abortion">Abortion</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          {/*Mother and Child Postnatal Check-ups */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Mother and Child Postnatal Check-ups</Text>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Day of Discharge/24 hours after birth</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Within 7 days after birth</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          {/*Civil Registration */}
          <GridItem colSpan={12}>
            <Text fontSize="4xl" textAlign="center" color="teal">Civil Registration</Text>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Livebirth</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Maternal Death</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Stillbirth</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Early Newborn Death (0-7 days)</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          {/* Divider */}
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Name of BHW</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Barangay Health Station</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Name of Midwife</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel>Rural Health Unit</FormLabel>
              <Input type="text" />
            </FormControl>
          </GridItem>
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
