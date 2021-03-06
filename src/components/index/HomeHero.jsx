import React from 'react'
import styled from '@emotion/styled'

import BackgroundImage from '@images/home-hero-background.svg'
import HomeCard from './homeHero/HomeHeroCard'

const Background = styled(BackgroundImage)`
  position: absolute;
  top: calc(-58vh + -20vw);
  left: calc(-45vh + 10vw);
  width: calc(233vh + 30vw);
  height: auto;
  z-index: -1;
`

const ContentContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const HomeHero = () => (
  <>
    <Background />
    <ContentContainer>
      <HomeCard />
    </ContentContainer>
  </>
)

export default HomeHero
