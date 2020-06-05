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

// Utilities
const kebabCase = require('lodash/kebabCase')

// Icon
import { FiTag,FiCalendar } from 'react-icons/fi'

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

  const categoryPath = `/category/${kebabCase(post.frontmatter.category)}/`

  const Tags = post.frontmatter.tags
  const tag_list = Tags.map((tag: {}, index: number) => (
    <li key={index} className="">
      <Link to={`/tags/${kebabCase(tag)}/`}>
        <h5 className="cats">#{tag}</h5>
      </Link>
    </li>
  ))

  return (
    <Layout>
      {SEO(post.frontmatter.title, post.frontmatter.description, true)}
      <div className="Article">
        <h1>{post.frontmatter.title}</h1>
        <Link to={categoryPath} className="sl-cat-badge">
          <h4>{post.frontmatter.category}</h4>
        </Link>
        <small className="sl-date"><FiCalendar />{post.frontmatter.date}</small>
        <hr />

        <div className="grid-center">
          <div className="col-6_sm-12 tableOfContents">
            <h2 className="text-center">目次</h2>
            <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
          </div>
        </div>

        <div>
          <RenderAst {...post.htmlAst} />
        </div>

        <ul className="sl-inline-list">
          <li>
            <FiTag />
          </li>
          <li className="">タグ：</li>
          {tag_list}
        </ul>
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
  query TempBlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date(formatString: "YYYY年M月D日")
        category
        tags
        description
      }
      tableOfContents
    }
  }
`
