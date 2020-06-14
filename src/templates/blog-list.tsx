import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { TempblogListQuery } from '../../types/graphql-types'

//Component
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import PostDate from '../components/post-date'
import TagList from '../components/taglist'

const _ = require('lodash')

interface BlogListType {
  pageContext: {
    currentPage: number
    numPages: number
  }
  data: TempblogListQuery
}

const BlogList = ({ pageContext, data }: BlogListType) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  const SiteTitle = data.site.siteMetadata.title

  const pageTitle = currentPage === 1 ? null : '記事一覧'
  const description =
    currentPage === 1 ? null : `${SiteTitle}の記事一覧ページ：${currentPage}`

  return (
    <Layout>
      {SEO(pageTitle, description, false)}
      <h2>{pageTitle}</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description || node.excerpt
        const categoryPath = `/category/${_.kebabCase(
          node.frontmatter.category
        )}/`

        //const Tags = node.frontmatter.tags
        //const tag_list = Tags.map((tag: {}, index: number) => (
        //  <li key={index} className="list-inline-item">
        //    <Link to={`/tags/${_.kebabCase(tag)}/`}>
        //      <h5 className="cats">#{tag}</h5>
        //    </Link>
        //  </li>
        //))

        return (
          <div key={node.fields.slug} className="sl-border-bottom">
            <PostDate postdate={node.frontmatter.date} update={node.frontmatter.update} />
            <h2>
              <Link to={node.fields.slug}>{title}</Link>
            </h2>
            <Link to={categoryPath} className="sl-cat-badge">
              <h3>{node.frontmatter.category}</h3>
            </Link>
            <TagList Tags={node.frontmatter.tags} />
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
      filter: { fields: { collection: { eq: "post" } } }
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
            date
            update
            description
            category
            tags
          }
        }
      }
    }
  }
`
