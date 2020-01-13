import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Pagination from "../components/pagination"

const _ = require("lodash")

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const { currentPage, numPages } = this.props.pageContext

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
                  <p>{description}</p>
                </div>
              )
              })}
              <Pagination numPages={numPages} currentPage={currentPage} />
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