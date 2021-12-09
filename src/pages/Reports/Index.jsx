import { Box, Center, Flex, Heading, HStack } from '@chakra-ui/layout'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import React from 'react'
import { Layout } from '../../components/Layout'
import T1 from './Tabs/T1'
import T2 from './Tabs/T2'
import T3 from './Tabs/T3'
import T4 from './Tabs/T4'
import T5 from './Tabs/T5'
import T6 from './Tabs/T6'
import T7 from './Tabs/T7'
import T8 from './Tabs/T8'
import T9 from './Tabs/T9'
import T10 from './Tabs/T10'
import T11 from './Tabs/T11'
import T12 from './Tabs/T12'
import T13 from './Tabs/T13'
import T14 from './Tabs/T14'
import T15 from './Tabs/T15'
import T16 from './Tabs/T16'
import T17 from './Tabs/T17'
import T18 from './Tabs/T18'
import T19 from './Tabs/T19'
import T20 from './Tabs/T20'
import T21 from './Tabs/T21'
import T22 from './Tabs/T22'
import T23 from './Tabs/T23'
import T24 from './Tabs/T24'
import T25 from './Tabs/T25'
import T26 from './Tabs/T26'
import { Select } from '@chakra-ui/select'
import {Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

export default function Index() {

    return (
        <Layout>
            <Flex>
                <Heading pb={5}>
                    Reports
                </Heading>
            </Flex>
            <Center>
                <Box p={5} borderWidth='1px' borderRadius='lg'>
                    <Tabs>
                        <HStack pb={5} spacing={10}>
                            <Select placeholder='Select option' size='lg' borderColor='teal'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <Select placeholder='Select option' size='lg' borderColor='teal'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <Select placeholder='Select option' size='lg' borderColor='teal'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </HStack>
                        <TabList>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T1</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T2</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T3</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T4</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T5</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T6</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T7</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T8</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T9</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T10</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T11</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T12</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T13</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T14</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T15</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T16</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T17</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T18</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T19</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T20</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T21</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T22</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T23</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T24</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T25</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T26</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel><T1 /></TabPanel>
                            <TabPanel><T2 /></TabPanel>
                            <TabPanel><T3 /></TabPanel>
                            <TabPanel><T4 /></TabPanel>
                            <TabPanel><T5 /></TabPanel>
                            <TabPanel><T6 /></TabPanel>
                            <TabPanel><T7 /></TabPanel>
                            <TabPanel><T8 /></TabPanel>
                            <TabPanel><T9 /></TabPanel>
                            <TabPanel><T10 /></TabPanel>
                            <TabPanel><T11 /></TabPanel>
                            <TabPanel><T12 /></TabPanel>
                            <TabPanel><T13 /></TabPanel>
                            <TabPanel><T14 /></TabPanel>
                            <TabPanel><T15 /></TabPanel>
                            <TabPanel><T16 /></TabPanel>
                            <TabPanel><T17 /></TabPanel>
                            <TabPanel><T18 /></TabPanel>
                            <TabPanel><T19 /></TabPanel>
                            <TabPanel><T20 /></TabPanel>
                            <TabPanel><T21 /></TabPanel>
                            <TabPanel><T22 /></TabPanel>
                            <TabPanel><T23 /></TabPanel>
                            <TabPanel><T24 /></TabPanel>
                            <TabPanel><T25 /></TabPanel>
                            <TabPanel><T26 /></TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Center>

            <Flex>
                <Heading pb={5}>
                    Reports
                </Heading>
            </Flex>
            <HStack pb={5} spacing={10}>
                <Select placeholder='Select option'size='lg' borderColor='teal'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Select placeholder='Select option'size='lg' borderColor='teal'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Select placeholder='Select option'size='lg' borderColor='teal'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </HStack>





            <Box p={10} borderWidth='1px' borderRadius='lg'>

            <Table variant="striped" colorScheme="teal">

                <Thead>
                    <Tr>
                        <Th>Activities</Th>
                        <Th>Total MUN/CITY</Th>
                        <Th>Less than 15 y.o. </Th>
                        <Th>15-19 y.o</Th>
                        <Th>20-24 y.0</Th>
                        <Th>25 y.o and above</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1 No. of pregnant women with First prenatal visit (1st PNV) by trimester of current pregnancy </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>


                    </Tr>
                    <Tr>
                        <Td>2 No. of women pregnant for the first time given at least 2 doses of Tetanus diphtheria (Td) vaccination  A2/ (sum of 2.1.1 to 2.1.4)
                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>2.2 No. of women pregnant for the 2nd or more times given at least 3 doses of Td vaccination (Td3, Td4, Td5 & TTL)  A3/ (sum of 2.2.1 to 2.2.4)
                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>

                    <Tr>
                        <Td>3.  No. of pregnant women tested for complete blood count (CBC) or Hemoglobin (Hgb) & Hematocrit (Hct) count  A4/ (sum of 3.1 to 3.4)

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>4.   No. of pregnant women tested for complete blood count or Hgb&Hct count diagnosed with anemia A5/ (sum of 4.1 to 4.4)

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>5.  No. anemic pregnant women given iron supplementation

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>6.  No. of pregnant women with birth plan

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>7.  No. of pregnant women given iodine capsules

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>8.  No. of pregnant women given one dose of deworming tablet

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>9.  Pregnant women according to their nutritional status

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>9.1  No. of pregnant women seen in the 1st trimester who had BMI below the normal cut-off

                        <Td>
                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>
                    <Tr>
                        <Td>     9.2  No. of pregnant women seen in the 1st trimester who had Normal BMI

                        </Td>
                        <Td>500</Td>
                        <Td>150</Td>
                        <Td>150</Td>
                        <Td>100</Td>
                        <Td>100</Td>
                    </Tr>


                </Tbody>

            </Table>
            </Box>
        </Layout>
    )
}
