import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrevNext from "../components/prev-next"
import Bio from "../components/bio"

// Utilities
import kebabCase from "lodash/kebabCase"

// component再定義
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: props => {
      return (
        <h2 className="text-primary p-2 my-4" {...props}>
          {}
        </h2>
      )
    },
    table: props => {
      return (
        <div className="scroll">
          <table className="table" {...props}></table>
        </div>
      )
    },
    blockquote: props => {
      return <blockquote className="blockquote" {...props}></blockquote>
    },
  },
}).Compiler

const BlogPost = ({ pageContext, data }) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext

  const categoryPath = `/category/${kebabCase(post.frontmatter.category)}/`

  const Tags = post.frontmatter.tags
  const tag_list = Tags.map(tag => (
    <li key={tag} className="list-inline-item">
      <Link to={`/tags/${kebabCase(tag)}/`}>
        <h5 className="cats">#{tag}</h5>
      </Link>
    </li>
  ))

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div className="Article">
        <small>{post.frontmatter.date}</small>
        <h1>{post.frontmatter.title}</h1>
        <Link to={categoryPath} className="badge badge-primary my-2">
          <h4 className="cats">{post.frontmatter.category}</h4>
        </Link>
        <hr />

        <div>{renderAst(post.htmlAst)}</div>

        <ul className="list-inline">
          <li className="list-inline-item">タグ：</li>
          {tag_list}
        </ul>
      </div>
      <Bio />
      <hr />
      <PrevNext prev={prev} next={next} />
    </Layout>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        category
        tags
        description
      }
    }
  }
`
