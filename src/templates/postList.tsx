import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getRootPath, getCategoryPath } from '../lib/getPath';
import config from '../components/config';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
import PostDate from '../components/articleParts/postDate';
import TagList from '../components/articleParts/taglist';
import Pagination from '../components/pagination/pagination';

const PostList: PostList.func = (props) => {
  const posts = props.data.posts.nodes;
  const { numPages, currentPage } = props.pageContext;

  const siteTitle = config.title;
  const pageTitle = currentPage === 1 ? null : '記事一覧';
  const description =
    currentPage === 1 ? null : siteTitle + 'の記事一覧ページ:' + currentPage;

  const postListTag = posts.map((post) => {
    const categoryPath = getCategoryPath(post.category.slug);
    return (
      <div key={post.slug} className="u-border--bottom u-space--pad--2">
        <PostDate postdate={post.date} update={post.update} />
        <h2>
          <Link to={getRootPath(post.slug)}>{post.title}</Link>
        </h2>
        <p>{post.description}</p>
        <Link to={categoryPath} className="c-badge">
          <h3>{post.category.name}</h3>
        </Link>
        <TagList tags={post.tags} />
      </div>
    );
  });

  return (
    <Layout>
      {CustomHead(pageTitle, description, false)}
      <div>{postListTag}</div>{' '}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase="/" />
    </Layout>
  );
};

export default PostList;

export const pageQuery = graphql`
  query tempPostList($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      limit: $limit
      skip: $skip
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
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
      }
    }
  }
`;
