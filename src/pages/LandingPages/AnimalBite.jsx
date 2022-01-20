import {
    Heading, Stack, Box, Link, Text, Container, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem,
    HStack, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import Image2 from '../../assets/Image2.jpg'


export default function AnimalBite() {
    return (
        <Layout>
            <Heading
                fontWeight={700}
                fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
                lineHeight={'110%'}
                // align="center"
                color="blue.600"
                mb={5}
            >
                ANIMAL BITE TREATMENT
            </Heading>

            <Box>
                <Image src={Image2} width="full" />
            </Box>

            <Box p={10} spacing>
                <Text >
                    Animal bites and scratches that break the skin can sometimes cause infection. Some bites
                    need stitches while others heal on their own. Rarely, bites from wild animals can lead
                    to rabies, a life-threatening infection. Bats, raccoons, skunks, and foxes cause most rabies
                    cases.
                </Text>
            </Box>

            <Box bgColor="blue.600" p={10}>
                <SimpleGrid columns={2}>
                    {/* <GridItem colSpan={2}> */}
                    <Box>
                        <Heading color="white" as='h2' size='xl' >
                            Leading cases of animal Bites
                        </Heading>
                    </Box>
                    {/* </GridItem> */}
                    <Box>
                        <Table variant='simple'>
                            <Thead>
                                <Tr >
                                    <Th color="white">Animal</Th>
                                    <Th color="white">Percentage</Th>
                                </Tr>
                            </Thead>
                            <Tbody color="white">
                                <Tr >
                                    <Td>Dog</Td>
                                    <Td>75%</Td>
                                </Tr>
                                <Tr>
                                    <Td>Cat</Td>
                                    <Td>25%</Td>
                                </Tr>
                               
                            </Tbody>
                        </Table>
                    </Box>
                </SimpleGrid>
            </Box>

            <SimpleGrid columns={2}>
                <Box p={10}>
                    <Text mb={4} >
                        If a person is bitten by an animal:
                    </Text>
                    <UnorderedList >
                        <ListItem>
                            Wounds should be washed and flushed immediately with soap and water for 10–15 minutes.
                            If soap is not available, flush with water alone. This is the most effective first-aid
                            treatment against rabies.
                        </ListItem>
                        <ListItem>
                            Wounds should be cleaned thoroughly at the health care facility with 70% alcohol
                            or povidoneiodine.
                        </ListItem>
                        <ListItem>
                            Assess the vaccination status: e.g. whether diphtheria, pertussis, tetanus (DPT)
                            or tetanustoxoid vaccination has been given in the past.Tetanus toxoid should be inoculated
                            whennecessary.
                        </ListItem>
                        <ListItem>
                            Antimicrobials should be prescribed to prevent possible bacterial infection.
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box p={10}>
                    <Text mb={4} >
                        What should not be done with an animal bite wound?
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            Suturing which facilitates further inoculation ofrabies virus.
                        </ListItem>
                        <ListItem>
                            If necessary for closing large wounds, suturing should be done after infiltration of
                            wound with rabies immunoglobulin (RIG). Rabies immunoglobulin of human origin (HRIG)
                            is expensive and only limited amounts are available. Rabies immunoglobulin of equineorigin
                            (ERIG) is available in many countries and is considerably cheaper than HRIG.
                        </ListItem>
                        <ListItem>
                            The sutures should be loose and not interfere with free bleeding and drainage.
                            It is well established that secondary suture of bite wounds results in better
                            cosmetic outcomes.
                        </ListItem>

                    </UnorderedList>
                </Box>
            </SimpleGrid>




        </Layout>

    )
}

