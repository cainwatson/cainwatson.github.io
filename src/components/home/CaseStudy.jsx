import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Button from '@components/Button'

const Container = styled.article`
  padding: 46px;
  border: 8px solid ${props => props.theme.colors.primary};
  display: flex;
  /* margin: -12px -12px; */
`

const Info = styled.div``
const Showcase = styled.div``

const Buttons = styled.div`
  margin: -6px -6px;
  button {
    margin: 6px 6px;
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
        {caseStudy.linkSourceCode && <Button>Source Code</Button>}
        {caseStudy.linkLive && <Button variant="secondary">Visit</Button>}
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
