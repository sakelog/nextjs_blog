import * as React from 'react'
import { Link, graphql } from 'gatsby'

import { TempCategoryQuery } from '../../types/graphql-types'
import { categoryContext } from '../../gatsby-node'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'
import TagList from '../components/taglist'

interface Props {
  pathContext: categoryContext
  data: TempCategoryQuery
}

const Category = ({ pathContext, data }: Props) => {
  const { currentPage, numPages, pathBase } = pathContext
  const categoryName = data.cflCategory.name
  const totalCount = data.cflPosts.totalCount
  const categoryPosts = data.cflPosts.edges

  const categoryHeader = `カテゴリー：${categoryName}`
  return (
    <Layout>
      {SEO(
        categoryHeader,
        `「${categoryName}」についての一覧ページです`,
        false
      )}
      <h1 className="u-align--center">
        <span>{categoryHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {categoryPosts.map(({ node }) => {
        const slug = `/${node.slug}/`
        const title = node.title || node.slug
        const description = node.description
        return (
          <div key={slug} className="u-border--bottom u-space--pad--2">
            <PostDate postdate={node.date} update={node.update} />
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
  query TempCategory($slug: String!, $limit: Int!, $skip: Int!) {
    cflCategory: contentfulCategory(slug: { eq: "tech" }) {
      name
    }
    cflPosts: allContentfulPost(
      sort: { fields: date, order: DESC }
      filter: { category: { slug: { eq: $slug } } }
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
