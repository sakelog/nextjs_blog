import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

import { postControler } from '@lib/contentful/exportContent';

// components
import IndexLayout from 'layout/IndexLayout';
import CustomHead from '@components/CustomHead';
import IndexList from '@components/IndexList';
import Pagination from '@components/Pagination';
import config from '@components/config';

const POST_PER_LISTPAGE = 6;

type PageProps = {
  postIndex: {
    posts: Contentful.Post[] | null;
    currentPage: number;
    lastPage: number;
    pathBase: string;
  };
};

const PostIndex: NextPage<PageProps> = (props) => {
  const pageTitle =
    '記事一覧：' + props.postIndex.currentPage + 'ページ目';
  const description = config.title + 'の記事一覧ページです';
  return (
    <IndexLayout
      head={
        <CustomHead
          pageTitle={pageTitle}
          description={description}
        />
      }
      pagination={
        <Pagination
          currentPage={props.postIndex.currentPage}
          lastPage={props.postIndex.lastPage}
          pathBase={props.postIndex.pathBase}
        />
      }
    >
      <IndexList posts={props.postIndex.posts} />
    </IndexLayout>
  );
};

export default PostIndex;

//-----------------------------------------------------------------------------

export const getStaticPaths: GetStaticPaths = async () => {
  return postControler.getAllPosts().then((allPosts) => {
    const lastPage = allPosts
      ? Math.ceil(allPosts.length / POST_PER_LISTPAGE)
      : 0;

    const numList =
      lastPage > 1
        ? [...Array(lastPage - 1)].map((_, i) => i + 2)
        : [];

    const paths = numList.map((num) => ({
      params: { number: num.toString() },
    }));

    return { paths, fallback: false };
  });
};

//-----------------------------------------------------------------------------

export const getStaticProps: GetStaticProps<
  PageProps
> = async (context) => {
  const currentPage =
    typeof context.params?.number === 'string'
      ? Number(context.params?.number)
      : 0;

  return postControler.getAllPosts().then((allPosts) => {
    const skip = (currentPage - 1) * POST_PER_LISTPAGE;
    const targetPosts =
      allPosts?.slice(skip, skip + POST_PER_LISTPAGE) ||
      null;
    const lastPage = allPosts
      ? Math.ceil(allPosts.length / POST_PER_LISTPAGE)
      : 0;

    return {
      props: {
        postIndex: {
          posts: targetPosts,
          currentPage,
          lastPage,
          pathBase: '/',
        },
      },
    };
  });
};
