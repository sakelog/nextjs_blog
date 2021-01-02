import * as React from 'react';
import { Link } from 'gatsby';

import { getTagPath } from '../../lib/getPath';

//Icon
import { FiTag } from 'react-icons/fi';

const TagList = (tags) => {
  const targetTags: [{ slug: string; name: string }] = tags.tags;
  const items = targetTags
    ? targetTags.map((tag) => {
        return (
          <li key={tag.slug}>
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
        {items}
      </li>
    </ul>
  ) : null;

  return allTag;
};

export default TagList;
