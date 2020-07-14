import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled.article`
  a {
    text-decoration: none;
  }

  h2 {
    margin-bottom: 6px;
  }
`

interface Props {
  post: Post
}

const BlogPostPreview: FC<Props> = ({ post }) => (
  <Container>
    <Link to={post.fields.slug}>
      <h2>{post.frontmatter.title}</h2>
      <time
        dateTime={post.frontmatter.date_published}
        title={post.frontmatter.date_published_formatted}
      >
        {post.frontmatter.date_published_formatted}
      </time>
      <p>{post.excerpt}</p>
    </Link>
  </Container>
)

export default BlogPostPreview
