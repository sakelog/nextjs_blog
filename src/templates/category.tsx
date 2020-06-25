import * as React from 'react'
//import PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'

import { TempCategoryQuery } from '../../types/graphql-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'
import TagList from '../components/taglist'

interface Props {
  pageContext: {
    category: string
    currentPage: number
    numPages: number
    pathBase: string
  }
  data: TempCategoryQuery
}

const Category = ({ pageContext, data }: Props) => {
  const { category, currentPage, numPages, pathBase } = pageContext
  const { edges, totalCount } = data.cflPosts
  const categoryHeader = `カテゴリー：${category}`
  return (
    <Layout>
      {SEO(categoryHeader, `「${category}」についての一覧ページです`, false)}
      <h1 className="u-align--center">
        <span>{categoryHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const slug = node.slug
        const title = node.title || node.slug
        const description = node.description
        return (
          <div key={slug} className="u-border--bottom u-space--pad--2">
            <PostDate
              postdate={node.date}
              update={node.update}
            />
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
            <TagList Tags={node.tags} />
          </div>
        )
      })}
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        pathBase={pathBase}
      />
      <BackToTopPage />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query TempCategory($category: String!, $limit: Int!, $skip: Int!) {
    cflPosts :allContentfulPost(
      sort: { fields: date, order: DESC }
      filter: {category: {name: { eq: $category } } }
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
          tags {
            name
            slug
          }
          description
        }
      }
    }
  }
`
