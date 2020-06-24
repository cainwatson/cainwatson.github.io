import React from 'react'
import styled from '@emotion/styled'

const Container = styled.section`
  max-width: 450px;
  height: min-content;
  padding: 36px;
  border: 4px solid ${props => props.theme.colors.primary};
  text-align: center;
`

const HomeCard = () => (
  <Container>
    <h1>Hi, I'm Cain</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </p>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip.
    </p>
  </Container>
)

export default HomeCard
