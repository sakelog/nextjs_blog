import Link from 'next/link';

// lib
import { getPostPath } from '@lib/util/getPath';

// components
import PostDate from '@components/PostDate';
import TagList from '@components/TagList';
import AdForIndexList from '@components/GTM/AdForIndexList';

type PropsType = {
  posts: Contentful.Post[] | null;
};

const IndexList = ({ posts }: PropsType) => (
  <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts &&
        posts.map((post) => {
          return (
            <li
              key={post.fields.slug}
              className="border-2 border-gray-400 relative mt-12 pt-12 p-4 rounded-md"
            >
              <div className="absolute -top-12 left-1 bg-white p-2">
                <PostDate
                  postdate={post.fields.date}
                  update={post.fields.update}
                />
              </div>
              <div className="h-full flex flex-col">
                <div className="flex-1 p-2 border-b border-gray-400">
                  <Link
                    href={getPostPath(post.fields.slug)}
                  >
                    <a className="text-xl">
                      <h2>{post.fields.title}</h2>
                    </a>
                  </Link>
                </div>
                <div className="pt-2">
                  <TagList
                    tags={post.fields.tags}
                    heading="h4"
                  />
                </div>
              </div>
            </li>
          );
        })}
    </ul>
    <AdForIndexList />
  </div>
);

export default IndexList;
