import {
  Heading,
  Stack,
  Box, Link, Text, Container, Button, SimpleGrid, useColorModeValue, Grid, GridItem, Image, UnorderedList, ListItem
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import Image1 from '../assets/Image1.jpg'


export default function Homepage() {
  return (
    <Layout>

      <Box
        p={3}
        mb={5}
        bgColor="blue.600"
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          align="center"
          color="white"
          mb={5}

        >
          CITY HEALTH OFFICE
        </Heading>
      </Box>

      <Box>
        <Image src={Image1} width="full" />
      </Box>

      <Box p={10} spacing>
        <Text >
          The City Health Office is one of the agencies under the Local Government
          Unit of Davao City responsible in making health services accessible,
          available, acceptable and affordable to all its constituents.
          It is a government mandate aiming to ensure that every Filipino shall receive
          affordable and quality health benefits. This involves providing adequate resources
          – health human resources, health facilities, and health financing. City Health O
          ffice was created through RA 9160 or the Local Government Code of 1991 where health
          services are devolved to the LGUs. City Health Office is was established because health
          is a right of every Filipino citizen and the State is duty-bound to ensure that all people
          have equitable access to effective health care services at all levels.
        </Text>
      </Box>

      <SimpleGrid columns={2}>
        <Box bgColor="blue.600" p={10}>
          <Text mb={4} color="white">
            The services offered by the office include:
          </Text>
          <UnorderedList color="white">
            <ListItem>
              Medical consultations/check-ups
            </ListItem>
            <ListItem>
              Immunization
            </ListItem>
            <ListItem>
              Prenatal/post-partum
            </ListItem>
            <ListItem>
              Nutrition
            </ListItem>
            <ListItem>
              Laboratory
            </ListItem>
            <ListItem>
              Dental
            </ListItem>
            <ListItem>
              Premarital counselling
            </ListItem>
            <ListItem>
              Adolescent and Youth Health
            </ListItem>
            <ListItem>
              Animal Bite and Treatment Center
            </ListItem>
            <ListItem>
              Reproductive Health and Wellness (STI, HIV and Aids)
            </ListItem>
            <ListItem>
              Family Planning
            </ListItem>
            <ListItem>
              Counseling and Referral
            </ListItem>
            <ListItem>
              Tropical Diseases (dengue, malaria, schistosomiasis)
            </ListItem>
            <ListItem>
              Health and Sanitation (sanitary permits, inspection of establishments)
            </ListItem>
            <ListItem>
              Cardio-vascular diseases
            </ListItem>
            <ListItem>
              Non-Communicable disease (prevention of blindness, hearing, mental health, PWDs, Senior Citizens)
            </ListItem>
            <ListItem>
              Issuance of health certificates and medical certificates
            </ListItem>
            <ListItem>
              Review of death certificates
            </ListItem>
            <ListItem>
              Issuance of permits (transfer, cremation)
            </ListItem>
            <ListItem>
              Medico-legal services
            </ListItem>
            <ListItem>
              Infectious diseases services (TB/Leprosy)
            </ListItem>
            <ListItem>
              Paanakan
            </ListItem>
          </UnorderedList>
        </Box>
        <Box p={10} mb={5}>
          <Link color="blue.500">
            http://health.davaocity.gov.ph/
          </Link>
          <Text>
            8:00 AM - 5:00 PM
          </Text>
          <Text>
            Magallanes Street, Davao City
          </Text>
          <Text>
            (082) 227-4749
          </Text>
          <Link color="blue.500">
            cho@davaocity.gov.ph, davaohealth@yahoo.com
          </Link>
          <Text>
            DR. JOSEPHINE J. VILLAFUERTE
          </Text>
          <Box mt={5}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe width={500} height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=Magallanes%20Street,%20Davao%20City&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                <a href="https://123movies-to.org" />
                <br />
                <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:500px;width:500px;}" }} />
                <a href="https://www.embedgooglemap.net">
                  embed map
                </a>
                <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:500px;}" }} />
              </div>
            </div>
          </Box>
        </Box>
      </SimpleGrid>





    </Layout>

  )
}

