import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.section`
  margin-bottom: 24px;
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

const BlogPostHeader = ({ post }) => {
  const {
    title,
    tags,
    date_published,
    date_updated,
    date_published_formatted,
    date_updated_formatted,
  } = post.frontmatter

  return (
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
    </Container>
  )
}

BlogPostHeader.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      date_published: PropTypes.string.isRequired,
      date_updated: PropTypes.string.isRequired,
      date_published_formatted: PropTypes.string.isRequired,
      date_updated_formatted: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogPostHeader
