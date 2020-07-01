import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import CaseStudy, { caseStudyPropType } from './CaseStudy'

const Container = styled.section``

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  > li {
    margin-bottom: 28px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

const CaseStudyList = ({ caseStudies }) => (
  <Container>
    <List>
      {caseStudies.map(caseStudy => (
        <li key={caseStudy.name}>
          <CaseStudy caseStudy={caseStudy} />
        </li>
      ))}
    </List>
  </Container>
)

CaseStudyList.propTypes = {
  caseStudies: PropTypes.arrayOf(caseStudyPropType).isRequired,
}

export default CaseStudyList
