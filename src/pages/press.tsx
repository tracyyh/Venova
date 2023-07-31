import * as React from 'react'
import TopMenuModal from '../components/TopMenuModal'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import { Box, VStack } from '@chakra-ui/react'
import PressSection from '../components/press-section/PressSection'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query MyQuery {
    prismicPress {
      data {
        press {
          date {
            text
          }
          title {
            text
          }
          blurb {
            richText
          }
          link {
            url
          }
        }
        banner_desc {
          text
        }
        banner_img {
          url
        }
        banner_title {
          text
        }
      }
    }
  }
`

const Press = props => {
  return (
    <body>
      <TopMenuModal />
      <Banner
        url={JSON.stringify(props.data.prismicPress.data.banner_img.url)}
        title={props.data.prismicPress.data.banner_title.text}
        subTitle={props.data.prismicPress.data.banner_desc.text}
      />
      <Box h='30px'></Box>
      <VStack paddingLeft={'12%'} w={'1175px'} paddingTop={'45%'} spacing='150px'>
        {props.data.prismicPress.data.press.map(x => {
          return (
            <PressSection
              title={x.title.text}
              content={x.blurb.richText[0].text}
              date={x.date.text}
              link={x.link.url}
            />
          )
        })}
      </VStack>
      <div flex-grow='1' style={{ minHeight: '500px' }}></div>
      <Footer />
    </body>
  )
}

export default Press
