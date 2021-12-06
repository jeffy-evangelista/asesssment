
import { Box, Container, Flex, Heading, HStack, VStack, Wrap, WrapItem, Text, SimpleGrid, Grid, GridItem, Center, Square } from '@chakra-ui/layout'
import { Stat, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat'
import React from 'react'

export default function T1() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                <GridItem bg="teal.200" p={5} borderRadius="lg" colSpan={2} >
                    <Center h='full'>
                        <StatGroup >
                            <Stat>
                                <StatLabel >No. of Deliveries (Total No. of Women who Delivered)</StatLabel>
                                <StatNumber>0000</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Center>
                </GridItem>
                <GridItem bg="purple.200" p={5} borderRadius="lg" colSpan={2} >
                    <Center h='full'>
                        <StatGroup >
                            <Stat>
                                <StatLabel >No. of Women who Delivered Expected to Have Clinic Visit</StatLabel>
                                <StatNumber>0000</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Center>
                </GridItem>
                <GridItem bg="cyan.200" borderWidth='1px' borderRadius="lg" p={5} colSpan={4} >
                    <SimpleGrid columns={4} gap={3} row={2}>
                        <GridItem colSpan={4} >
                            <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                                
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>Quality Postpartum Care</StatLabel>
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
                                                <StatLabel>Postpartum Women With Clinic Visit Within 4th to 6th Week Postpartum</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% vs Expected to Have Clinic Visits</StatHelpText>
                                                <StatHelpText>% vs No. of Deliveries</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>Postpartum Women Who Delivered 3 months Ago Given Complete Iron Supplementation</StatLabel>
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
                                                <StatLabel>Postpartum Women Given Vitamin A</StatLabel>
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
                                                <StatLabel>Postpartum Women Given Health Information/Counselling</StatLabel>
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
                                                <StatLabel>Postpartum Women Given Iodine Supplementation</StatLabel>
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
