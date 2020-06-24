import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: '#011627',
    secondary: '#CC28A3',
    blue: '#654AA3',
    pink: '#C789D6',
    backgroundPrimary: '#FCEFF9',
  },
  fontSize: {},
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
