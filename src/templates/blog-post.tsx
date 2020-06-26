import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { postContext } from '../../gatsby-node'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import RenderAst from '../utils/renderAst'
import PrevNext from '../components/prev-next'
import Bio from '../components/bio'
import BackToTopPage from '../components/back-to-top-page'
import PostDate from '../components/post-date'
import TagList from '../components/taglist'

// Utilities
const kebabCase = require('lodash/kebabCase')

type BlogPostTypes = {
  pathContext: postContext
}

const BlogPost = ({ pathContext }: BlogPostTypes) => {
  const post = pathContext.curPost
  const prev = pathContext.prev
  const next = pathContext.next
  //const { prev, next } = pathContext

  //const category = data.cflCategory
  const categoryName = post.category.name
  const categorySlug = post.category.slug
  const categoryPath = `/category/${kebabCase(categorySlug)}/`

  const bodyTableOfContents = post.body.childMarkdownRemark.tableOfContents
  const bodyHtml = post.body.childMarkdownRemark.htmlAst

  return (
    <Layout>
      {SEO(post.title, post.description, true)}
      <div className="p-article">
        <h1>{post.title}</h1>
        <Link to={categoryPath} className="c-badge">
          <h4>{categoryName}</h4>
        </Link>
        <PostDate postdate={post.date} update={post.update} />
        <hr />

        <div className="c-TOC">
          <h2 className="u-align--center">目次</h2>
          <div dangerouslySetInnerHTML={{ __html: bodyTableOfContents }} />
        </div>

        <div>
          <RenderAst {...bodyHtml} />
        </div>
        <TagList Tags={post.tags} />
      </div>
      <Bio />
      <hr />
      <PrevNext prev={prev} next={next} />
      <BackToTopPage />
    </Layout>
  )
}

export default BlogPost
