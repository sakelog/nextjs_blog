import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Head from "../components/head"
import Pagination from "../components/pagination"

import { Link, graphql } from "gatsby"
const Tags = ({ pageContext, data }) => {
  const { tag, currentPage, numPages } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `タグ：${tag}`

  return (
    <Layout>
      <Head
        title={tagHeader}
        description={`「${tag}」についての一覧ページです`}
      />
      <h1 className="text-center">
        <span>{tagHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description || node.excerpt
        return (
          <div key={slug} className="border-bottom pt-3 px-2">
            <small>{node.frontmatter.date}</small>
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} />
      <Link to="/tags">タグ一覧</Link>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            description
          }
        }
      }
    }
  }
`
