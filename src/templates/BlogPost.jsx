import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

import './night-owl-theme.css'

const Container = styled.section`
  margin: 0 10vw;
  padding: 20px;

  code {
    font-family: 'Fira Code', monospace;
  }
`

const Tags = styled.ul`
  margin: -4px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.li`
  margin: 4px;
  padding: 6px 8px;
  color: ${props => props.theme.colors.lightPink};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 6px;
`

const Dates = styled.span`
  margin: 14px 0;
  display: block;
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const {
    title,
    tags,
    date_published,
    date_updated,
    date_published_formatted,
    date_updated_formatted,
  } = post.frontmatter

  return (
    <Layout>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title={title} />
      <Container>
        <h1>{title}</h1>
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Dates>
          <time dateTime={date_published} title={date_published_formatted}>
            {date_published_formatted}
          </time>
          {date_updated && (
            <>
              , Updated&nbsp;
              <time dateTime={date_updated} title={date_updated_formatted}>
                {date_updated_formatted}
              </time>
            </>
          )}
        </Dates>
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
    }
  }
`
