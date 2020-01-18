import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import BackToTopPage from "../components/back-to-top-page"

const Category = ({ pageContext, data }) => {
  const { category, currentPage, numPages } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `カテゴリー：${category}`
  return (
    <Layout>
      <SEO
        title={categoryHeader}
        description={`「${category}」についての一覧ページです`}
      />
      <h1 className="text-center">
        <span>{categoryHeader}</span>
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
      <BackToTopPage />
    </Layout>
  )
}
Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
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
export default Category
export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
