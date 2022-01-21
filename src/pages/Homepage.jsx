import {
  Heading,
  Stack,
  Box, Link, Text, Container, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import banner from '../assets/banner.jpg'


export default function Homepage() {
  return (
    <Layout>
      <Image src={banner} 
      minW="full"/>
    </Layout>

  )
}

