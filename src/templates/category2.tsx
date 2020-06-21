import * as React from 'react'
//import PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'

import { TempCategory2Query } from '../../types/graphql-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'
//import TagList from '../components/taglist'
import TagList2 from '../components/taglist2'

interface Props {
  pageContext: {
    category: string
    currentPage: number
    numPages: number
    pathBase: string
  }
  data: TempCategory2Query
}

const Category = ({ pageContext, data }: Props) => {
  const { category, currentPage, numPages, pathBase } = pageContext
  const { edges, totalCount } = data.cflPosts
  const categoryHeader = `カテゴリー：${category}`
  return (
    <Layout>
      {SEO(categoryHeader, `「${category}」についての一覧ページです`, false)}
      <h1 className="sl-align-center">
        <span>{categoryHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const slug = node.slug
        const title = node.title || node.slug
        const description = node.description
        return (
          <div key={slug} className="sl-border-bottom">
            <PostDate
              postdate={node.date}
              update={node.update}
            />
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
            <TagList2 Tags={node.tags} />
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
  query TempCategory2($category: String!, $limit: Int!, $skip: Int!) {
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
            date
            update
            tags
            description
          }
        }
      }
    }
  }
`
