import React from 'react'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import HomeHero from '@components/home/HomeHero'

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
  </Layout>
)

export default HomePage
