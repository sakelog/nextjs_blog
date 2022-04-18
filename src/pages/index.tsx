import { GetStaticProps, NextPage } from 'next';

import CustomHead from '@components/CustomHead';
import IndexList from '@components/IndexList';
import Pagination from '@components/pagination/Pagination';
import config from '@components/config';

import { postControler } from '@lib/contentful/exportContent';

const POST_PER_LISTPAGE = 6;

type PageProps = {
  postIndex: {
    posts: Contentful.Post[] | null;
    currentPage: number;
    lastPage: number;
    pathBase: string;
  };
};

const TopPage: NextPage<PageProps> = (props) => {
  return (
    <>
      <CustomHead description={config.description} />
      <section className="p-2">
        <IndexList posts={props.postIndex.posts} />
        <Pagination
          currentPage={props.postIndex.currentPage}
          lastPage={props.postIndex.lastPage}
          pathBase={props.postIndex.pathBase}
        />
      </section>
    </>
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
