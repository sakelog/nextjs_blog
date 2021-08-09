import { createElement } from 'react';
import Link from 'next/link';

import { getCategoryPath } from '@lib/getPath';

type PropsType = {
  category: contentful.category;
  heading: string;
};

const CategoryTag = (props: PropsType) => {
  return (
    <Link
      href={getCategoryPath(props.category.fields.slug)}
    >
      <a
        className="border border-gray-400 rounded py-2 px-4 inline-block text-sm
                  hover:bg-gray-200"
      >
        {createElement(
          props.heading,
          {},
          props.category.fields.name
        )}
      </a>
    </Link>
  );
};

export default CategoryTag;
