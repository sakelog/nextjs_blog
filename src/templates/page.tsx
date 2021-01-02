import * as React from 'react';
import { graphql } from 'gatsby';

import RenderAst from '../lib/renderAst';

import BackToTopPage from '../components/backToTopPage';
// Components
/*
import Layout from '../components/layout';
import SEO from '../components/seo';
*/

const Page: Page.func = (props) => {
  const page = props.data.page;

  const description = page.description;
  const htmlBody = page.body.childMarkdownRemark.html;

  {
    /*
    <Layout>
      {SEO(page.title, description, false)}
    </Layout>
    */
  }

  return (
    <>
      <article className="p-article">
        <h1>{page.title}</h1>
        <hr />
        <section>{RenderAst(htmlBody)}</section>
      </article>
      <BackToTopPage />
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
          html
        }
      }
    }
  }
`;
