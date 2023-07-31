import * as React from 'react'
import TopMenuModal from '../components/TopMenuModal'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact-form/ContactForm'
import { Box } from '@chakra-ui/react'

export default function contact() {
  return (
    <div>
      <TopMenuModal />
      <Box h='30px'></Box>
      <div>
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}
