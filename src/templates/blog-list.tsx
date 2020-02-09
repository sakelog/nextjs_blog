import * as React from "react"
import { graphql, Link } from "gatsby"

import { TempblogListQuery } from "../../types/graphql-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

const _ = require("lodash")

interface BlogListType {
  pageContext:{
    currentPage:number,
    numPages:number,
  },
  data:TempblogListQuery
}

const BlogList = ({ pageContext, data }:BlogListType) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  const SiteTitle = data.site.siteMetadata.title

  const pageTitle = currentPage === 1 ? null : "記事一覧"
  const description = currentPage === 1 ? null : `${SiteTitle}の記事一覧ページ：${currentPage}`

  return (
    <Layout>
      {SEO
        (pageTitle,
        description,
        false)
      }
      <h2>{pageTitle}</h2>
      {posts.map(({node}) => {
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description || node.excerpt
        const categoryPath = `/category/${_.kebabCase(
          node.frontmatter.category
        )}/`

        const Tags = node.frontmatter.tags
        const tag_list = Tags.map((tag: {},index:number) => (
          <li key={index} className="list-inline-item">
            <Link to={`/tags/${_.kebabCase(tag)}/`}>
              <h5 className="cats">#{tag}</h5>
            </Link>
          </li>
        ))

        return (
          <div key={node.fields.slug} className="border-bottom pt-3 px-2">
            <small>{node.frontmatter.date}</small>
            <h3>
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <ul className="list-inline my-2">
              <li className="list-inline-item">
                <Link to={categoryPath} className="badge badge-primary">
                  <h4 className="cats">{node.frontmatter.category}</h4>
                </Link>
              </li>
              {tag_list}
            </ul>
            <p>{description}</p>
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase="/" />
    </Layout>
  )
}

export default BlogList
export const pageQuery = graphql`
  query TempblogList($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }  
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "post"}}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
            category
            tags
          }
        }
      }
    }
  }
`
