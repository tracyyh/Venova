import * as React from 'react'
import TopMenuModal from '../components/TopMenuModal'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Tag,
  HStack,
} from '@chakra-ui/react'
import './aboutStyle.css'
import { Container, Titles, TitlesWText } from '../styles/AboutPageStyles'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query MyQuery {
    prismicAboutOptions {
      data {
        banner_desc {
          text
        }
        banner_img {
          url
        }
        banner_title {
          text
        }
        bc_types {
          cost {
            text
          }
          description {
            text
          }
          effectiveness {
            text
          }
          frequency {
            text
          }
          side_effects {
            text
          }
          tags {
            text
          }
          title {
            text
          }
        }
        history_blurb {
          text
        }
        history_title {
          text
        }
        section_1_blurb {
          text
        }
        section_title_1 {
          text
        }
        timeline {
          subtitle {
            text
          }
          title {
            text
          }
          transform
        }
      }
    }
  }
`

function UnderstandBirthControlSection({ methods }) {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple className='mt-5'>
        {methods.map(x => {
          const tags = x.tags.text.split(',')
          return (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' className='p-2' flex='1' textAlign='left' fontSize={'25px'}>
                    <b>{x.title.text}</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack>
                  <p className='pt-3 pb-3'> {x.description.text}</p>
                  <p>
                    <b>Effectiveness:</b> {x.effectiveness.text}
                  </p>
                  <p>
                    <b>Side Effect:</b> {x.side_effects.text}
                  </p>
                  <p>
                    <b>Cost:</b> {x.cost.text}
                  </p>
                  <p>
                    {' '}
                    <b>Frequency:</b> {x.frequency.text}
                  </p>
                  <HStack spacing={4}>
                    {tags.map(y => (
                      <Tag size={'lg'} key={y} variant='solid' bgColor='#FFF0ED' color={'#16315C'}>
                        {y}
                      </Tag>
                    ))}
                  </HStack>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}

function TimelineSection({ timeline }) {
  return (
    <>
      <TitlesWText>{timeline.history_title.text}</TitlesWText>
      <p>{timeline.history_blurb.text}</p>
      <div className='m-5 vertical-line2'>
        {timeline.timeline.map(x => {
          return (
            <Flex>
              <Box
                className='square-marker'
                border={'solid'}
                borderColor={'#16315C'}
                bgColor={'#FFF0ED'}
                borderWidth={'1px'}></Box>

              <Card
                className='timeline-content'
                direction={{ base: 'column', sm: 'row' }}
                maxWidth={'90%'}
                overflow='hidden'
                backgroundColor={'#F8FBFF'}
                variant='unstyled'>
                <CardBody className='m-5'>
                  <Heading size='lg' color={'#3050a4'}>
                    {x.title.text}
                  </Heading>
                  <Stack>
                    <div>
                      <Flex>
                        <p className='m-2'>{x.subtitle.text}</p>
                      </Flex>
                    </div>
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
          )
        })}{' '}
      </div>
    </>
  )
}

const BCOptions = props => {
  return (
    <body>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://fonts.googleapis.com/css?family=Poppins'
      />
      <TopMenuModal />
      <Banner
        url={JSON.stringify(props.data.prismicAboutOptions.data.banner_img.url)}
        title={props.data.prismicAboutOptions.data.banner_title.text}
        subTitle={props.data.prismicAboutOptions.data.banner_desc.text}></Banner>
      <Container>
        <div className='row m-5 p-5'>
          <TitlesWText>{props.data.prismicAboutOptions.data.section_title_1.text}</TitlesWText>
          <p>{props.data.prismicAboutOptions.data.section_1_blurb.text}</p>
          <UnderstandBirthControlSection methods={props.data.prismicAboutOptions.data.bc_types} />
        </div>
        <Box backgroundColor={'#F8FBFF'}>
          <div className='row m-5 p-5'>
            <TimelineSection timeline={props.data.prismicAboutOptions.data} />
          </div>
        </Box>

        <div className='row'>
          <Box h='200px'></Box>
        </div>
        <Footer />
      </Container>
    </body>
  )
}

export default BCOptions
