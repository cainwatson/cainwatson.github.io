import React from 'react'
import styled from '@emotion/styled'

import caseStudies from '@content/caseStudies.json'
import CaseStudyList from './caseStudies/CaseStudyList'

const CaseStudyHeader = styled.h1`
  max-width: 1232px;
  padding: 14px;
  margin: 30px 0;
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightPink};
  text-align: center;

  @media (min-width: 1024px) {
    width: 100%;
    margin: 50px 0;
  }
`

const CaseStudies = () => (
  <section>
    <CaseStudyHeader>Case Studies</CaseStudyHeader>
    <CaseStudyList caseStudies={caseStudies} />
  </section>
)

export default CaseStudies
