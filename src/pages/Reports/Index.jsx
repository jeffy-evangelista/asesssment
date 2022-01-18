import { Box, Center, Flex, Heading } from '@chakra-ui/layout'
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


export default function Index() {

    return (
        <Layout>
            <Flex>
                <Heading pb={5}>
                    Reports
                </Heading>
            </Flex>
            <Center>
                <Box p={5} borderWidth='1px' borderRadius='lg' >
                    <Tabs>
                        <TabList>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T1</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T2</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T3</Tab>
                            <Tab _selected={{ color: 'white', bg: 'teal' }}>T4</Tab>

                        </TabList>
                        <TabPanels>
                            <TabPanel><T1 /></TabPanel>
                            <TabPanel><T2 /></TabPanel>
                            <TabPanel><T3 /></TabPanel>
                            <TabPanel><T4 /></TabPanel>

                        </TabPanels>
                    </Tabs>
                </Box>
            </Center>

        </Layout>
    )
}
