import Link from 'next/link';

import TagList from '@components/TagList';

import { getPostPath } from '@lib/util/getPath';
import { getFormatDate } from '@lib/util/getFormatDate';

type PropsType = {
  posts: Contentful.Post[] | null;
};

const IndexList = (props: PropsType) => {
  return (
    <>
      {props.posts && (
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {props.posts.map((post) => {
            return (
              <li key={post.fields.slug} className="p-8">
                <section className="text-xs font-bold flex items-center space-x-2">
                  <time
                    dateTime={post.fields.date}
                    itemProp="datepublished"
                  >
                    {getFormatDate(post.fields.date)}
                  </time>
                  {post.fields.update && (
                    <>
                      <span className="text-gray-400">
                        /
                      </span>
                      <time
                        dateTime={post.fields.update}
                        itemProp="dateupdated"
                      >
                        {getFormatDate(post.fields.update)}
                      </time>
                    </>
                  )}
                </section>
                <Link href={getPostPath(post.fields.slug)}>
                  <a className="text-black text-xl font-bold">
                    <h2>{post.fields.title}</h2>
                  </a>
                </Link>
                <ul className="my-4 space-y-2">
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
      )}
    </>
  );
};

export default IndexList;
