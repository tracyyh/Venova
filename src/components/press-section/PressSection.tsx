import React from 'react'
import { StyledButton } from '../../styles/ContactFormStyles'
import { Divider, Title, Date, Context, Button } from './PressSectionStyles'
import { navigate } from 'gatsby'

export default function PressSection(prop: {
  date: string
  title: string
  content: string
  link: string
}) {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
      <Date>{prop.date}</Date>
      <Title>{prop.title}</Title>
      <Context>{prop.content}</Context>
      <Button onClick={() => navigate(prop.link)}>
        <b>Learn More</b>
      </Button>
      <Divider />
    </div>
  )
}
