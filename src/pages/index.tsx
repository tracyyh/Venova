import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Image,
  Center,
  Box,
  Spacer,
  CardHeader,
  SimpleGrid,
  Link,
} from '@chakra-ui/react'
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homeStyle.css'
import { graphql, navigate } from 'gatsby'
import HomeBanner from '../components/home-banner/HomeBanner'
import { Container, StyledButton1, StyledButton2, Titles } from '../styles/HomePageStyles'
import TopMenuModal from '../components/TopMenuModal'
import Footer from '../components/footer/Footer'

export const pageQuery = graphql`
  query MyQuery {
    prismicHomePage {
      data {
        banner_img {
          url
        }
        banner_desc {
          text
        }
        banner_title {
          text
        }
        mission_statement {
          richText
        }
        section_group_1 {
          blurb {
            richText
          }
          image {
            url
          }
        }
        section_group_2 {
          author {
            richText
          }
          quip {
            richText
          }
          year {
            richText
          }
        }
        section_group_3 {
          collaborators {
            url
          }
        }
        section_group_4 {
          press_link {
            url
          }
          press_title {
            text
          }
        }
        section_title_1 {
          text
        }
        section_title_2 {
          text
        }
        section_title_3 {
          text
        }
        section_title_4 {
          text
        }
      }
    }
  }
`

function ProblemSection({ image, description }) {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='unstyled'>
      <Image boxSize='60px' src={image} className='m-3' />
      <Stack className='mt-3'>
        <CardBody>{description}</CardBody>
      </Stack>
    </Card>
  )
}

function QuipSection({ quip }) {
  return (
    <Center h='300px' bgColor={'#FFF0ED'} borderRadius={'30px'}>
      <Box w='900px'>
        <p className='quip'>{quip}</p>
      </Box>
    </Center>
  )
}

function TestimonialSection({ testimonials }) {
  return (
    <Flex gap={2}>
      {testimonials.map(x => (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='unstyled'
          width='100%'
          className='p-5'>
          <Stack>
            <Box>{x.quip.richText[0].text}</Box>

            <Flex>
              <Spacer />
              <Box>--{x.author.richText[0].text + ', ' + x.year.richText[0].text}</Box>
            </Flex>
          </Stack>
        </Card>
      ))}
    </Flex>
  )
}

function PartnerSection({ partners }) {
  return (
    <div>
      <Card
        overflow='hidden'
        variant='filled'
        bgColor={'#F8FBFB'}
        align='center'
        className='p-1'
        width='100%'
        minHeight={'24rem'}>
        <CardBody>
          <Flex flex='1' gap='7rem' alignItems='center' flexWrap='wrap'>
            {partners.map(x => (
              <Box>
                <Image
                  border={'0.5px solid #151313'}
                  borderRadius='full'
                  boxSize='140px'
                  src={x.collaborators.url}
                  alt='collaborators'
                />
              </Box>
            ))}
          </Flex>
          <StyledButton1 type='submit' onClick={() => navigate('/team')}>
            See More
          </StyledButton1>
        </CardBody>
      </Card>
    </div>
  )
}

function PressSection({ press }) {
  return (
    <div>
      <Card
        overflow='hidden'
        variant='unstyled'
        align='center'
        className='p-1 m-3'
        width='100%'
        minHeight={'23rem'}>
        <CardBody>
          <SimpleGrid spacing={6} templateColumns='repeat(3, 1fr)'>
            {press.map(x => (
              <Card
                bgColor={'#FFF0ED'}
                borderColor={'black'}
                borderWidth={'1px'}
                minHeight={'16rem'}
                maxWidth={'23rem'}
                gap={'3rem'}>
                <CardHeader>
                  <Heading size='md' font-fontWeight={'500'}>
                    {' '}
                    {x.press_title.text}
                  </Heading>
                </CardHeader>

                <CardFooter>
                  <Link href={x.press_link.url} isExternal>
                    <b>Read More</b> <ArrowForwardIcon mx='2px' />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <StyledButton2 type='submit' className='m-4' onClick={() => navigate('/press')}>
        See More
      </StyledButton2>
    </div>
  )
}

const Home = props => {
  return (
    <>
      <body>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://fonts.googleapis.com/css?family=Poppins'
        />
        <TopMenuModal />
        <Box h='30px'></Box>
        <HomeBanner
          url={JSON.stringify(props.data.prismicHomePage.data.banner_img.url)}
          title={props.data.prismicHomePage.data.banner_title.text}
          subTitle={props.data.prismicHomePage.data.banner_desc.text}
          link='/solution'></HomeBanner>
        <Container>
          <div className='row'></div>
          <div className='row m-5'>
            <div className='m-5'>
              <Titles>{props.data.prismicHomePage.data.section_title_1.text}</Titles>
            </div>
            <Flex>
              {props.data.prismicHomePage.data.section_group_1.map(x => {
                return (
                  <div className='p-3 m-1'>
                    <ProblemSection image={x.image.url} description={x.blurb.richText[0].text} />
                  </div>
                )
              })}
            </Flex>
          </div>
          <Box className='row m-5 p-5'>
            <QuipSection
              quip={props.data.prismicHomePage.data.mission_statement.richText[0].text}
            />
          </Box>
          <div className='row m-5'>
            <div className='m-5'>
              <Titles>{props.data.prismicHomePage.data.section_title_2.text}</Titles>
            </div>
            <TestimonialSection testimonials={props.data.prismicHomePage.data.section_group_2} />
          </div>
          <div className='row mt-5'>
            <div className='partnerTitle'>
              <div className=' partnerTitlePos'>
                <Titles>{props.data.prismicHomePage.data.section_title_3.text}</Titles>
              </div>
            </div>
            <PartnerSection partners={props.data.prismicHomePage.data.section_group_3} />
          </div>
          <div className='row m-5'>
            <div className='m-5'>
              <Titles>{props.data.prismicHomePage.data.section_title_4.text}</Titles>
            </div>

            <PressSection press={props.data.prismicHomePage.data.section_group_4} />
          </div>
          <div className='row'>
            <Box h='200px'></Box>
          </div>
        </Container>
        <div flex-grow='1' style={{ minHeight: '800px' }} color={'gray'}></div>

        <Footer />
      </body>
    </>
  )
}

export default Home
