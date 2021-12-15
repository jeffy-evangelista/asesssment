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
import {useState} from "react";


export default function Figure2({works}) {
    const [passData] = useState(works);
    return (
        <Box boxShadow={'lg'} p={8}>
            <VStack spacing={3} alignItems="flex-start">
                <SimpleGrid columns={12} columnGap={3} rowGap="6" w="full">
                    <GridItem colSpan={12}>
                        <Text fontSize="4xl" textAlign="center" color="teal">Family Serial NO.</Text>
                    </GridItem>
                    <Serial data={passData}/>
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Medical History</Text>
                    </GridItem>
                    <Review data={passData} />
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Physical Examination</Text>
                    </GridItem>
                    <PhysicalExamination data={passData} />
                    <GridItem colSpan={12}>
                        <Divider />
                        <Text fontSize="4xl" textAlign="center" color="teal">Side B</Text>
                    </GridItem>
                    <SideB data={passData}/>
                    <GridItem colSpan={12}>
                        <Divider data={passData}/>
                        <Text fontSize="4xl" textAlign="center" color="teal">Physical Examination Findings</Text>
                    </GridItem>
                    <AEF data={passData}/>
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
