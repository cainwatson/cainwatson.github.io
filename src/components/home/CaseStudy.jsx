import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { LinkButton } from '@components/Button'

const Container = styled.article`
  max-width: 1200px;
  padding: 34px;
  border: 8px solid ${props => props.theme.colors.primary};
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap-reverse;

  @media (min-width: 1024px) {
    height: 480px;
    margin: -22px;
    padding: 8px;
    flex-wrap: nowrap;

    > div {
      margin: 22px;
    }
  }
`

const Info = styled.div`
  max-width: 420px;
`
const Showcase = styled.div`
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    flex: 1;
  }
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
