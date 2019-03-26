import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  h1,
  h2 {
    margin-bottom: 0;
  }
  > span {
    font-weight: bold;
    color: orange;
  }
`

export default class PageHeader extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>{this.props.children}</Wrapper>
    )
  }
}
