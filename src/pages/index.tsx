import { GetStaticProps, NextPage } from 'next';
import loadable from '@loadable/component';

import { getAllPosts } from '@lib/contentful/exportContent/postList';
import CreatePostListProps from '@lib/createProps/createPostListProps';

import Layout from '@layout/layout';
const TempPostList = loadable(
  () => import('@template/temp_postList'),
  {}
);

const POST_PER_LISTPAGE = 6;

const TopPage: NextPage<{
  posts: Template.postList.props;
}> = (props) => {
  const TemplateTag = (
    <TempPostList
      posts={props.posts.posts}
      currentPage={props.posts.currentPage}
      lastPage={props.posts.lastPage}
      pathBase={props.posts.pathBase}
    />
  );
  return <Layout>{TemplateTag}</Layout>;
};

export default TopPage;

export const getStaticProps: GetStaticProps = async () => {
  const allpost = await getAllPosts();
  // postList
  const postListProps = allpost
    ? await CreatePostListProps({
        allpost,
        per_page: POST_PER_LISTPAGE,
        slug: '/',
      })
    : null;

  return {
    props: {
      posts: postListProps,
    },
  };
};
