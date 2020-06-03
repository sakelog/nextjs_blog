import * as React from "react"
//import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import { TempCategoryQuery } from "../../types/graphql-types"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import BackToTopPage from "../components/back-to-top-page"

interface Props {
  pageContext: {
    category: string,
    currentPage: number,
    numPages: number,
    pathBase: string,
  },
  data: TempCategoryQuery
}

const Category = ({ pageContext, data }:Props) => {
  const { category, currentPage, numPages, pathBase } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `カテゴリー：${category}`
  return (
    <Layout>
      {SEO
        (categoryHeader,
        `「${category}」についての一覧ページです`,
        false)
      }
      <h1 className="sl-align-center">
        <span>{categoryHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description || node.excerpt
        return (
          <div key={slug} className="sl-border-bottom">
            <small>投稿日：{node.frontmatter.date}</small>
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase={pathBase} />
      <BackToTopPage />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query TempCategory($category: String!, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      limit: $limit
      skip: $skip
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
            date(formatString: "YYYY年M月D日")
            description
          }
        }
      }
    }
  }
`
