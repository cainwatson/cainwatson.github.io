import React from 'react'
import styled from '@emotion/styled'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import HomeHero from '@components/home/HomeHero'
import CaseStudies from './index/CaseStudies'

const Content = styled.div`
  margin-top: 40px;
  padding: 20px;
  display: block;

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 80px;
  }
`

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <Content>
      <CaseStudies />
    </Content>
  </Layout>
)

export default HomePage
