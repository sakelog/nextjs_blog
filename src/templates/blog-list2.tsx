import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { TempblogList2Query } from '../../types/graphql-types'

//Component
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/pagination'
import PostDate from '../components/post-date'
//import TagList from '../components/taglist'
import TagList2 from '../components/taglist2'

const _ = require('lodash')

interface BlogListType {
  pageContext: {
    currentPage: number
    numPages: number
  }
    data: TempblogList2Query
}

const BlogList = ({ pageContext, data }: BlogListType) => {
  const posts = data.cfPosts.edges
  const { currentPage, numPages } = pageContext

  const SiteTitle = data.site.siteMetadata.title

  const pageTitle = currentPage === 1 ? null : '記事一覧'
  const description =
    currentPage === 1 ? null : `${SiteTitle}の記事一覧ページ：${currentPage}`

  const categorys = data.cflCategory.edges
  const categorysInfo: { name: string; slug: string }[] = []

  categorys.map(
    (category: { node: { name: string; slug: string } }, idx: number) => {
      const categoryName = category.node.name
      const categorySlug = category.node.slug

      categorysInfo[idx] = {
        name: categoryName,
        slug: categorySlug,
      }
    }
  )

  return (
    <Layout>
      {SEO(pageTitle, description, false)}
      <h2>{pageTitle}</h2>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const description = node.description
        const postCategoryName = node.category.name
        const categoryPath = `/category/${_.kebabCase(node.category.slug)}/`

        return (
          <div key={node.slug} className="sl-border-bottom">
            <PostDate
              postdate={node.date}
              update={node.update}
            />
            <h2>
              <Link to={node.slug}>{title}</Link>
            </h2>
            <p>{description}</p>
            <Link to={categoryPath} className="sl-cat-badge">
              <h3>{postCategoryName}</h3>
            </Link>
            <TagList2 Tags={node.tags} />
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase="/" />
    </Layout>
  )
}

export default BlogList
export const pageQuery = graphql`
  query TempblogList2($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    cfPosts: allContentfulPost(
      limit: $limit,
      skip: $skip,
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          date
          update
          description
          category {
            name
            slug
          }
          tags {
            name
            slug
          }
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
