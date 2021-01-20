import React, { lazy, Suspense } from 'react';
import { graphql, Link } from 'gatsby';
import { getCategoryPath } from '../lib/getPath';
import RenderAst from '../lib/renderAst';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const PostDate = lazy(() => import('../components/articleParts/_postDate'));
const TagList = lazy(() => import('../components/articleParts/_taglist'));
const Bio = lazy(() => import('../components/articleParts/_bio'));
const ShareButton = lazy(
  () => import('../components/articleParts/_shareButton')
);
const PrevNext = lazy(() => import('../components/pagination/prevNext'));
const BackToTopPage = lazy(
  () => import('../components/pagination/backToTopPage')
);

const Post: Post.func = (props) => {
  const post = props.data.post;
  const categoryPath = getCategoryPath(post.category.slug);

  const htmlBody = post.body.childMarkdownRemark.html;
  const htmlTOC = post.body.childMarkdownRemark.tableOfContents;

  return (
    <Suspense
      fallback={
        <Layout>
          {CustomHead(post.title, post.description, true)}
          <h1>{post.title}</h1>
        </Layout>
      }
    >
      <Layout>
        {CustomHead(post.title, post.description, true)}
        <article className="p-article">
          <PostDate postdate={post.date} update={post.update} />
          <h1>{post.title}</h1>
          <Link to={categoryPath} className="c-badge">
            <h4>{post.category.name}</h4>
          </Link>
          <hr />
          <div className="c-TOC">
            <h2 className="u-align--center">目次</h2>
            <div
              className="c-TOC__item"
              dangerouslySetInnerHTML={{ __html: htmlTOC }}
            />
          </div>
          <section>{RenderAst(htmlBody)}</section>
          <TagList tags={post.tags} />
        </article>
        <ShareButton post={post} />
        <Bio />
        <hr />
        <PrevNext prev={props.pageContext.prev} next={props.pageContext.next} />
        <BackToTopPage />
      </Layout>
    </Suspense>
  );
};

export default Post;

export const pageQuery = graphql`
  query tempPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      slug
      date
      update
      description
      category {
        slug
        name
      }
      tags {
        slug
        name
      }
      body {
        childMarkdownRemark {
          html
          tableOfContents(absolute: false)
        }
      }
    }
  }
`;
