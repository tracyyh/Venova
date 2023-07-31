import React from 'react'
import { BannerContainer, BannerTitle, BannerSubtitle } from './BannerStyles'

export default function HeaderImg({ url, title, subTitle }) {
  return (
    <BannerContainer
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 27.08%, rgba(0, 0, 0, 0.57) 57.29%, rgba(0, 0, 0, 0.8) 86.46%), url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
      <BannerTitle>{title}</BannerTitle>
      <BannerSubtitle>{subTitle}</BannerSubtitle>
    </BannerContainer>
  )
}
