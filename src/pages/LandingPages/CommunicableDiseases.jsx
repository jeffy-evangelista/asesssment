import {
    Heading, Stack, Box, Link, Text, Container, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem,
    HStack, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import Image3 from '../../assets/Image3.jpg'


export default function CommunicableDiseases() {
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
                COMMUNICABLE DISEASES
            </Heading>

            <Box>
                <Image src={Image3} width="full" />
            </Box>

            <Box p={10} spacing>
                <Text >
                    Communicable diseases, also known as infectious diseases or transmissible diseases,
                    are illnesses that result from the infection, presence and growth of pathogenic
                    (capable of causing disease) biologic agents in an individual human or other animal
                    host.
                </Text>
            </Box>

            <Box bgColor="blue.600" p={10}>
                <SimpleGrid columns={2}>
                    {/* <GridItem colSpan={2}> */}
                    <Box>
                        <Heading color="white" as='h2' size='xl' >
                            Leading communicable dieases
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


            <Box p={10}>
                <Text mb={4} >
                    How do these communicable diseases spread?
                </Text>
                <Text mb={4} >
                    How these diseases spread depends on the specific disease or infectious
                    agent. Some ways in which communicable diseases spread are by:
                </Text>
                <UnorderedList >
                    <ListItem>
                        physical contact with an infected person, such as through touch (staphylococcus),
                        sexual intercourse (gonorrhea, HIV), fecal/oral transmission (hepatitis A), or droplets (influenza, TB)
                    </ListItem>
                    <ListItem>
                        contact with a contaminated surface or object (Norwalk virus),
                        food (salmonella, E. coli), blood (HIV, hepatitis B), or water (cholera);
                    </ListItem>
                    <ListItem>
                        bites from insects or animals capable of transmitting the disease (mosquito: malaria and yellow fever; flea: plague); and
                    </ListItem>
                    <ListItem>
                        travel through the air, such as tuberculosis or measles.
                    </ListItem>
                </UnorderedList>
            </Box>





        </Layout>

    )
}

