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

const IndexList = (props: PropsType) => (
  <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {props.posts &&
        props.posts.map((post) => {
          return (
            <li key={post.fields.slug}>
              <PostDate
                postdate={post.fields.date}
                update={post.fields.update}
              />
              <Link href={getPostPath(post.fields.slug)}>
                <a className="text-xl">
                  <h2>{post.fields.title}</h2>
                </a>
              </Link>
              <div className="my-2">
                <TagList
                  tags={post.fields.tags}
                  heading="h4"
                />
              </div>
            </li>
          );
        })}
    </ul>
    <AdForIndexList />
  </div>
);

export default IndexList;
