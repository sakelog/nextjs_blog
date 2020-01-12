import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const _ = require("lodash")

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()
        return (
            <Layout>
              <Head />
              <h2 className="">
                <span>記事一覧</span>
              </h2>
              {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  const description = node.frontmatter.description || node.excerpt
                  const categoryPath = `/category/${_.kebabCase(node.frontmatter.category)}/`

                  const Tags = node.frontmatter.tags
                  const tag_list = Tags.map((tag) =>
                    <li key={tag} className="list-inline-item">
                      <Link to={`/tags/${_.kebabCase(tag)}/`}>
                        <h5 className="cats"><span className="badge badge-secondary">#{tag}</span></h5>
                      </Link>
                    </li>
                  )
                  
              return (
                <div key={node.fields.slug} className="border-bottom pt-3 px-2">
                  <small>投稿日：{node.frontmatter.date}</small>
                  <h3><Link to={node.fields.slug}>
                    {title}
                  </Link></h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to={categoryPath}>
                        <h4 className="cats"><span className="badge badge-primary">{node.frontmatter.category}</span></h4>
                      </Link>
                    </li>
                    {tag_list}
                  </ul>
                  <p className="lead">{description}</p>
                </div>
              )
              })}
              {numPages !== 1 && (
                <nav className="my-2">
                  <ul className="pagination justify-content-center">
                    {!isFirst && (
                        <li className ="page-item">
                          <Link to={prevPage} className="page-link" rel="prev">
                            前へ
                          </Link>
                        </li>
                    )}
                    {Array.from({ length: numPages}, (_, i) => (
                      i+1 === currentPage ? (
                        <li key={`pagination-number${i + 1}`} className="page-item active">
                          <span className="page-link">{ i+1 }</span>
                        </li>
                      ) : (
                        <li key={`pagination-number${i + 1}`} className="page-item">
                          <Link to={`/${i === 0 ? "" : i + 1}`} className="page-link">
                            {i+1}
                          </Link>
                        </li>
                      )
                    ))}

                    {!isLast && (
                      <li className="page-link">
                        <Link to={nextPage} rel="next" className="page-item">
                          次へ
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
            </Layout>
        )
    }
}
export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
        edges {
            node {
              fields {
                slug
              }
              excerpt
              frontmatter {
                title
                date
                description
                category
                tags
              }
            }
          }
        }
      }
`