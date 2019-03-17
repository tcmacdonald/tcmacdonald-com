import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Container from "./container"

const Wrapper = styled.header`
  background: orange;
  border-bottom: 1px solid SandyBrown;
  margin-bottom: 1em;
  font-size: 100%;
  a {
    font-size: 180%;
    color: PeachPuff;
    text-decoration: none;
    font-family: Cabin, sans-serif;
    font-weight: 900;
    line-height: 70%;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
    small {
      display: block;
      color: #fff;
      font-weight: 400;
      font-size: 70%;
    }
  }
`

const Header = ({ siteTitle, subTitle }) => (
  <Wrapper>
    <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <Link to="/">
        {siteTitle}
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
