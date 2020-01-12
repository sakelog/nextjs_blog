import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Head from "../components/head"

import { Link, graphql } from "gatsby"
const Tags = ({ pageContext, data }) => {
  const {tag} = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `タグ：${tag}`
  return (
    <Layout>
      <Head 
        title= {tagHeader}
        description= {`「${tag}」についての一覧ページです`}
      />
      <h1 className="text-center"><span>{tagHeader}</span></h1>
      <p>投稿：{totalCount}件</p>
      <div className="row row-cols-2 row-cols-md-3 my-2">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={slug} className="col mb-3">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p className="card-subtitle text-muted">投稿日：{node.frontmatter.date}</p>
                  <Link to={slug} className="card-link">記事を読む</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Link to="/tags">タグ一覧</Link>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
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
            date
          }
        }
      }
    }
  }
`