import React, { lazy, Suspense } from 'react';
import { graphql } from 'gatsby';

import RenderAst from '../lib/renderAst';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const BackToTopPage = lazy(
  () => import('../components/pagination/backToTopPage')
);

const Page: Page.func = (props) => {
  const page = props.data.page;

  const description = page.description;
  const htmlBody = page.body.childMarkdownRemark.html;

  return (
    <Suspense
      fallback={
        <Layout>
          {CustomHead(page.title, description, false)}
          <h1>{page.title}</h1>
        </Layout>
      }
    >
      <Layout>
        {CustomHead(page.title, description, false)}
        <article className="p-article">
          <h1>{page.title}</h1>
          <hr />
          <section>{RenderAst(htmlBody)}</section>
        </article>
        <BackToTopPage />
      </Layout>
    </Suspense>
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
