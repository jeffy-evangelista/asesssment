import { 
  Heading, Box, Tab, Tabs, TabList, TabPanels, TabPanel, FormControl,
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
  Checkbox
 } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'


export default function Create() {
  return (
    <Layout>
      <Heading mb={5} pb={5}>Create New Client</Heading>
      <Box p={4} boxShadow={'lg'}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Tab 1</Tab>
            <Tab>Basic Information</Tab>
            <Tab>Antenatal Care Check-Ups</Tab>
            <Tab>Pregnancy Outcome</Tab>
            <Tab>Mother and Child Postnatal Check-ups</Tab>
            <Tab>Civil Registration</Tab>
          </TabList>
          <TabPanels>
            {/* Tab 1 */}
            <TabPanel p={4}>
              <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Year</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Birthing Center</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Region</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Province</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Referral Center</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Municipality</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Barangay</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                </SimpleGrid>
              </VStack>
            </TabPanel>
            {/* Basic Information */}
            <TabPanel p={4}>
              <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={3} columnGap={3} rowGap="6" w="full">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Middle Name</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
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
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel>Gravidity</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel>Parity</FormLabel>
                      <Input type="text"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Expected Date of Delivery</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                </SimpleGrid>
              </VStack>
            </TabPanel>
            {/* Antenatal Care Check-Ups */}
            <TabPanel p={4}>
              <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>1st tri = up to 12 weeks and 6 days AOG</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>2nd tri = 13-27 weeks and 6 days AOG</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>3rd tri = 28 weeks AOG and more</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>      
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>3rd tri = 28 weeks AOG and more</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>      
                </SimpleGrid>
              </VStack>
            </TabPanel>
            {/* Pregnancy Outcome */}
            <TabPanel p={4}>
              <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Checkbox value="live birth">Live Birth</Checkbox>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Checkbox value="preterm birth">Preterm Birth</Checkbox>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Checkbox value="stillbirth">Stillbirth</Checkbox>
                    </FormControl>
                  </GridItem>      
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Checkbox value="abortion">Abortion</Checkbox>
                    </FormControl>
                  </GridItem>      
                </SimpleGrid>
              </VStack>
            </TabPanel>
            {/* Mother and Child Postnatal Check-ups */}
            <TabPanel p={4}>
              <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Day of Discharge/24 hours after birth</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Within 7 days after birth</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>      
                </SimpleGrid>
              </VStack>
            </TabPanel>
            {/* Civil Registration */}
            <TabPanel p={4}>
              <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Livebirth</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Maternal Death</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Stillbirth</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem> 
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Early Newborn Death (0-7 days)</FormLabel>
                      <Input type="date"/>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2} >
                    <Button colorScheme='green' w='full'>
                      Submit
                    </Button>
                  </GridItem>       
                </SimpleGrid>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>    
    </Layout>
  )
}
