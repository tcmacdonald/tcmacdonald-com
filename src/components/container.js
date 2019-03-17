import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 780px;
  padding-left: 1em;
  padding-right: 1em;
  @media (min-width: 780px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export default class Container extends Component {
  render() {
    let { children, ...other } = this.props
    return <Wrapper {...other}>{children}</Wrapper>
  }
}
