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
import { Select } from '@chakra-ui/react'

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
                            <Select placeholder='Select Legislative Districts' size='lg' borderColor='teal'>

                                <option value='district2'>District 2</option>

                            </Select>
                            <Select placeholder='Select Administrative Districts' size='lg' borderColor='teal'>
                                <option value='Paquibato'>Paquibato</option>
                            </Select>
                            <Select placeholder='Select Barangays' size='lg' borderColor='teal'>
                                <option value='Colosas'>  Colosas</option>
                                <option value='Fatima'>Fatima (Benowang) </option>
                                <option value='Lumiad'> Lumiad</option>
                                <option value='Mabuhay'>Mabuhay</option>
                                <option value='Malabog'> Malabog</option>
                                <option value='Mapula'> Mapula</option>
                                <option value='Panalum'> Panalum</option>
                                <option value='Pandaitan'>Pandaitan</option>
                                <option value='Paquibato'> Paquibato Proper</option>
                                <option value='Paradise'> Paradise Embak</option>
                                <option value='Salapawan'>Salapawan</option>
                                <option value='Sumimao'> Sumimao</option>
                                <option value='Tapak'>Tapak</option>


                            </Select>
                            <Select placeholder='Select Quarter' size='lg' borderColor='teal'>
                                <option value='Q1'>Quarter 1</option>
                                <option value='Q2'>Quarter 2</option>
                                <option value='Q3'>Quarter 3</option>
                                <option value='Q4'>Quarter 3</option>
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

        </Layout>
    )
}
