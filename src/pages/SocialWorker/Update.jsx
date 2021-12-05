import {
   Button,
    Center, chakra,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input, Select,
    Stack,
  useToast
} from '@chakra-ui/react'
import React, {useEffect, useRef, useState} from 'react'
import { useLocation} from 'react-router-dom'

import { db } from '../../utils/init-firebase'
import { Layout } from '../../components/Layout'


import { collection, doc,updateDoc } from "firebase/firestore";
import {Card} from "../../components/Card";





export default function Update() {
    const location = useLocation()
    const [email, setEmail] = useState(location.state.Email);
    const [id] = useState(location.state.userId);
    const [displayName, setName] = useState(location.state.Name)
    const [districtLegislative, setDistrictLegislative] = useState(location.state.DistrictL)
    const [districtAdministrative, setDistrictAdministrative] = useState(location.state.DistrictA)
    const [barangay, setBarangay] = useState(location.state.Barangay)
    const [uid, setUID] = useState(location.state.uid)
    const [isAdmin, setisAdmin] = useState(location.state.isAdmin)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const mounted = useRef(false)

    async function updateUser(id,isAdmin,email,displayName,barangay,districtAdministrative,districtLegislative) {
        const ref = doc(db, "users",id)
       await updateDoc(
            ref,{
               displayName: displayName,
               barangay: barangay,
               districtAdministrative: districtAdministrative,
               districtLegislative: districtLegislative,
               email: email,
               uid: id,
               isAdmin: true,
            }
        ).then(()=>
        {
            alert("Data Added")

        })
            .catch(error => {
                alert('Nothing added',error)
            })

    }



    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
        }
    }, [])








    return (

    <Layout>
      <Heading>Update User Profile</Heading>
        <Container maxW='container.lg' overflowX='auto' py={4}>
            <Center py={12}>
                <Card>

                    <chakra.form
                        onSubmit={async e => {
                            e.preventDefault()

                            // your register logic here
                            setIsSubmitting(true)
                            updateUser(id,setisAdmin,email,displayName,barangay,districtAdministrative,districtLegislative)
                                .then(res => {  })
                                .catch(error => {
                                    console.log(error.message)

                                    toast({
                                        description: error.message,
                                        status: 'error',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                })
                                .finally(() => {
                                    mounted.current && setIsSubmitting(false)

                                })
                        }}
                    >
                        <Stack spacing='6'>
                            <FormControl id='email' isDisabled defaultValue={email}>
                                <FormLabel>Email address</FormLabel>
                                <Input

                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id='name'  isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input

                                    name='name'
                                    type='name'
                                    autoComplete='name'
                                    value={displayName}
                                    onChange={e => setName(e.target.value)}
                                />
                            </FormControl>

                            <FormControl id='districtLegislative' isRequired>
                                <FormLabel>Legislative District</FormLabel>

                                <Select  value={districtLegislative}
                                        onChange={e => setDistrictLegislative(e.target.value)}  >
                                    <option value={"1st"}>1st District</option>
                                    <option value={"2nd"}> 2nd District</option>
                                    <option value={"3rd"} >3rd District</option>
                                </Select>
                            </FormControl>

                            <FormControl id='districtAdministrative' isRequired>
                                <FormLabel>Administrative District</FormLabel>
                                <Select value={districtAdministrative}
                                        onChange={e => setDistrictAdministrative(e.target.value)}  >
                                    <option disabled="disabled" >District 1</option>
                                    <option value={"pob"} >Poblacion</option>
                                    <option value={"tal"}>Talomo</option>
                                    <option disabled="disabled" >District 2</option>
                                    <option value={"agd"}> Agdao</option>
                                    <option value={"buh"}> Buhangin</option>
                                    <option value={"bun"}> Bunawan</option>
                                    <option value={"paq"}> Paquibato</option>
                                    <option disabled="disabled" >District 3</option>
                                    <option value={"bag"} > Baguio</option>
                                    <option value={"cal"}>   Calinan</option>
                                    <option value={"mar"}>Marilog</option>
                                    <option value={"tor"}>Toril</option>
                                    <option value={"tug"}> Tugbok</option>


                                </Select>


                            </FormControl>

                            <FormControl id='barangay' isRequired>
                                <FormLabel>Barangay</FormLabel>

                                <Input
                                    name='name'
                                    type='name'
                                    autoComplete='name'
                                    required
                                    value={barangay}
                                    onChange={e => setBarangay(e.target.value)}
                                />
                            </FormControl>

                            <FormControl id='isAdmin' isRequired>
                                <FormLabel>isAdmin</FormLabel>

                                <Select onChange={e => setisAdmin(e.target.value)}  >
                                    <option value={"true"}>Admin</option>
                                    <option value={"false"}>Not an Admin</option>

                                </Select>
                            </FormControl>

                            <Button
                                type='submit'
                                colorScheme='blue'
                                size='lg'
                                fontSize='md'
                                isLoading={isSubmitting}

                            >
                               Update
                            </Button>
                        </Stack>
                    </chakra.form>




                </Card>
            </Center>
        </Container>

    </Layout>

  )

}
