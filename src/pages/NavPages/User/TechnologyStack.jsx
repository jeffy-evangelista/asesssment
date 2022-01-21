import {
  Heading,
  Stack,
  Box, Link, Text, Container, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../../components/Layout'

export default function TechnologyStack() {
  return (
    <Layout>
       <Heading
       mb={5}
       >
         TECHNOLOGY STACK
       </Heading>
      <UnorderedList>
        <ListItem>ReactJS</ListItem>
        <ListItem>Firebase</ListItem>
        <ListItem>Chakra-UI</ListItem>
        <ListItem>Visual Studio Code</ListItem>
      </UnorderedList>
    </Layout>

  )
}
