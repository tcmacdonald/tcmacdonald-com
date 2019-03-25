import React from "react"
import Post from "../components/post"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <Post
          key={i}
          title={node.frontmatter.title}
          slug={node.fields.slug}
          date={node.frontmatter.date}
        >
          <p>{node.excerpt}</p>
        </Post>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
