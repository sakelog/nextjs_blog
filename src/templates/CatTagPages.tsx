import React from 'react';
import { graphql, Link } from 'gatsby';

import { getRootPath } from '../lib/getPath';

import TagList from '../components/taglist';
import Pagination from '../components/pagination';
import BackToTopPage from '../components/backToTopPage';

const CATEGORY = 'category';
const CATEGORY_LABEL = 'カテゴリー:';
const TAGS = 'tags';
const TAGS_LABEL = 'タグ:';

const CategoryPages: Category.func = (props) => {
  const target = setTag(props);
  const { numPages, currentPage, pathBase } = props.pageContext;
  const postsTag = target.targetPosts.map((post) => {
    return (
      <div key={post.slug} className="u-border--bottom u-space--pad--2">
        {/*<PostDate postdate={post.date} update={post.update} />*/}
        <Link to={getRootPath(post.slug)}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.description}</p>
        <TagList tags={post.tags} />
      </div>
    );
  });

  return (
    <>
      <h1 className="u-align--center">
        <span>{target.label}</span>
      </h1>
      <p>投稿：{target.totalCount}件</p>
      {postsTag}
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        pathBase={pathBase}
      />
      <BackToTopPage />
    </>
  );
};

export default CategoryPages;

const setTag = (props: Category.props) => {
  let label: string;
  let totalCount: number;
  let targetPosts: any;

  const funcType = props.pageContext.type;
  const typeLabel =
    funcType === CATEGORY
      ? CATEGORY_LABEL
      : funcType === TAGS
      ? TAGS_LABEL
      : '';
  const itemName =
    funcType === CATEGORY
      ? props.data.category.name
      : funcType === TAGS
      ? props.data.tags.name
      : '';

  label = typeLabel + itemName;
  totalCount =
    funcType === CATEGORY
      ? props.data.catPosts.totalCount
      : funcType === TAGS
      ? props.data.tagsPosts.totalCount
      : 0;

  targetPosts =
    funcType === CATEGORY
      ? props.data.catPosts.nodes
      : funcType === TAGS
      ? props.data.tagsPosts.nodes
      : '';
  return { label: label, totalCount: totalCount, targetPosts: targetPosts };
};

export const pageQuery = graphql`
  query tempCatTagPages($slug: String, $limit: Int!, $skip: Int!) {
    category: contentfulCategory(slug: { eq: $slug }) {
      slug
      name
    }
    tags: contentfulTags(slug: { eq: $slug }) {
      slug
      name
    }
    catPosts: allContentfulPost(
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
    tagsPosts: allContentfulPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
        category {
          name
          slug
        }
      }
    }
  }
`;
