import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getRootPath, getCategoryPath } from '../lib/getPath';

import TagList from '../components/taglist';
import Pagination from '../components/pagination/pagination';

const PostList: PostList.func = (props) => {
  const posts = props.data.posts.nodes;
  const { numPages, currentPage } = props.pageContext;

  const postListTag = posts.map((post) => {
    const categoryPath = getCategoryPath(post.category.slug);
    return (
      <div key={post.slug} className="u-border--bottom u-space--pad--2">
        {/*<PostDate postdate={node.date} update={node.update} />*/}
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
    <>
      <div>{postListTag}</div>{' '}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase="/" />
    </>
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
