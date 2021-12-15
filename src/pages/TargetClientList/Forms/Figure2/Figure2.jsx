import {
    Box,
    VStack,
    SimpleGrid,
    GridItem,
    Text,
    Divider,
    Button

} from '@chakra-ui/react'
import Serial from './FormComponents/FamilySerial'
import Review from './FormComponents/ReviewOfSystems'
import PhysicalExamination from './FormComponents/PhysicalExamination'
import SideB from './FormComponents/SideB'
import AEF from './FormComponents/AEF'


export default function Figure2({works}) {

    return (
        <Box boxShadow={'lg'} p={8}>
            <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={12} columnGap={3} rowGap="6" w="full">
                    <GridItem colSpan={12}>
                        <Text fontSize="4xl" textAlign="center" color="teal">Family Serial NO.</Text>
                    </GridItem>
                    <Serial />
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Medical History</Text>
                    </GridItem>
                    <Review />
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Physical Examination</Text>
                    </GridItem>
                    <PhysicalExamination />
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Side B</Text>
                    </GridItem>
                    <SideB/>
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Physical Examination Findings</Text>
                    </GridItem>
                    <AEF/>
                    <GridItem colSpan={12} >
                        <Button colorScheme='green' w='full'>
                            Submit
                        </Button>
                    </GridItem>

                </SimpleGrid>
            </VStack>
        </Box>

    )
}
