import {
    Heading,
    Center,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,Button, ButtonGroup

} from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel,Divider } from "@chakra-ui/react"
import React from 'react'
import { Layout } from '../components/Layout'
import  { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";





const T1 = () => <div>You're on the Profile Tab</div>;
const T2 = () => <div>You're on the Comments Tab</div>;
const T3 = () => <div>You're on the Contact Tab</div>;


class Reports extends Component {
    render() {
        const { path } = this.props.match;

        return (

            <Layout>
                <Heading>Report page</Heading>
                <Menu>
                    <MenuButton>
                       District
                    </MenuButton>
                    <MenuList>
                        <MenuItem>District 1</MenuItem>
                        <MenuItem>District 2 </MenuItem>
                        <MenuItem>District 3</MenuItem>
                        <MenuItem>District 4</MenuItem>
                        <MenuItem>District 5</MenuItem>
                    </MenuList>
                </Menu>
                <Center height="5px">
                    <Divider orientation="horizontal" />
                </Center>
                <Menu>
                    <MenuButton>
                        Barangay
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Barangay 1</MenuItem>
                        <MenuItem>Barangay 2 </MenuItem>
                        <MenuItem>Barangay 3</MenuItem>
                        <MenuItem>Barangay 4</MenuItem>
                        <MenuItem>Barangay 5</MenuItem>
                    </MenuList>
                </Menu>
                <Center height="5px">
                    <Divider orientation="horizontal" />
                </Center>
                <Menu>
                    <MenuButton>
                        Quarter
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Quarter 1</MenuItem>
                        <MenuItem>Quarter 2 </MenuItem>
                        <MenuItem>Quarter 3</MenuItem>
                        <MenuItem>Quarter 4</MenuItem>
                    </MenuList>
                </Menu>
                <Center py={6}>



            <div>



            </div>

                    <Tabs>
                        <TabList>
                            <Tab>T1</Tab>
                            <Tab>T2</Tab>
                            <Tab>T3</Tab>
                            <Tab>T4</Tab>
                            <Tab>T5</Tab>
                            <Tab>T6</Tab>
                            <Tab>T7</Tab>
                            <Tab>T8</Tab>
                            <Tab>T9</Tab>
                            <Tab>T10</Tab>
                            <Tab>T11</Tab>
                            <Tab>T12</Tab>
                            <Tab>T13</Tab>
                            <Tab>T14</Tab>
                            <Tab>T15</Tab>
                            <Tab>T16</Tab>
                            <Tab>T17</Tab>
                            <Tab>T18</Tab>
                            <Tab>T19</Tab>
                            <Tab>T20</Tab>
                            <Tab>T21</Tab>
                            <Tab>T22</Tab>
                            <Tab>T23</Tab>
                            <Tab>T24</Tab>
                            <Tab>T25</Tab>
                            <Tab>T26</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>  <Route path={`${path}`} exact component={T1} />  </TabPanel>
                            <TabPanel>  <Route path={`${path}`} component={T2} />   </TabPanel>
                            <TabPanel>   <Route path="/total-reports/report-one">    </Route>      </TabPanel>

                        </TabPanels>
                    </Tabs>


                </Center>
                <Menu>
                    <MenuButton>
                        Month
                    </MenuButton>
                    <MenuList>
                        <MenuItem>January</MenuItem>
                        <MenuItem>February </MenuItem>
                        <MenuItem>March</MenuItem>
                        <MenuItem>April</MenuItem>
                        <MenuItem>May</MenuItem>
                        <MenuItem>June</MenuItem>
                        <MenuItem>July</MenuItem>
                        <MenuItem>August</MenuItem>
                        <MenuItem>September</MenuItem>
                        <MenuItem>October</MenuItem>
                        <MenuItem>November</MenuItem>
                        <MenuItem>December</MenuItem>
                    </MenuList>
                </Menu>
                <Center height="5px">
                    <Divider orientation="horizontal" />
                </Center>
                <Menu>
                    <MenuButton>
                        District
                    </MenuButton>
                    <MenuList>
                        <MenuItem>District 1</MenuItem>
                        <MenuItem>District 2 </MenuItem>
                        <MenuItem>District 3</MenuItem>
                        <MenuItem>District 4</MenuItem>
                        <MenuItem>District 5</MenuItem>

                    </MenuList>
                </Menu>
                <Center height="5px">
                    <Divider orientation="horizontal" />
                </Center>
                <Menu>
                    <MenuButton>
                        Barangay
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Barangay 1</MenuItem>
                        <MenuItem>Barangay 2 </MenuItem>
                        <MenuItem>Barangay 3</MenuItem>
                        <MenuItem>Barangay 4</MenuItem>
                        <MenuItem>Barangay 5</MenuItem>


                    </MenuList>
                </Menu>

                <center>   <h3>Maternal Reports</h3></center>

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
            </Layout>

        );
    }
}

export default Reports;







