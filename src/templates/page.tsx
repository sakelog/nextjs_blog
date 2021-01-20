import React from 'react';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';

import RenderAst from '../lib/renderAst';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const BackToTopPage = loadable(
  () => import('../components/pagination/backToTopPage')
);

const Page: Page.func = (props) => {
  const page = props.data.page;

  const description = page.description;
  const htmlBody = page.body.childMarkdownRemark.html;

  return (
    <Layout>
      {CustomHead(page.title, description, false)}
      <article className="p-article">
        <h1>{page.title}</h1>
        <hr />
        <section>{RenderAst(htmlBody)}</section>
      </article>
      <BackToTopPage />
    </Layout>
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
