import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import RenderAst from "../components/renderAst"

const Page = ({ data }) => {
  const page = data.markdownRemark

  const description = page.frontmatter.description || page.excerpt

  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description={description}
      />
      <div className="Article">
        <h1>{page.frontmatter.title}</h1>
        <hr />

        <div><RenderAst{...page.htmlAst} /></div>

      </div>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
      excerpt
    }
  }
`
