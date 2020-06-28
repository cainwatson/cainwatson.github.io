import React from 'react'
import styled from '@emotion/styled'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import HomeHero from '@components/home/HomeHero'
import CaseStudyList from '@components/home/CaseStudyList'
import caseStudies from '../data/caseStudies.json'

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

const CaseStudyHeader = styled.h1`
  max-width: 1232px;
  padding: 14px;
  margin: 30px 0;
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightPink};
  text-align: center;

  @media (min-width: 1024px) {
    width: 100%;
    margin: 50px 0;
  }
`

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <Content>
      <CaseStudyHeader>Case Studies</CaseStudyHeader>
      <CaseStudyList caseStudies={caseStudies} />
    </Content>
  </Layout>
)

export default HomePage
