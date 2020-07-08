import { css } from '@emotion/core'

const globalStyles = theme => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
  }

  body {
    margin: 0;
    font-family: 'Lexend Deca', sans-serif;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.lightPink};
  }

  main {
    position: relative;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 1.89rem;
    margin: 14px 0;
  }

  h2 {
    font-size: 1.56rem;
    margin: 10px 0;
  }

  a {
    color: ${theme.colors.primary};
  }
`

export default globalStyles
