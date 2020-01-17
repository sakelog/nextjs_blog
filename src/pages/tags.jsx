import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import Head from "../components/head"

// Utilities
import kebabCase from "lodash/kebabCase"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Head title="タグ一覧ページ" description="全タグの一覧ページです" />
    <div>
      <h1 className="text-center">全タグ一覧</h1>
      <ul className="list-unstyled">
        {group.map(tag => (
          <li
            key={tag.fieldValue}
            className="d-inline-block border border-primary rounded m-2 p-1"
          >
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
