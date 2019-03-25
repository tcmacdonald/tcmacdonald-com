/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Container from "./container"
import Header from "./header"
import GlobalStyles from "./global-styles"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Header
          siteTitle={data.site.siteMetadata.title}
          subTitle={data.site.siteMetadata.subtitle}
        />
        <main>
          <Container>{children}</Container>
        </main>
        <footer>
          <Container>
            &copy; {new Date().getFullYear()} all rights reserved
          </Container>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
