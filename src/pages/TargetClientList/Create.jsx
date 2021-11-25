import { 
  Heading, 
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel 
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import Figure1 from './Forms/Figure1'
import Figure5 from './Forms/Figure5'
import Figure2 from './Forms/Figure2/Figure2'

export default function Create() {

  return (
    <Layout>
      <Heading mb={5}>Add New Client</Heading>
      <Accordion allowToggle >
        {/* Figure 1 */}
        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                Figure 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Figure1/>
          </AccordionPanel>
        </AccordionItem>
        {/* Figure 2 */}
        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                Figure 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Figure2/>
          </AccordionPanel>
        </AccordionItem>
        {/* Figure 5 */}
        <AccordionItem>
          <h2>
            <AccordionButton  _expanded={{ bg: "teal", color: "white" }}>
              <Box flex="1" textAlign="left">
                Figure 5
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Figure5/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Layout>
  )
}
