import { GetStaticProps, NextPage } from 'next';

// libs
import { getAllPosts } from '@/libs/microcms/getContent';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { createOGImage } from '@/libs/util/createOGImage';

type PageProps = {
  postIndex: {
    posts: MicroCMSListResponse<Content.Post>;
  };
  ogImagePath: string;
};

// components
import CustomHead from '@/components/CustomHead';
import PostIndexList from '@/components/PostIndexList';

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  const allPosts = await getAllPosts({});
  const ogImagePath = await createOGImage({
    filename: 'top',
  });

  return {
    props: {
      postIndex: { posts: allPosts },
      ogImagePath,
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
