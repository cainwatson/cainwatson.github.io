import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import BlogPostPreviewList from '@components/blog/BlogPostPreviewList'

const Content = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 1024px) {
    width: 60%;
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Content>
      <section>
        <BlogPostPreviewList
          posts={data.allMarkdownRemark.edges.map(edge => edge.node)}
        />
      </section>
    </Content>
  </Layout>
)

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date_published], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            slug
            title
            tags
            date_updated
            date_published
            date_published_formatted: date_published(
              formatString: "MMMM DD, YYYY"
            )
            date_updated_formatted: date_updated(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
