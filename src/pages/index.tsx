import { GetStaticProps, NextPage } from 'next';

// libs
import { getAllPosts } from '@/libs/microcms/getContent';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

type PageProps = {
  postIndex: {
    posts: MicroCMSListResponse<Content.Post>;
  };
};

// components
import CustomHead from '@/components/CustomHead';
import PostIndexList from '@/components/PostIndexList';

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  const allPosts = await getAllPosts({});
  return {
    props: {
      postIndex: { posts: allPosts },
    },
  };
};

const Home: NextPage<PageProps> = ({ postIndex }) => (
  <>
    <CustomHead />

    <section id="post-index">
      <PostIndexList postIndex={postIndex} />
    </section>
  </>
);

export default Home;
