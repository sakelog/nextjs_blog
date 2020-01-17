import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"

// Components
import Layout from "../components/layout"
import Head from "../components/head"

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

const Page = ({ data }) => {
  const page = data.markdownRemark

  const description = page.frontmatter.description || page.excerpt

  return (
    <Layout>
      <Head
        title={page.frontmatter.title}
        description={description}
      />
      <div className="Article">
        <h1>{page.frontmatter.title}</h1>
        <hr />

        <div>{renderAst(page.htmlAst)}</div>
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
