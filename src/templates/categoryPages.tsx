import React from 'react';
import { graphql, Link } from 'gatsby';

const CategoryPages: Category.func = (props) => {
  const categoryName = props.data.category.name;
  const categoryHeader = 'カテゴリー：' + categoryName;
  const categoryPosts = props.data.posts.nodes;

  const categoryPostsTag = categoryPosts.map((post) => {
    return (
      <div key={post.slug} className="u-border--bottom u-space--pad--2">
        {/*<PostDate postdate={post.date} update={post.update} />*/}
        <Link to={post.slug}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.description}</p>
        {/*<TagList Tags={node.tags} />*/}
      </div>
    );
  });

  return (
    <>
      <h1 className="u-align--center">
        <span>{categoryHeader}</span>
      </h1>
      <p>投稿：{props.data.posts.totalCount}件</p>
      {categoryPostsTag}
      {/* <Pagination
        numPages={numPages}
        currentPage={currentPage}
        pathBase={pathBase}
      />
      <BackToTopPage />*/}
    </>
  );
};

export default CategoryPages;

export const pageQuery = graphql`
  query tempCategoryPages($slug: String!, $limit: Int!, $skip: Int!) {
    category: contentfulCategory(slug: { eq: $slug }) {
      slug
      name
    }
    posts: allContentfulPost(
      sort: { fields: date, order: DESC }
      filter: { category: { slug: { eq: $slug } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        slug
        title
        description
        date
        update
        tags {
          name
          slug
        }
      }
    }
  }
`;
