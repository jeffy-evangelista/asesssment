
import { Box, Container, Flex, Heading, HStack, VStack, Wrap, WrapItem, Text, SimpleGrid, Grid, GridItem, Center, Square } from '@chakra-ui/layout'
import { Stat, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat'
import React from 'react'

export default function T1() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                <GridItem bg="teal.200" p={5} borderRadius="lg" colSpan={4} >
                    <Center h='full'>
                        <StatGroup >
                            <Stat>
                                <StatLabel >No. of Deliveries (Total No. of Women who Delivered)</StatLabel>
                                <StatNumber>0000</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Center>
                </GridItem>
                <GridItem bg="cyan.200" borderWidth='1px' borderRadius="lg" p={5} colSpan={4} >
                    <SimpleGrid columns={4} gap={3} row={2}>
                        <GridItem colSpan={4} >
                            <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' gap={3}>
                                <GridItem borderColor='black' p={5} colSpan={1} rowSpan={2} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>Pregnant Who Delivered with Quality Prenatal Care</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Pregnant Who Delivered Seen by a Doctor</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Pregnant Who Delivered Seen by a Dentist</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Pregnant Who Delivered with 4 Prenatal Visits</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Pregnant Who Delivered with 3 Basic Lab Exams</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Pregnant Who Delivered Given Complete Iron</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Pregnant Who Delivered Given Health Info/Counseling</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Grid>
    )
}
