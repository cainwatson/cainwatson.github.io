import React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer`
  padding: 40px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightPink};
  text-align: center;
`

const Footer = () => (
  <Container>&copy; {new Date().getFullYear()} Cain Watson</Container>
)

export default Footer
