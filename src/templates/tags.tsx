import * as React from "react"
import { Link, graphql } from "gatsby"

import { TempTagsQuery } from "../../types/graphql-types"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import BackToTopPage from "../components/back-to-top-page"
import PostDate from "../components/post-date"

const _ = require('lodash')

interface TagsType {
  pageContext:{
    tag:{},
    currentPage: number,
    numPages: number,
    pathBase: string,
  },
  data: TempTagsQuery,
}

const Tags = ({ pageContext, data }:TagsType) => {
  const { tag, currentPage, numPages, pathBase } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `タグ：${tag}`

  const categorys = data.cflCategory.edges
  const categorysInfo : {name: string, slug: string}[] = []
  
  categorys.map((category: { node: { name: string; slug: string } },idx:number) => {
    const categoryName = category.node.name
    const categorySlug = category.node.slug

    categorysInfo[idx] = {
      name: categoryName,
      slug: categorySlug,
    }
  })

  return (
    <Layout>
      {SEO
        (tagHeader,
        `「${tag}」についての一覧ページです`,
        false)
      }
      <h1 className="sl-align-center">
        <span>{tagHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description
        const postCategoryName = node.frontmatter.category
        var categoryPath : string
        categorysInfo.forEach(categoryInfo => {
          categoryPath = postCategoryName === categoryInfo.name ? (
            `/category/${_.kebabCase(categoryInfo.slug)}/`
           ) : null
        })
        //const categoryPath = `/category/${_.kebabCase(
        //  node.frontmatter.category
        //)}/`
        return (
          <div key={slug} className="sl-border-bottom">
            <PostDate postdate={node.frontmatter.date} update={node.frontmatter.update} />
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
            <Link to={categoryPath} className="sl-cat-badge">
              <h3>{postCategoryName}</h3>
            </Link>
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase={pathBase} />
      <Link to="/tags">タグ一覧</Link>
      <BackToTopPage />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query TempTags($tag: String, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            date
            update
            category
            description
          }
        }
      }
    }
    cflCategory: allContentfulCategory{
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`