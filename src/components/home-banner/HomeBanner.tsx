import React from 'react'
import { BannerContainer, BannerTitle, BannerSubtitle, BannerButton } from './HomeBannerStyles'
import { navigate } from 'gatsby'

export default function HeaderImg({ url, title, subTitle, link }) {
  return (
    <BannerContainer
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 36.59%, rgba(0, 0, 0, 0.85) 63.27%, #000000 89.03%), url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />  
      <BannerTitle>{title}</BannerTitle>
      <BannerSubtitle>{subTitle}</BannerSubtitle>
      <BannerButton onClick={() => navigate(link)}>Learn More</BannerButton>
    </BannerContainer>
  )
}
