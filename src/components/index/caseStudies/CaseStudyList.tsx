import React, { FC } from 'react'
import styled from '@emotion/styled'

import CaseStudy from './CaseStudy'

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

interface Props {
  caseStudies: CaseStudy[]
}

const CaseStudyList: FC<Props> = ({ caseStudies }) => (
  <List>
    {caseStudies.map(caseStudy => (
      <li key={caseStudy.name}>
        <CaseStudy caseStudy={caseStudy} />
      </li>
    ))}
  </List>
)

export default CaseStudyList
