import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { FiClock } from "react-icons/fi";
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"

const BlogPost = ({pageContext, data}) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext

  const categoryPath = `/category/${kebabCase(post.frontmatter.category)}/`

  const Tags = post.frontmatter.tags
  const tag_list = Tags.map((tag) =>
    <li key={tag} className="list-inline-item">
      <Link to={`/tags/${kebabCase(tag)}/`}>
        <h5 className="cats">#{tag}</h5>
      </Link>
    </li>
  )

  return(
    <Layout>
    <Head
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Link to={categoryPath} className="badge badge-primary my-2">
          <h4 className="cats">{post.frontmatter.category}</h4>
        </Link>
        <p className="text-muted"><FiClock />投稿日：{post.frontmatter.date}</p>
        <hr />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <ul className="list-inline"><li className="list-inline-item">タグ：</li>{tag_list}</ul>

      </div>
      <hr />
      <nav>
      <div className="row">
          <div className="col-sm mx-3">
              {prev && (
                <div className="d-flex justify-content-start row">
                  <div>前：</div>
                  <div className="col-10">
                    <Link to={prev.fields.slug} rel="prev">
                      {prev.frontmatter.title}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="col-sm mx-3">
              {next && (
                <div className="d-flex justify-content-end row">
                  <div className="col-10 text-right">
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} 
                    </Link>
                  </div>
                  <div>：次</div>
                </div>
              )}
            </div>
        </div>
      </nav>
    </Layout>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.element.isRequired,
    next: PropTypes.element.isRequired,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        category
        tags
      }
    }
  }
`
