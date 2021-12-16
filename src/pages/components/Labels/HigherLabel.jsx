import { Center, Text } from '@chakra-ui/layout'
import React from 'react'

export default function HigherLabel({ text }) {
    return (
        <Center>
            <Text fontSize="2xl" color="teal">{text}</Text>
        </Center>
    )
}
