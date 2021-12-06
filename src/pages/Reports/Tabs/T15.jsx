
import { Box, Container, Flex, Heading, HStack, VStack, Wrap, WrapItem, Text, SimpleGrid, Grid, GridItem, Center, Square } from '@chakra-ui/layout'
import { Stat, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat'
import React from 'react'

export default function T15() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                <GridItem bg="teal.200" p={5} borderRadius="lg" colSpan={1} >
                    <Center h='full'>
                        <StatGroup >
                            <Stat>
                                <StatLabel >Total No. of Livebirths</StatLabel>
                                <StatNumber>0000</StatNumber>
                                <StatHelpText>%</StatHelpText>
                            </Stat>
                        </StatGroup>
                    </Center>
                </GridItem>
                <GridItem bg="cyan.200" borderWidth='1px' borderRadius="lg" p={5} colSpan={3} >
                    <SimpleGrid columns={4} gap={3}>
                        <GridItem colSpan={4}>
                            <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                                <GridItem borderColor='black' p={5} colSpan={3} rowSpan={1} border='1px' borderRadius="lg">
                                    <Text fontSize="lg" align="center">Birth Weight</Text>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>NBW (≥ 2500 grams)</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% here</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>LBW ({`<`} 2500 grams)</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% here</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>UBW</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>% here</StatHelpText>
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
