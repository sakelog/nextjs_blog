import Link from 'next/link';

import PostDate from '@components/postDate';
import TagList from '@components/tagList';

import { getRootPath } from '@lib/getPath';

type PropsType = {
  posts: Contentful.post[];
};

const IndexList = (props: PropsType) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {props.posts.map((post) => {
        return (
          <li
            key={post.fields.slug}
            className="p-8 bg-white"
          >
            <Link href={getRootPath(post.fields.slug)}>
              <a className="text-black text-xl font-bold">
                <h2>{post.fields.title}</h2>
              </a>
            </Link>
            <ul className="my-4 space-y-2">
              <PostDate
                postdate={post.fields.date}
                update={post.fields.update}
              />
              <li>
                <TagList
                  tags={post.fields.tags}
                  heading="h4"
                />
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default IndexList;
