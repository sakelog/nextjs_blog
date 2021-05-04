import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Link from 'next/link';
import ErrorPage from 'next/error';
import loadable from '@loadable/component';
import { CircularProgress } from '@material-ui/core';

import { getPreviewPostBySlug } from '@lib/contentful/exportContent/post';

const Layout = loadable(() => import('@layout/layout'), {
  fallback: <CircularProgress color="secondary" />,
});
const Temp_Post = loadable(() => import('@template/temp_post'), {
  fallback: <CircularProgress color="secondary" />,
});

type propsType = {
  post: contentful.post;
  isPreviewPost: boolean;
};

const PreviewPage: NextPage<propsType> = (props) => {
  return props.post && props.isPreviewPost ? (
    <Layout>
      <div>
        <Link href="/api/exit-preview">Previewモード終了</Link>
      </div>
      <Temp_Post currentPost={props.post} />
    </Layout>
  ) : (
    <ErrorPage statusCode={404} />
  );
};

export default PreviewPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params ? context.params.slug : '';
  const targetPost = context.preview
    ? slug && (await getPreviewPostBySlug({ slug }))
    : null;
  const isPreviewPost: boolean = targetPost
    ? targetPost.fields.slug === slug
    : false;

  return {
    props: {
      post: targetPost,
      isPreviewPost,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
