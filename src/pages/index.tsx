import { GetStaticProps, NextPage } from 'next';

// components
import IndexLayout from 'layout/IndexLayout';
import CustomHead from '@components/CustomHead';
import IndexList from '@components/IndexList';
import Pagination from '@components/Pagination';
import config from '@components/config';

import { postControler } from '@lib/contentful/exportContent';
import { createOGImage } from '@lib/util/createOGImage';

const POST_PER_LISTPAGE = 6;

type PageProps = {
  postIndex: {
    posts: Contentful.Post[] | null;
    currentPage: number;
    lastPage: number;
    pathBase: string;
  };
};

const TopPage: NextPage<PageProps> = ({ postIndex }) => {
  const { currentPage, lastPage, pathBase, posts } =
    postIndex;
  return (
    <IndexLayout
      head={<CustomHead description={config.description} />}
      pagination={
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          pathBase={pathBase}
        />
      }
    >
      <IndexList posts={posts} />
    </IndexLayout>
  );
};

export default TopPage;

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  return postControler.getAllPosts().then((allPosts) => {
    const SKIP = 0;
    const targetPosts =
      allPosts?.slice(SKIP, SKIP + POST_PER_LISTPAGE) ||
      null;
    const lastPage = allPosts
      ? Math.ceil(allPosts.length / POST_PER_LISTPAGE)
      : 0;
    createOGImage(null, 'top');

    return {
      props: {
        postIndex: {
          posts: targetPosts,
          currentPage: 1,
          lastPage,
          pathBase: '/',
        },
      },
    };
  });
};
