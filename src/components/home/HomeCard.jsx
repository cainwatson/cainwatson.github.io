import React from 'react'
import styled from '@emotion/styled'

import TranslatedText from '@components/TranslatedText'

const Container = styled.section`
  max-width: 450px;
  height: min-content;
  padding: 36px;
  border: 4px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.lightPink};
  text-align: center;
  border-radius: 16px;
`

const HomeCard = () => (
  <Container>
    <h1>Hi, I'm Cain</h1>
    <p>
      I'm a passionate, empathetic software engineer who loves diving into
      problems head first and navigating to solutions. I also enjoy exploring
      new technology, especially open source.
    </p>
    <p>
      Some of my favorite hobbies include learning new languages and reading
      science fiction.&nbsp;
      <TranslatedText title="I'm currently learning Chinese and reading Octavia Butler's Parable of the Sower.">
        <span>我正在学习中文和读</span>Octavia Butler<span>的</span>Parable of
        the Sower<span>。</span>
      </TranslatedText>
    </p>
  </Container>
)

export default HomeCard
