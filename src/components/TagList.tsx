import { createElement } from 'react';
import Link from 'next/link';

import { getTagsPath } from '@lib/util/getPath';

type PropsType = {
  tags: Contentful.Tags[];
  heading: string;
};

const TagList = (props: PropsType) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {props.tags.map((tag) => (
        <li key={tag.fields.slug}>
          <Link href={getTagsPath(tag.fields.slug)}>
            <a className="no-underline">
              {createElement(
                props.heading,
                {
                  className:
                    'c-badge c-badge--gray font-normal hover:bg-gray-600 hover:text-white',
                },
                tag.fields.name
              )}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
