import React from 'react'
import styled from '@emotion/styled'

const Text = styled.div`
  > span {
    font-family: 'Noto Sans SC', sans-serif;
  }
`

const TranslatedText = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
)

export default TranslatedText
