import {Center, Grid, GridItem, SimpleGrid} from '@chakra-ui/layout'
import {Stat, StatGroup, StatHelpText, StatLabel, StatNumber} from '@chakra-ui/stat'
import React from 'react'

export default function T26() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                <GridItem bg="teal.200" p={5} borderRadius="lg" colSpan={1} >
                    <Center h='full'>
                        <StatGroup >
                            <Stat>
                                <StatLabel >Total No. of Deliveries (All Ages)</StatLabel>
                                <StatNumber>0000</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Center>
                </GridItem>
                <GridItem bg="cyan.200" borderWidth='1px' borderRadius="lg" p={5} colSpan={3} >
                    <SimpleGrid columns={4} gap={3} row={2}>
                        <GridItem colSpan={4} >
                            <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg">
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                            <StatLabel>No. of Women {`<`}15 to 19 yrs with Live Deliveries</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>%</StatHelpText>
                                            </Stat>
                                        </StatGroup>
                                    </Center>
                                </GridItem>
                                <GridItem borderColor='black' p={5} colSpan={1} border='1px' borderRadius="lg" >
                                    <Center h='full'>
                                        <StatGroup >
                                            <Stat>
                                                <StatLabel>No. of Women {`<`}15 to 19 yrs with Abortion	</StatLabel>
                                                <StatNumber>No. Here</StatNumber>
                                                <StatHelpText>%</StatHelpText>
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
                                                <StatHelpText>%</StatHelpText>
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
                                                <StatHelpText>%</StatHelpText>
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
