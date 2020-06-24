import React from 'react'
import HomeCard from './HomeCard'
import styled from '@emotion/styled'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomeHero = () => (
  <Container>
    <HomeCard />
  </Container>
)

HomeHero.propTypes = {}

export default HomeHero
