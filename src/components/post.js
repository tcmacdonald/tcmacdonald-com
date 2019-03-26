import React, { Component } from "react"
import { Link } from "gatsby"
import PageHeader from "./page-header"

export default class Post extends Component {
  render() {
    return (
      <PageHeader className="post-list">
        <h2>
          <Link to={this.props.slug} className="link">
            {this.props.title}
          </Link>
        </h2>
        <span>{this.props.date}</span>
        {this.props.children}
      </PageHeader>
    )
  }
}
