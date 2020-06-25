import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Button, LinkButton } from '@components/Button'

const Container = styled.article`
  margin: -12px -12px;
  padding: 18px;
  border: 8px solid ${props => props.theme.colors.primary};
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap-reverse;

  @media (min-width: 1024px) {
    padding: 34px;
    flex-wrap: nowrap;
  }

  > div {
    margin: 12px 12px;
  }
`

const Info = styled.div`
  max-width: 600px;
`
const Showcase = styled.div`
  flex: 1;
`

const Buttons = styled.div`
  margin: -6px -6px;
  border-radius: 16px;

  a {
    margin: 6px 6px;
    display: inline-block;
  }
`

const CaseStudy = ({ caseStudy }) => (
  <Container>
    <Info>
      <h2>{caseStudy.name}</h2>
      {caseStudy.description.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Buttons>
        {caseStudy.linkSourceCode && (
          <LinkButton href={caseStudy.linkSourceCode} target="_blank">
            Source Code
          </LinkButton>
        )}
        {caseStudy.linkLive && (
          <LinkButton
            href={caseStudy.linkLive}
            target="_blank"
            variant="secondary"
          >
            Visit
          </LinkButton>
        )}
      </Buttons>
    </Info>
    <Showcase>
      {caseStudy.images.map(({ src, description }) => (
        <img src={src} alt={description} />
      ))}
    </Showcase>
  </Container>
)

export const caseStudyPropType = PropTypes.objectOf({
  name: PropTypes.string,
  description: PropTypes.string,
  linkSourceCode: PropTypes.string,
  linkLive: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.objectOf({
      src: PropTypes.string,
      description: PropTypes.string,
    })
  ),
})

CaseStudy.propTypes = {
  caseStudy: caseStudyPropType,
}

export default CaseStudy
