import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { TempBlogPost2Query } from '../../types/graphql-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import RenderAst from '../components/renderAst'
//import PrevNext from '../components/prev-next'
import PrevNext2 from '../components/prev-next2'
import Bio from '../components/bio'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'
//import TagList from '../components/taglist'
import TagList2 from '../components/taglist2'

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
  data: TempBlogPost2Query
}

const BlogPost = ({ pageContext, data }: BlogPostTypes) => {
  const post = data.cflPost
  const { prev, next } = pageContext


  //const category = data.cflCategory
  const categoryName = post.category.name
  const categorySlug = post.category.slug
  const categoryInfo : {name: string, slug: string} = {
    name: categoryName,
    slug: categorySlug,
  }
  const categoryPath = `/category/${kebabCase(categoryInfo.slug)}/`

  const bodyTableOfContents = post.body.childMarkdownRemark.tableOfContents
  const bodyHtml = post.body.childMarkdownRemark.htmlAst

  return (
    <Layout>
      {SEO(post.title, post.description, true)}
      <div className="Article">
        <h1>{post.title}</h1>
        <Link to={categoryPath} className="sl-cat-badge">
          <h4>{categoryInfo.name}</h4>
        </Link>
        <PostDate
          postdate={post.date}
          update={post.update}
        />
        <hr />

        <div className="tableOfContents">
          <h2 className="text-center">目次</h2>
          <div dangerouslySetInnerHTML={{ __html: bodyTableOfContents }} />
        </div>

        <div>
          <RenderAst {...bodyHtml} />
        </div>
        <TagList2 Tags={post.tags} />
      </div>
      <Bio />
      <hr />
      <PrevNext2 prev={prev} next={next} />
      <BackToTopPage />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query TempBlogPost2($slug: String!, $category: String!) {
    cflPost: contentfulPost(slug: { eq: $slug }) {
      title
      date
      update
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      description
      body {
        childMarkdownRemark {
          htmlAst
          tableOfContents(absolute: false)
        }
      }
    }
    cflCategory: contentfulCategory(name: {eq: $category}) {
      name
      slug
    }
  }
`
