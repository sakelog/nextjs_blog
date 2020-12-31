import React from 'react';
import { graphql, Link } from 'gatsby';
import { getCategoryPath } from '../lib/getCategoryPath';

const Post: Post.func = (props) => {
  const post = props.data.post;
  const categoryPath = getCategoryPath(post.category.slug);

  const htmlBody = post.body.childMarkdownRemark.htmlAst;
  const htmlTOC = post.body.childMarkdownRemark.tableOfContents;

  return (
    <>
      <div className="p-article">
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
        <div>{/*htmlBody*/}</div>
        {/*<TagList Tags={post.tags} />*/}
      </div>
      {/*<ShareButton post={post} />
    <Bio />*/}
      {/*
          <ShareButton post={post} />
      <Bio />
      <hr />
      <PrevNext prev={prev} next={next} />
    <BackToTopPage />*/}
    </>
  );
};

export default Post;

export const pageQuery = graphql`
  query tempPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
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
          htmlAst
          tableOfContents(absolute: false)
        }
      }
    }
  }
`;
