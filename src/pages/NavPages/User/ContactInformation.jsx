import {
  Heading,
  AspectRatio,
  Box, HStack, Link,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../../components/Layout'
export default function ContactInformation() {
  return (
    <Layout>
      <Heading mb={5}>
        CONTACT INFORMATION
      </Heading>

      <Box  marginY={5} p={6}>
        <HStack>
          <Text>Contact Number:</Text>
          <Text>09764832898</Text>
        </HStack>
        <HStack>
          <Text>Email:</Text>
          <Link color='blue' href='https://mail.google.com/mail/u/0/#inbox?compose=new' isExternal> mangandakita@gmail.com</Link>
          <Text></Text>
        </HStack>
        <HStack>
          <Text>Address:</Text>
          <Text>
            Cabantian, Forestal Rd, Davao City, Davao del Sur, Philippines</Text>
        </HStack>
      </Box>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width={1280} height={720} id="gmap_canvas" src="https://maps.google.com/maps?q=Cabantian,%20Forestal%20Rd,%20Davao%20City,%20Davao%20del%20Sur,%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
          <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/" />
          <br />
          <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:720px;width:1280px;}" }} />
          <a href="https://www.embedgooglemap.net">
            embedgooglemap.net</a>
          <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:720px;width:1280px;}" }} />
        </div>
      </div>
    </Layout>

  )
}
