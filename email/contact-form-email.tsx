import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Section,
    Preview,
    Text
} from '@react-email/components'

type ContactFormEmailProps = {
    message: string,
    senderEmail: string,
}

export default function ContactFormEmail({message, senderEmail}:ContactFormEmailProps) {
  return (
      <Html>
          <Head />
          <Preview>New message from your portfolio contact form</Preview>
              <Body>
                  <Container>
                    <Section>
                        <Heading>
                          You received the following massage from the contact form
                        </Heading>
                        <Text>
                          {message}
                        </Text>
                        <Hr />
                        <Text>The senders email is : {senderEmail}</Text>
                    </Section>
                  </Container>
              </Body>
    </Html>
  )
}
