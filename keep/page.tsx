import * as React from 'react'
import { pageContext } from '../../gatsby-node'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import RenderAst from '../utils/renderAst'
import BackToTopPage from '../components/back-to-top-page'

type pageTypes = {
  pathContext: pageContext
}

const Page = ({ pathContext }: pageTypes) => {
  const page = pathContext.page

  const description = page.description

  return (
    <Layout>
      {SEO(page.title, description, false)}
      <div className="p-article">
        <h1>{page.title}</h1>
        <hr />
        <div>
          <RenderAst {...page.body.childMarkdownRemark.htmlAst} />
        </div>
      </div>
      <BackToTopPage />
    </Layout>
  )
}

export default Page
