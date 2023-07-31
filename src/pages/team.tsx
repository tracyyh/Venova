import * as React from 'react'
import TopMenuModal from '../components/TopMenuModal'
import Footer from '../components/footer/Footer'
import Close from '../images/closeButton.png'
import Banner from '../components/banner/Banner'
import {
  MissionContainer,
  TitleText,
  SubtitleText,
  WhoWeAreContainer,
  CollaboratorsContainer,
  ModalText,
  ModalLine,
  ModalParagraph,
  SubModalText,
} from '../styles/TeamPageStyles'
import { Text, Card, CardBody, CardFooter, Flex, Image, Box, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    useDisclosure,
  } from '@chakra-ui/react'
import { StyledButton } from '../styles/ContactFormStyles'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
query myQuery {
  prismicTeamPage {
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
      logos {
        logo {
          url
        }
      }
      mission_desc {
        richText
      }
      mission_title {
        text
      }
      team_bios {
        name {
          text
        }
        picture {
          url
        }
        title {
          text
        }
        bio {
          text
        }
      }
      who_we_are_desc {
        richText
      }
      who_we_are_title {
        text
      }
    }
  }
}
`

function PartnerSection({ partners }) {
  return (
    <div>
      <Card
        overflow='hidden'
        variant='filled'
        bgColor={'FFFFFF'}
        align='center'
        className='p-1'
        width='100%'
        minHeight={'24rem'}>
        <CardBody paddingTop={'4rem'}>
          <Flex flex='1' gap='25' alignItems='center' flexWrap='wrap'>
            {partners.map(x => (
              <Image src={x.logo.url} />
            ))}
          </Flex>
          <StyledButton type='submit'>Learn More</StyledButton>
        </CardBody>
      </Card>
    </div>
  )
}



function TeamProfileSection({ team }) {
  return (
    <Box bg-color='#F8FBFF' paddingTop={'3%'}>
      <Card
        overflow='hidden'
        variant='filled'
        paddingRight={'8rem'}
        paddingLeft={'8rem'}
        paddingBottom={'100px'}
        bgColor={'#F8FBFF'}
        align='center'
        left={'200px'}
        className='p-1'
        width='90%'>
        <CardBody>
          <Flex flex='1' gap='10' alignItems='center' flexWrap='wrap'>
            {team.map(x => {
              const { isOpen, onOpen, onClose } = useDisclosure()
              return(
              <><div>
                <Box padding={'20px'}>
                  <Image sx={{ cursor: 'pointer' }} onClick={onOpen} borderRadius='full' boxSize='272px' src={x.picture.url} alt={x.name.text} />
                </Box>
                <Text align={'center'} fontSize={'lg'}>
                  {x.name.text}
                </Text>
                <Text align={'center'} fontSize={'sm'}>
                  {x.title.text}
                </Text>
              </div><Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay bg='none' backdropFilter='blur(10px)'/>
                  <ModalContent top="12%" minH="33rem" maxW="70rem">

                    <ModalBody>
                  <Image sx={{ cursor: 'pointer', position: 'absolute', right: '1rem', top: '1rem'}} onClick={onClose} src = {Close}></Image>
                  <Image sx={{ cursor: 'pointer', position: 'absolute', left: '1rem', top: '1rem', padding: '1rem'}} borderRadius='full' boxSize='157px' src={x.picture.url}></Image>
                  <ModalText> {x.name.text}</ModalText>
                  <SubModalText>{x.title.text}</SubModalText>
                  <ModalLine/>
                  <ModalParagraph>{x.bio.text}</ModalParagraph>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                  </ModalContent>
                </Modal></>
              )
            })}
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

const Team = props => {
  return (
    <body>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
      <TopMenuModal />
      <Banner
        url={JSON.stringify(props.data.prismicTeamPage.data.banner_img.url)}
        title={props.data.prismicTeamPage.data.banner_title.text}
        subTitle={props.data.prismicTeamPage.data.banner_desc.text}
      />
      <MissionContainer>
        <TitleText>{props.data.prismicTeamPage.data.mission_title.text}</TitleText>
        <SubtitleText>
          {props.data.prismicTeamPage.data.mission_desc.richText[0].text}
        </SubtitleText>
      </MissionContainer>
      <WhoWeAreContainer>
        <TitleText>{props.data.prismicTeamPage.data.who_we_are_title.text}</TitleText>
        <SubtitleText>
        {props.data.prismicTeamPage.data.who_we_are_desc.richText[0].text}
        </SubtitleText>
        <TeamProfileSection team={props.data.prismicTeamPage.data.team_bios} />
      </WhoWeAreContainer>
      <CollaboratorsContainer>
        <TitleText>Collaborators</TitleText>
        <PartnerSection partners={props.data.prismicTeamPage.data.logos} />
      </CollaboratorsContainer>
      <div flex-grow='1' style={{ minHeight: '3600px' }} color={'gray'}></div>
      <Footer />
    </body>
  )
}

export default Team