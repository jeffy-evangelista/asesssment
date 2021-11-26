import {
    Box,
    VStack,
    SimpleGrid,
    GridItem,
    Text,
    Divider,
    Button

} from '@chakra-ui/react'
import Serial from './FamilySerial'
import Review from './ReviewOfSystems'
import PhysicalExamination from './PhysicalExamination'


export default function Figure2() {

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
