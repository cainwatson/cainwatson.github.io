import { css } from '@emotion/core'

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Lexend Deca', sans-serif;
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
`

export default globalStyles
