
import {ContactContainer, StyledTitle, SubmitButton, Input, Label, LabelGrid, TextArea, TextAreaLabel, PinkBox} from './ContactFormStyles'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast, Box } from '@chakra-ui/react'

  export default function ContactForm() {

    const form = React.useRef<HTMLFormElement>(null);
    const toast = useToast()

    const sendEmail = (e) => {
      e.preventDefault();
      if(form.current != null) {
      emailjs.sendForm('venova-site', 'venova-template', form.current, 'weQiGV3YxEJk76NKN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
      }
    };

    return (
      <ContactContainer>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
        <StyledTitle>Let's Get in Touch</StyledTitle>
        <PinkBox>
        <form ref={form} onSubmit={sendEmail}> 
        <LabelGrid>
        <Label>Name
        <Input name="name" type={'text'}/>
        </Label>
        <Label>Email
        <Input name="email"  type={'email'}/>
        </Label>
        <Label> Subject
        <Input name="subject"  type={'text'}/>
        </Label>
        </LabelGrid>
        <TextAreaLabel> Your Message
          <TextArea name="message"/>
        </TextAreaLabel>
        <SubmitButton type='submit'
                  onClick={() =>
                    toast({
                      duration: 4000,
                      isClosable: true,
                      variant: 'left-accent', 
                      status: 'info',
                      position: 'top',
                      title: 'Message Sent!',
                      description: "Our team will get back to you shortly.",
                    })
                  }
        >Send Message</SubmitButton>
        </form>
        </PinkBox>
        </ContactContainer>
    )
  }

