import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.header`
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

const SubHeader = styled.div`
  margin: 14px 0;
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
  const { readingTime } = post.fields

  return (
    <Container>
      <h1>{title}</h1>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <SubHeader>
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
        <span>&nbsp;&middot; {readingTime.text}</span>
      </SubHeader>
    </Container>
  )
}

BlogPostHeader.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      date_published: PropTypes.string.isRequired,
      date_updated: PropTypes.string,
      date_published_formatted: PropTypes.string.isRequired,
      date_updated_formatted: PropTypes.string,
    }).isRequired,
    fields: PropTypes.shape({
      readingTime: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogPostHeader
