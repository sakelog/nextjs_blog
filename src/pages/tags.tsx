import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { getTagPath } from '../lib/getPath';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
import BackToTopPage from '../components/pagination/backToTopPage';

const TagsPage: tagsPage.func = (props) => {
  let sortedGroup: tagsPage.sortedTagGroup[] = props.data.tagGroup.group.sort(
    function (a, b) {
      return b.totalCount - a.totalCount;
    }
  );

  // slug取得
  const allTag = props.data.tag.nodes;
  sortedGroup.map((hasPostTag) => {
    for (var i = 0; i < allTag.length; i++) {
      const isHit = hasPostTag.fieldValue === allTag[i].name;

      if (isHit) {
        hasPostTag.slug = allTag[i].slug;
        break;
      }
    }
  });

  const tagList = sortedGroup.map((tag) => {
    return (
      <li key={tag.fieldValue} className="c-tag-item">
        <Link to={getTagPath(tag.slug)}>
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      </li>
    );
  });
  return (
    <Layout>
      {CustomHead('タグ一覧ページ', '全タグの一覧ページです', false)}
      <section>
        <h1 className="u-align--center">全タグ一覧</h1>
        <ul className="p-tag-list">{tagList}</ul>
      </section>
      <BackToTopPage />
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query tagsPage {
    tagGroup: allContentfulPost {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
    tag: allContentfulTags {
      nodes {
        name
        slug
      }
    }
  }
`;
