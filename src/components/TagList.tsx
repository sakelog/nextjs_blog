import { createElement } from 'react';
import Link from 'next/link';
import { HiOutlineTag } from 'react-icons/hi';

import { getTagsPath } from '@lib/util/getPath';

type PropsType = {
  tags: Contentful.Tags[];
  heading: string;
};

const TagList = (props: PropsType) => {
  return (
    <ul className="inline-flex justify-start flex-wrap text-sm">
      {props.tags.map((tag) => (
        <li key={tag.fields.slug} className="w-auto m-1">
          <Link href={getTagsPath(tag.fields.slug)}>
            <a
              className="rounded-full bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-600
                         flex items-center py-1 px-2 space-x-1"
            >
              <HiOutlineTag />
              {createElement(
                props.heading,
                {},
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
