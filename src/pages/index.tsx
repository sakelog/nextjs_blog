import { GetStaticProps, NextPage } from 'next';

import Layout from '@layout/layout';
import CustomHead from '@components/CustomHead';
import IndexList from '@components/IndexList';
import Pagination from '@components/pagination/Pagination';
import config from '@components/config';

import { postControler } from '@lib/contentful/exportContent';

const POST_PER_LISTPAGE = 6;

type PageProps = {
  postIndex: {
    posts: Contentful.post[] | null;
    currentPage: number;
    lastPage: number;
    pathBase: string;
  };
};

const TopPage: NextPage<PageProps> = (props) => {
  return (
    <Layout>
      <CustomHead description={config.description} />
      <section className="p-2">
        <IndexList posts={props.postIndex.posts} />
        <Pagination
          currentPage={props.postIndex.currentPage}
          lastPage={props.postIndex.lastPage}
          pathBase={props.postIndex.pathBase}
        />
      </section>
    </Layout>
  );
};

export default TopPage;

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  const allPosts = await postControler.getAllPosts();
  const skip = 0;
  const targetPosts =
    allPosts?.slice(skip, skip + POST_PER_LISTPAGE) || null;
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
};
