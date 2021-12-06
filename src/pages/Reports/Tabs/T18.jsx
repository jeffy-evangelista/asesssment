
import { Box, Container, Flex, Heading, HStack, VStack, Wrap, WrapItem, Text, SimpleGrid, Grid, GridItem, Center, Square } from '@chakra-ui/layout'
import { Stat, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat'
import React from 'react'

export default function T2() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                <GridItem bg="teal.200" p={5} borderRadius="lg" colSpan={1} >
                    <Center h='full'>
                        <StatGroup >
                            <Stat>
                                <StatLabel >Total number of Deliveries</StatLabel>
                                <StatNumber>0000</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Center>
                </GridItem>
                <GridItem bg="cyan.200" borderWidth='1px' borderRadius="lg" p={5} colSpan={3} >
                <SimpleGrid columns={1} gap={3}>
                        <GridItem colSpan={1}>
                            <Text fontSize="lg" align="center" pb={5}>Vaginal</Text>
                            <SimpleGrid columns={4} gap={3}>
                                <GridItem colSpan={3}>
                                    <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                                        <GridItem borderColor='black' p={5} colSpan={3} rowSpan={1} border='1px' borderRadius="lg">
                                            <Text fontSize="lg" align="center">Age Group</Text>
                                        </GridItem>
                                        <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                            <Center h='full'>
                                                <StatGroup >
                                                    <Stat>
                                                        <StatLabel>10-14 years old</StatLabel>
                                                        <StatNumber>No. Here</StatNumber>
                                                       
                                                    </Stat>
                                                </StatGroup>
                                            </Center>
                                        </GridItem>
                                        <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                            <Center h='full'>
                                                <StatGroup >
                                                    <Stat>
                                                        <StatLabel>15-19 years old</StatLabel>
                                                        <StatNumber>No. Here</StatNumber>
                                                        
                                                    </Stat>
                                                </StatGroup>
                                            </Center>
                                        </GridItem>
                                        <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                            <Center h='full'>
                                                <StatGroup >
                                                    <Stat>
                                                        <StatLabel>20-49 years old</StatLabel>
                                                        <StatNumber>No. Here</StatNumber>
                                                       
                                                    </Stat>
                                                </StatGroup>
                                            </Center>
                                        </GridItem>
                                    </Grid>
                                </GridItem>
                                <GridItem colSpan={1} p={5} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel >Total</StatLabel>
                                                <StatNumber>No. here</StatNumber>
                                                <StatHelpText>% here</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Text fontSize="lg" align="center" pb={5}>Caesarean Section</Text>
                            <SimpleGrid columns={4} gap={3}>
                                <GridItem colSpan={3}>
                                    <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                                        <GridItem borderColor='black' p={5} colSpan={3} rowSpan={1} border='1px' borderRadius="lg">
                                            <Text fontSize="lg" align="center">Age Group</Text>
                                        </GridItem>
                                        <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                            <Center h='full'>
                                                <StatGroup >
                                                    <Stat>
                                                        <StatLabel>10-14 years old</StatLabel>
                                                        <StatNumber>No. Here</StatNumber>
                                                       
                                                    </Stat>
                                                </StatGroup>
                                            </Center>
                                        </GridItem>
                                        <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                            <Center h='full'>
                                                <StatGroup >
                                                    <Stat>
                                                        <StatLabel>15-19 years old</StatLabel>
                                                        <StatNumber>No. Here</StatNumber>
                                                       
                                                    </Stat>
                                                </StatGroup>
                                            </Center>
                                        </GridItem>
                                        <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                            <Center h='full'>
                                                <StatGroup >
                                                    <Stat>
                                                        <StatLabel>20-49 years old</StatLabel>
                                                        <StatNumber>No. Here</StatNumber>
                                                       
                                                    </Stat>
                                                </StatGroup>
                                            </Center>
                                        </GridItem>
                                    </Grid>
                                </GridItem>
                                <GridItem colSpan={1} p={5} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel >Total</StatLabel>
                                                <StatNumber>No. here</StatNumber>
                                                <StatHelpText>% here</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Grid>
    )
}
