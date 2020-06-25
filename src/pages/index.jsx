import React from 'react'
import styled from '@emotion/styled'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import HomeHero from '@components/home/HomeHero'
import CaseStudyList from '@components/home/CaseStudyList'

const Content = styled.div`
  padding: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 80px;
  }
`

const CaseStudyHeader = styled.h1`
  max-width: 1300px;
  width: 100%;
  padding: 14px;
  margin: 30px 0;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightPink};
  text-align: center;

  @media (min-width: 1024px) {
    margin: 50px 0;
  }
`

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <Content>
      <CaseStudyHeader>Case Studies</CaseStudyHeader>
      <CaseStudyList
        caseStudies={[
          {
            name: 'Draw It!',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            linkSourceCode: 'https://github.com/JustDrawIt/drawit',
            linkLive: 'https://cainwatson.com/drawit',
            images: [
              {
                src: 'https://via.placeholder.com/700',
                description: 'Lorem ipsum dolor sit amet.',
              },
            ],
          },
        ]}
      />
    </Content>
  </Layout>
)

export default HomePage
