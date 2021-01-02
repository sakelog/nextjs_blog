import * as React from 'react';
import { Link, graphql } from 'gatsby';

import { PagesTagsQuery } from '../../types/graphql-types';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackToTopPage from '../components/pagination/backToTopPage';

// Utilities
import { kebabCase } from 'lodash';

type Props = {
  data: PagesTagsQuery;
};

const TagsPage = ({
  data: {
    cflTagsPost: { group },
  },
}: Props) => {
  var sortedGroup = group.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });

  return (
    <Layout>
      {SEO('タグ一覧ページ', '全タグの一覧ページです', false)}
      <h1 className="u-align--center">全タグ一覧</h1>
      <div>
        <ul className="p-tag-list">
          {sortedGroup.map((tag, index: number) => (
            <li key={index} className="c-tag-item">
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BackToTopPage />
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query PagesTags {
    cflTagsPost: allContentfulPost(limit: 2000) {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`;
