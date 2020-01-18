import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToTopPage from "../components/back-to-top-page"

// Utilities
import kebabCase from "lodash/kebabCase"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="タグ一覧ページ" description="全タグの一覧ページです" />
    <div>
      <h1 className="text-center">全タグ一覧</h1>
      <ul className="list-unstyled">
        {group.map(tag => (
          <li
            key={tag.fieldValue}
            className="d-inline-block m-1"
          >
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="btn btn-outline-primary">
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <BackToTopPage />    
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "post"}}}
      limit: 2000
      ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
