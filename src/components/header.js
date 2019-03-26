import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import global from "./global-variables"
import Container from "./container"

const Wrapper = styled.header`
  background: #f4743b;
  font-size: 100%;
  a {
    font-size: 180%;
    color: PeachPuff;
    text-decoration: none;
    font-family: Roboto Slab, sans-serif;
    font-weight: 900;
    line-height: 120%;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
    small {
      font-family: Cabin, sans-serif;
      display: block;
      color: #fff;
      font-weight: 400;
      font-size: 50%;
      @media screen and (min-width: ${global.screen.mobile}) {
        font-size: 70%;
        line-height: 100%;
      }
    }
    &:hover {
      text-decoration: none;
      color: white;
    }
  }
`

const Header = ({ siteTitle, subTitle }) => (
  <Wrapper>
    <Container
      style={{ paddingTop: "1em", paddingBottom: "0.5em" }}
      className="text-center"
    >
      <Link to="/">
        {"{ "}
        {siteTitle}
        {" }"}
        {subTitle && <small>{subTitle}</small>}
      </Link>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Header
