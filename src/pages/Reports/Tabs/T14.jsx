import {Center, Grid, GridItem, SimpleGrid, Text} from '@chakra-ui/layout'
import {Stat, StatGroup, StatLabel, StatNumber} from '@chakra-ui/stat'
import React from 'react'

export default function T14() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                <GridItem bg="cyan.200" borderWidth='1px' borderRadius="lg" p={5} colSpan={2} rowSpan={2} colSpan={4} >
                    <Text fontSize="lg" align="center"  pb={5}>Total Number of Livebirths</Text>
                    <SimpleGrid columns={4} gap={3}>
                        <GridItem colSpan={3}>
                            <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                                <GridItem borderColor='black' p={5} colSpan={2} rowSpan={1} border='1px' borderRadius="lg">
                                    <Text fontSize="lg" align="center">Age Group</Text>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>Male</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>Female</StatLabel>
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
                                    </Stat>
                                </StatGroup>
                            </Center>
                        </GridItem>
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Grid>
    )
}
