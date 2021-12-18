import { Center, Text } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function FormHeading({ text }) {
    return (
        <Center>
            <Heading as='h2' size='lg'>{text}</Heading>
        </Center>
        
    )
}
