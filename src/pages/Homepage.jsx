import {
  Heading,
  Stack,
  Box, Link, Text
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function Homepage() {
  return (
    <Layout>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={800}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          color="green.500"
        >
          The City Health Office of Davao
        </Heading>
      </Stack>
    </Layout>

  )
}

