import React from 'react'
import styled from '@emotion/styled'

const SocialLink = styled.a`
  margin: 0 6px;
  font-size: 0.89rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const SocialLinks = () => (
  <>
    <span>
      <SocialLink
        href="mailto:cainwatson00@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </SocialLink>
    </span>
    &nbsp;|&nbsp;
    <span>
      <SocialLink
        href="https://www.linkedin.com/in/cainwatson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </SocialLink>
    </span>
    &nbsp;|&nbsp;
    <span>
      <SocialLink
        href="https://github.com/cainwatson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </SocialLink>
    </span>
  </>
)

export default SocialLinks
