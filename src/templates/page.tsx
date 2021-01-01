import * as React from 'react';
import { graphql } from 'gatsby';

// Components
/*
import Layout from '../components/layout';
import SEO from '../components/seo';
import RenderAst from '../utils/renderAst';
import BackToTopPage from '../components/back-to-top-page';
*/

const Page: Page.func = (props) => {
  const page = props.data.page;

  const description = page.description;

  {
    /*
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
    */
  }

  return (
    <>
      <div className="p-article">
        <h1>{page.title}</h1>
        <hr />
        <div></div>
      </div>
    </>
  );
};

export default Page;

export const pageQuery = graphql`
  query tempPage($slug: String) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
      date
      update
      description
      body {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`;
