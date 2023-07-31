import * as React from 'react'
import TopMenuModal from '../components/TopMenuModal'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import { Container, FundingContainer, Titles, TitlesWText } from '../styles/AboutPageStyles'
import CheckIcon from '../images/check-icon.png'

import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  Heading,
  Stack,
  Image,
  Spacer,
  StackDivider,
  SimpleGrid,
} from '@chakra-ui/react'
import './aboutStyle.css'
import { graphql, navigate } from 'gatsby'

export const pageQuery = graphql`
  query MyQuery {
    prismicAboutSolutions {
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
        characteristics {
          content {
            text
          }
          image {
            url
          }
          title {
            text
          }
        }
        characteristics_blurb {
          text
        }
        characteristics_title {
          text
        }
        chart_info {
          circles
          low
          reversible
          classname {
            text
          }
          cost {
            text
          }
          effectiveness {
            text
          }
          subtitle {
            text
          }
          title {
            text
          }
          icon {
            url
          }
        }
        chart_title {
          text
        }
        partner_title {
          text
        }
        partners {
          partner {
            url
          }
        }
        quicklinks {
          displayed_name {
            text
          }
          icon {
            url
          }
          link {
            text
          }
        }
        timeline {
          subtitles {
            text
          }
          title {
            text
          }
          transform
        }
        timeline_blurb {
          text
        }
        timeline_title {
          text
        }
      }
    }
  }
`

function QuickLinksSection({ links }) {
  return (
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={6}
      className='p-5'
      bgColor={'#FFF0ED'}
      borderRadius={'10px'}>
      {links.map(x => {
        return (
          <Flex w='400px' className='links ' onClick={() => navigate(x.link.text)}>
            <div className='mt-3 '>
              <Image src={x.icon.url} />
            </div>
            <p className='m-3'>{x.displayed_name.text}</p>
          </Flex>
        )
      })}
    </Grid>
  )
}

function CharacteristicsSection({ characteristics }) {
  return (
    <>
      <Grid templateColumns='repeat(2, 4fr)' gap={3} className='narrow' borderRadius={'10px'}>
        {characteristics.map(x => {
          return (
            <>
              <Box className='posadj' w='400px'>
                <Flex mt='6' bgColor={'white'} className='p-5 top-rounded blue-border1'>
                  <Box w='200px'>
                    <Heading size='md'>{x.title.text}</Heading>
                  </Box>
                  <Spacer />
                  <Box w='40px' h='40px'>
                    <Image src={x.image.url} borderRadius='lg' />
                  </Box>
                </Flex>

                <Box bgColor={'#FFF0ED'} className='p-5 bottom-rounded blue-border1' h='220'>
                  <p>{x.content.text}</p>
                </Box>
              </Box>
            </>
          )
        })}
      </Grid>
    </>
  )
}

function ChartSection({ info }) {
  return (
    <Stack id={'chart'} divider={<StackDivider />} spacing='0'>
      <Flex h='60px' bgColor={'#405489'} color={'white'} className='top-rounded'>
        <Center w='300px'>Type</Center>
        <Center w='300px'>Effectiveness</Center>
        <Center w='300px'>Low Side Effects</Center>
        <Center w='300px'>Reversible</Center>
        <Center w='300px'>Cost</Center>
      </Flex>

      {info.map(x => {
        return (
          <Flex
            h='145px'
            className={x.classname.text}
            bgColor={x.title.text === 'Venova' ? '#FFF0ED' : 'white'}>
            <Center w='350px'>
              <Flex>
                <Image src={x.icon.url} className='mt-1'></Image>
                <Box w='30px'></Box>
                <Stack>
                  <b>{x.title.text}</b>
                  <div>{x.subtitle.text}</div>
                </Stack>
              </Flex>
            </Center>
            <Box p={10} w='250px'>
              <Stack>
                <Flex>
                  <div className={x.circles > 0 ? 'circle' : 'circle empty'} id='circle1'></div>
                  <div className={x.circles > 1 ? 'circle' : 'circle empty'} id='circle1'></div>
                  <div className={x.circles > 2 ? 'circle' : 'circle empty'} id='circle1'></div>
                  <div className={x.circles > 3 ? 'circle' : 'circle empty'} id='circle1'></div>
                </Flex>

                <Box>{x.effectiveness.text}</Box>
              </Stack>
            </Box>

            <Center w='300px'>
              {x.low ? <Image src={CheckIcon} w='30px' h='30px' className='mt-1'></Image> : <></>}
            </Center>
            <Center w='300px'>
              {x.reversible ? (
                <Image src={CheckIcon} w='30px' h='30px' className='mt-1'></Image>
              ) : (
                <></>
              )}
            </Center>
            <Center w='300px'>
              <b>{x.cost.text}</b>
            </Center>
          </Flex>
        )
      })}
    </Stack>
  )
}

function TimelineSection({ timeline }) {
  return (
    <div id={'timeline'}>
      <TitlesWText>{timeline.timeline_title.text}</TitlesWText>
      <p>{timeline.timeline_blurb.text}</p>
      <div className='m-5 vertical-line'>
        {timeline.timeline.map(x => {
          const subtitles = x.subtitles.text.split(',')
          return (
            <Flex>
              <Box
                className={
                  new Date().getFullYear() < Number(x.title.text)
                    ? 'square-marker rotate90'
                    : 'square-marker'
                }
                border={'solid'}
                borderColor={'#16315C'}
                bgColor={'#FFF0ED'}
                borderWidth={'1px'}></Box>

              <Card
                className='timeline-content'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                bgColor={'#F8FBFF'}
                variant='unstyled'>
                <CardBody className='m-5'>
                  <Heading size='lg' color={'#3050a4'}>
                    {x.title.text}
                    {}
                  </Heading>
                  <Stack>
                    {subtitles.map(y => {
                      return (
                        <div>
                          <Flex>
                            {subtitles.length !== 1 ? (
                              <Box className='m-2' color={'#405489'}>
                                {' '}
                                ——{' '}
                              </Box>
                            ) : (
                              <></>
                            )}
                            <p className='m-2'>{y}</p>
                          </Flex>
                        </div>
                      )
                    })}
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
          )
        })}{' '}
      </div>
    </div>
  )
}

function PartnerSection({ partners }) {
  return (
    <div>
      <Card
        left='-50px'
        overflow='hidden'
        variant='unstyled'
        align='center'
        className='mx-auto'
        width='100%'>
        <CardBody>
          <Flex flex='1' gap='5rem' flexWrap='wrap'>
            {partners.map(x => (
              <Box>
                <Image
                  border={'1px solid #405489'}
                  borderRadius='full'
                  boxSize='160px'
                  src={x.partner.url}
                />
              </Box>
            ))}
          </Flex>
        </CardBody>
      </Card>
    </div>
  )
}

const OurSolutions = props => {
  return (
    <body>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://fonts.googleapis.com/css?family=Poppins'
      />
      <TopMenuModal />
      <Banner
        url={JSON.stringify(props.data.prismicAboutSolutions.data.banner_img.url)}
        title={props.data.prismicAboutSolutions.data.banner_title.text}
        subTitle={props.data.prismicAboutSolutions.data.banner_desc.text}></Banner>
      <Container>
        <div className='row m-5 p-5'>
          <Titles>Quick Links</Titles>
          <QuickLinksSection links={props.data.prismicAboutSolutions.data.quicklinks} />
        </div>

        <Box bg='#F8FBFF'>
          <div className='row m-5 p-5'>
            <TitlesWText>
              {props.data.prismicAboutSolutions.data.characteristics_title.text}
            </TitlesWText>
            <p>{props.data.prismicAboutSolutions.data.characteristics_blurb.text}</p>
          </div>

          <CharacteristicsSection
            characteristics={props.data.prismicAboutSolutions.data.characteristics}
          />
        </Box>

        <div className='row m-5 p-5'>
          <Titles>Non-Hormonal Birth Control Comparison Chart</Titles>
          <div>
            <ChartSection info={props.data.prismicAboutSolutions.data.chart_info} />
          </div>
        </div>
        <Box bg='#F8FBFF'>
          <div className='row m-5 p-5'>
            <TimelineSection timeline={props.data.prismicAboutSolutions.data} />
          </div>
        </Box>
        <div className='row m-5 p-5'>
          <Titles>Funding Support</Titles>
          <FundingContainer>
            <PartnerSection partners={props.data.prismicAboutSolutions.data.partners} />
          </FundingContainer>
        </div>

        <div className='row'>
          <Box h='200px'></Box>
        </div>
        <Footer />
      </Container>
    </body>
  )
}

export default OurSolutions
