import React, { FC } from 'react'
import styled from '@emotion/styled'

import BlogPostPreview from './BlogPostPreview'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  > li {
    margin-bottom: 60px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

interface Props {
  posts: Post[]
}

const BlogPostPreviewList: FC<Props> = ({ posts }) => (
  <List>
    {posts.map(post => (
      <li>
        <BlogPostPreview key={post.frontmatter.title} post={post} />
      </li>
    ))}
  </List>
)

export default BlogPostPreviewList
