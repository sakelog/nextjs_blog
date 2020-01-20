import * as React from "react"

import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToTopPage from "../components/back-to-top-page"

// Utilities
import { kebabCase } from "lodash"

const TagsPage : React.Component<TagsPageProps> = ({
    data: {
    allMarkdownRemark: { group },
  },
}:any)  => {
  return(
    <Layout>
      {SEO
        ("タグ一覧ページ",
        "全タグの一覧ページです")
      }
      <h1 className="text-center">全タグ一覧</h1>
      <div>
        <ul className="list-unstyled">
          {group.map((tag:any, index:number) => (
            <li
              key={index}
              className="d-inline-block m-1"
            >
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="btn btn-outline-primary">
                #{tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BackToTopPage />  
    </Layout>
  )
}

interface TagsPageProps {
  data : {
    allMarkdownRemark: {
      group: {
        tag: {
          fieldValue: string,
          totalCount: number,
        }
      }
    }
  }
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "post"}}}
      limit: 2000
      ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
