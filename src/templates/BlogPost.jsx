import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Header from './blogPost/BlogPostHeader'

import './blogPost/night-owl-theme.css'

const Container = styled.section`
  margin: 0 auto;
  padding: 20px;

  code {
    font-family: 'Fira Mono', monospace;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const { title } = post.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Header post={post} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const posteQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        tags
        date_updated
        date_published
        date_published_formatted: date_published(formatString: "MMMM DD, YYYY")
        date_updated_formatted: date_updated(formatString: "MMMM DD, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
