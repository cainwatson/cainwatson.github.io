import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    margin: 0 10px;
  }

  @media (min-width: 1024px) {
    margin: 0 -22px;
    padding: 8px;
    flex-wrap: nowrap;
    align-items: center;

    > div {
      margin: 22px;
      max-height: 600px;
    }
  }
`

const CatImage = styled(Img)`
  width: 460px;
  border-radius: 8px;
`

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404" />
    <Container>
      <CatImage
        fluid={data.catImage.childImageSharp.fluid}
        alt="Confused brown tabby cat wearing shower cap."
      />
      <div>
        <h1>Uh oh.</h1>
        <p>I couldn't find that page.</p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    catImage: file(relativePath: { eq: "404-cat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 460) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
