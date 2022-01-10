import { Center } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function FormHeading({ text }) {
    return (
        <Center>
            <Heading as='h2' fontSize={{ base: 'md', sm: '4xl', md: '6xl' }}>{text}</Heading>
        </Center>
        
    )
}
