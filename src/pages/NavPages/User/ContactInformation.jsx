import {
  Heading,
  AspectRatio
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../../components/Layout'

export default function ContactInformation() {
  return (
    <Layout>
      <Heading mb={5}>
        CONTACT INFORMATION
      </Heading>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width={1280} height={720} id="gmap_canvas" src="https://maps.google.com/maps?q=Metro%20Davao&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
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
