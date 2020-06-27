import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'

import Theme from './Theme'
import Footer from './Footer'
import globalStyles from './globalStyles'

const Layout = ({ children }) => (
  <Theme>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Noto+Sans+SC:wght@400&family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Global styles={globalStyles} />
    <main>{children}</main>
    <Footer />
  </Theme>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
