import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { TempBlogPostQuery } from '../../types/graphql-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import RenderAst from '../components/renderAst'
import PrevNext from '../components/prev-next'
import Bio from '../components/bio'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'
import TagList from '../components/taglist'

// Utilities
const kebabCase = require('lodash/kebabCase')

interface BlogPostTypes {
  pageContext: {
    prev?: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next?: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
  data: TempBlogPostQuery
}

const BlogPost = ({ pageContext, data }: BlogPostTypes) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext


  const category = data.cflCategory
  const categoryName = category.name
  const categorySlug = category.slug
  const categoryInfo : {name: string, slug: string} = {
    name: categoryName,
    slug: categorySlug,
  }
  const categoryPath = `/category/${kebabCase(categoryInfo.slug)}/`

  return (
    <Layout>
      {SEO(post.frontmatter.title, post.frontmatter.description, true)}
      <div className="Article">
        <h1>{post.frontmatter.title}</h1>
        <Link to={categoryPath} className="sl-cat-badge">
          <h4>{categoryInfo.name}</h4>
        </Link>
        <PostDate
          postdate={post.frontmatter.date}
          update={post.frontmatter.update}
        />
        <hr />

        <div className="tableOfContents">
          <h2 className="text-center">目次</h2>
          <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        </div>

        <div>
          <RenderAst {...post.htmlAst} />
        </div>
        <TagList Tags={post.frontmatter.tags} />
      </div>
      <Bio />
      <hr />
      <PrevNext prev={prev} next={next} />
      <BackToTopPage />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query TempBlogPost($slug: String!, $category: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date
        update
        tags
        description
      }
      tableOfContents
    }
    cflCategory: contentfulCategory(name: {eq: $category}) {
      name
      slug
    }
  }
`
