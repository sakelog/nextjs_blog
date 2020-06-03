import * as React from "react"
import { Link, graphql } from "gatsby"

import { PagesTagsQuery } from "../../types/graphql-types"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToTopPage from "../components/back-to-top-page"

// Utilities
import { kebabCase } from "lodash"

type Props = {
  data : PagesTagsQuery
}

const TagsPage = ({
  data:{
    allMarkdownRemark:
    {group}
}}:Props)  => {

var sortedGroup = group.sort(function(a,b){
  return b.totalCount - a.totalCount
})

  return(
    <Layout>
      {SEO
        ("タグ一覧ページ",
        "全タグの一覧ページです",
        false)
      }
      <h1 className="text-center">全タグ一覧</h1>
      <div>
        <ul className="sl-inline-list">
          {sortedGroup.map((tag, index:number) => (
            <li
              key={index}
            >
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="">
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

export default TagsPage

export const pageQuery = graphql`
  query PagesTags{
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