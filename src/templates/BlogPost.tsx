import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Header from './blogPost/BlogPostHeader'

const Container = styled.section`
  --grvsc-padding-h: 0.9rem;
  --grvsc-padding-v: 0.9rem;

  margin: 0 auto;
  padding: 20px;

  code {
    font-family: 'Fira Mono', monospace;
    font-size: 0.9rem;
  }

  /* Inline code blocks */
  *:not(pre) > code {
    padding: 2px 0.2em;
    color: #d6deeb;
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 6px;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

interface Props {
  data: {
    post: Post
  }
}

const BlogPostTemplate: FC<Props> = ({ data }) => {
  const { post } = data
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

export default BlogPostTemplate

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
