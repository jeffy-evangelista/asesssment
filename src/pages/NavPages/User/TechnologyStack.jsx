import {
  Heading,
  Stack,
  Box, Link, Text, Container, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../../components/Layout'
import chakra from '../../../assets/chakra.png'
import firebase from '../../../assets/firebase.png'
import react from '../../../assets/react.png'
import vscode from '../../../assets/vscode.png'

export default function TechnologyStack() {
  return (
    <Layout>
      <Heading
        mb={5}
      >
        TECHNOLOGY STACK
      </Heading>
      <SimpleGrid columns={2} mt={10} spacing={20}>
        <Box>
          <Image
            src={chakra}
          />
        </Box >
        <Box>
          <Image
            src={react}
          />
        </Box>
        <Box>
          <Image
            src={firebase}
          />
        </Box>
        <Box>
          <Image
            src={vscode}
          />
        </Box>
      </SimpleGrid>
    </Layout>

  )
}
