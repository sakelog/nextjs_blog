import * as React from 'react'
import { Link, graphql } from 'gatsby'

import { TempTagsQuery } from '../../types/graphql-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'

const _ = require('lodash')

interface TagsType {
  pageContext: {
    tag: {}
    currentPage: number
    numPages: number
    pathBase: string
  }
  data: TempTagsQuery
}

const Tags = ({ pageContext, data }: TagsType) => {
  const { tag, currentPage, numPages, pathBase } = pageContext
  const { edges, totalCount } = data.cflPosts
  const tagHeader = `タグ：${tag}`

  return (
    <Layout>
      {SEO(tagHeader, `「${tag}」についての一覧ページです`, false)}
      <h1 className="sl-align-center">
        <span>{tagHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const slug = node.slug
        const title = node.title || node.slug
        const description = node.description
        const postCategoryName = node.category.name
        const categoryPath = `/category/${_.kebabCase(node.category.slug)}/`
        
        return (
          <div key={slug} className="sl-border-bottom">
            <PostDate postdate={node.date} update={node.update} />
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
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        pathBase={pathBase}
      />
      <Link to="/tags">タグ一覧</Link>
      <BackToTopPage />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query TempTags($tag: String, $limit: Int!, $skip: Int!) {
    cflPosts: allContentfulPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { name: { in: [$tag] } } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          slug
          title
          date
          update
          category {
            name
            slug
          }
          description
        }
      }
    }
    cflCategory: allContentfulCategory {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
