import * as React from "react"
import { graphql } from "gatsby"

import { TempPageQuery } from "../../types/graphql-types"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import RenderAst from "../components/renderAst"
import BackToTopPage from "../components/back-to-top-page"

type Props = {
  data:TempPageQuery
}

const Page = ({ data }:Props) => {
  const page = data.markdownRemark

  const description = page.frontmatter.description || page.excerpt

  return (
    <Layout>
      {SEO
        (page.frontmatter.title,
        description)
      }
      <div className="Article">
        <h1>{page.frontmatter.title}</h1>
        <hr />

        <div><RenderAst{...page.htmlAst} /></div>

      </div>
      <BackToTopPage />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query TempPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        description
      }
      excerpt
    }
  }
`
