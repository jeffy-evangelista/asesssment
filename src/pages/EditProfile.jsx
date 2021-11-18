import {
    Container, 
    Heading,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Link,
    FormControl,
    FormLabel,
    Input,
    Checkbox,

} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Profilepage() {
const { currentUser } = useAuth()
return (
<Layout>
<Heading>Edit User</Heading>
<Container maxW='container.lg' overflowX='auto' py={4}>
  {/* <chakra.pre p={4}>
    {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
  </chakra.pre> */}
  <Center py={12}>
  
      
        <Box
        w={'full'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Name</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Location</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl>
            <Checkbox>Admin</Checkbox>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      

</Center>
</Container>
</Layout>
)
}
