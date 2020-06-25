import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { LinkButton } from '@components/Button'
import { useWindowSize } from '@hooks/useWindowSize'

const Container = styled.article`
  max-width: 1200px;
  padding: 28px;
  border: 8px solid ${props => props.theme.colors.primary};
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap-reverse;

  @media (min-width: 1024px) {
    height: 480px;
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
  flex: 1;

  > img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const CaseStudy = ({ caseStudy }) => {
  const { width } = useWindowSize()

  return (
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
      {width >= 1024 && (
        <Showcase>
          <img
            src={caseStudy.images[0].src}
            alt={caseStudy.images[0].description}
          />
        </Showcase>
      )}
    </Container>
  )
}

export const caseStudyPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkSourceCode: PropTypes.string,
  linkLive: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
})

CaseStudy.propTypes = {
  caseStudy: caseStudyPropType,
}

export default CaseStudy
