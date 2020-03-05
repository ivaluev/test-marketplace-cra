import React from 'react'
import { Segment, Container, List, Image } from 'semantic-ui-react'
import styled from '@emotion/styled'

export default function Footer() {
  return (
    <FooterSegment vertical>
      <Container textAlign="center">
        {/* <Divider section /> */}
        <Image centered size="mini" src="/logo192.png" />
        <List horizontal divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </FooterSegment>
  )
}

const FooterSegment = styled(Segment)`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: inherit;
  position: relative;
  padding: 1em 1em;
  font-size: 1rem;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  background: none transparent;
  border-radius: 0;
  border: none;
  border-bottom: none;
  border-top: 1px solid #dddddd;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08) inset !important;
  background-color: #f7f7f7 !important;
  padding-top: 2em;
`
