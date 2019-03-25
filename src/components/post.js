import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  h2 {
    margin-bottom: 0;
  }
  > span {
    font-weight: bold;
    color: orange;
  }
`

export default class Post extends Component {
  render() {
    return (
      <Wrapper className="post-list">
        <h2>
          <Link to={this.props.slug} className="link">
            {this.props.title}
          </Link>
        </h2>
        <span>{this.props.date}</span>
        {this.props.children}
      </Wrapper>
    )
  }
}
