import React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer`
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.colors.primary};
`

const Footer = () => <Container>im in the footer!</Container>

export default Footer
