import { 
  Heading, 
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  Button
 } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'


export default function Create() {
  return (
    <Layout>
      <Heading mb={5}>Add New Social Worker</Heading>
      
        <Box boxShadow={'lg'} p={8} >
          <VStack spacing={3} alignItems="flex-start">
            <SimpleGrid columns={3} columnGap={3} rowGap="6" w="full">
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Middle Name</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={3} >
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={3} >
                <Button colorScheme='green' w='full'>
                  Submit
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Box>   
    </Layout>
  )
}
