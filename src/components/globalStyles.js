import { css } from '@emotion/core'

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 2.13rem;
    margin: 14px 0;
  }

  h2 {
    font-size: 1.75rem;
    margin: 10px 0;
  }
`

export default globalStyles
