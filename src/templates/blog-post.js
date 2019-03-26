import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Meta = styled.small`
  color: gray;
  margin-top: 3em;
  display: block;
  text-align: center;
`

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, date } = post.frontmatter
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Meta>This post was published {date}</Meta>
      </div>
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
      }
    }
  }
`
