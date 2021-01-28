import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Link from 'next/link';
import ErrorPage from 'next/error';
import loadable from '@loadable/component';

import { getPreviewPostBySlug } from '../../lib/contentful/exportContent';

import Layout from '../../components/layout/layout';
const Temp_Post = loadable(() => import('../../template/temp_post'));

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
  const slug = context.params.slug;
  const targetPost = context.preview
    ? await getPreviewPostBySlug({ slug: slug })
    : null;
  const isPreviewPost: boolean = targetPost
    ? targetPost.fields.slug === slug
    : false;

  return {
    props: {
      post: targetPost,
      isPreviewPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'post' } }],
    fallback: true,
  };
};
