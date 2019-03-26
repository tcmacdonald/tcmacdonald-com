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
import styled from "styled-components"
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa"
import "./layout.css"

const Social = styled.div`
  display: block;
  a {
    color: gray;
    &:hover {
      color: deepskyblue;
    }
  }
  svg {
    margin: 0 1em;
    fill: currentColor;
  }
`
const Legal = styled.small`
  color: #d4d4d4;
`

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
        <Header
          siteTitle={data.site.siteMetadata.title}
          subTitle={data.site.siteMetadata.subtitle}
        />
        <main>
          <Container>{children}</Container>
        </main>
        <footer>
          <Container className="text-center">
            <Social>
              <a href="https://github.com/tcmacdonald">
                <FaGithubAlt size="2em" />
              </a>
              <a href="https://www.linkedin.com/in/tcmacdonald">
                <FaLinkedin size="2em" />
              </a>
              <a href="https://twitter.com/tcmacdonald">
                <FaTwitter size="2em" />
              </a>
            </Social>
            <Legal>&copy; {new Date().getFullYear()} all rights reserved</Legal>
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
