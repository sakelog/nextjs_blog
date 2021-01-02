import * as React from 'react';
import { Link } from 'gatsby';

import { FiTag } from 'react-icons/fi';

import { getTagPath } from '../../lib/getPath';

const TagList = (tags) => {
  const targetTags: [{ slug: string; name: string }] = tags.tags;
  const items = targetTags
    ? targetTags.map((tag) => {
        return (
          <li key={tag.slug} className="c-tag-item">
            <Link to={getTagPath(tag.slug)}>
              <h5>{tag.name}</h5>
            </Link>
          </li>
        );
      })
    : null;
  const allTag = targetTags ? (
    <ul className="p-tag-list">
      <li>
        <FiTag />
      </li>
      {items}
    </ul>
  ) : null;

  return allTag;
};

export default TagList;
