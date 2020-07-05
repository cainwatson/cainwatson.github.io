import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

import Theme from './Theme'
import Footer from './Footer'
import globalStyles from './globalStyles'

const Layout = ({ children }) => (
  <Theme>
    <Global styles={globalStyles} />
    <main>{children}</main>
    <Footer />
  </Theme>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
