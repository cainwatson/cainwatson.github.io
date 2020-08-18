import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import TranslatedText from '@components/TranslatedText'
import SocialLinks from '@components/SocialLinks'

const Container = styled.section`
  max-width: 530px;
  height: min-content;
  padding: 28px;
  border: 6px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.lightPink};
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 1024px) {
    padding: 36px;
  }
`

const Headshot = styled(Img)`
  border: 6px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  background-color: ${props => props.theme.colors.primary};
`

const HomeCard = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fixed(width: 240, height: 240, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Headshot
        fixed={data.file.childImageSharp.fixed}
        alt="Headshot of Cain wearing a grey suit and floral bow tie."
      />
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
      <SocialLinks />
    </Container>
  )
}

export default HomeCard
