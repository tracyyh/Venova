import React from 'react'
import {
  Circle1,
  FooterBox,
  VenovaText,
  VerticalLine,
  Location,
  Copyright,
  Links,
  LinkGrid,
  AboutSubsectionOne,
  AboutSubsectionTwo,
} from './FooterStyles'
import logo from '../../images/VenovaFooterLogo.png'
import linkedinIcon from '../../images/linkedin-icon.png'
import { Box, Stack } from '@chakra-ui/react'

export default function LargeWithLogoLeft() {
  return (
    <FooterBox color={'#006161'}>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://fonts.googleapis.com/css?family=Poppins'
      />
      <VenovaText>
        <img src={logo} width={'100%'} height={'100%'} />
      </VenovaText>

      <VerticalLine />
      <LinkGrid>
        <Links href='/'>Home</Links>
        <Links>About</Links>
        <Links href='/team'>Team</Links>
        <Links href='/press'>Press</Links>
        <Links href='/contact'>Contact</Links>
      </LinkGrid>
      <AboutSubsectionOne href='/solution'>Our Solution</AboutSubsectionOne>
      <AboutSubsectionTwo href='/options'>Birth Control Options</AboutSubsectionTwo>
      <Box>
        <Location>Cambridge, MA 02119</Location>
        <Circle1>
          <a href='https://www.linkedin.com/company/venova-technologies-inc/'>
            <img src={linkedinIcon} width={'100%'} height={'100%'} />
          </a>
        </Circle1>
      </Box>
      <Copyright>
        <Stack>
          <p>©2023 </p>
          <p>Venova Technologies, Inc. </p>
          <p>All Rights Reserved.</p>
        </Stack>
      </Copyright>
    </FooterBox>
  )
}
