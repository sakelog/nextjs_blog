import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

import { markdownToHtml } from '@lib/markdown/markdownToHtml';
import { postControler } from '@lib/contentful/exportContent';
import { toKebabCase } from '@lib/util/toKebabCase';

import CustomHead from '@components/CustomHead';
import Bio from '@components/postParts/Bio';
import PostDate from '@components/PostDate';
import TagList from '@components/TagList';
import PrevNext from '@components/pagination/PrevNext';
import BackToTop from '@components/pagination/BackToTop';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ArticleBody = dynamic(
  () => import('@components/postParts/ArticleBody'),
  {
    suspense: true,
  }
);

type PropsType = {
  currentPost?: Contentful.PostOutput | null;
  prevPost: Contentful.Post | null;
  nextPost: Contentful.Post | null;
};

const SinglePost: NextPage<PropsType> = (props) => {
  const body = props.currentPost?.fields.body || '';
  const pageTitle = props.currentPost?.fields.title || '';
  return (
    <>
      {props.currentPost && (
        <>
          <CustomHead
            pageTitle={pageTitle}
            description={
              props.currentPost.fields.description
            }
            imgFLG={true}
          />
          <PrevNext
            prevPost={props.prevPost}
            nextPost={props.nextPost}
          />
          <article className="p-2">
            <section className="p-4">
              <h1>{props.currentPost.fields.title}</h1>
              <PostDate
                postdate={props.currentPost.fields.date}
                update={props.currentPost.fields.update}
              />
              <ul className="flex flex-col items-center">
                <li>
                  <TagList
                    tags={props.currentPost.fields.tags}
                    heading="h6"
                  />
                </li>
              </ul>
              <Suspense fallback={'loading'}>
                <ArticleBody body={body} />
              </Suspense>
            </section>
            <Bio />
          </article>
          <PrevNext
            prevPost={props.prevPost}
            nextPost={props.nextPost}
          />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default SinglePost;

export const getStaticPaths: GetStaticPaths = async () => {
  return postControler.getAllPosts().then((allPosts) => {
    const paths = allPosts?.map((post) => ({
      params: { slug: toKebabCase(post.fields.slug) },
    })) || [{ params: { slug: '' } }];

    return { paths, fallback: false };
  });
};

export const getStaticProps: GetStaticProps<
  PropsType
> = async (context) => {
  const slug =
    typeof context.params?.slug === 'string'
      ? context.params?.slug || ''
      : '';

  const allPosts = await postControler.getAllPosts();
  const currentPost = await postControler.getPostBySlug({
    slug,
  });
  const currentSlug = currentPost?.fields.slug;
  const prevPost =
    allPosts && currentSlug
      ? await postControler.getPrevPost({
          slug: currentSlug,
        })
      : null;
  const nextPost =
    allPosts && currentSlug
      ? await postControler.getNextPost({
          slug: currentSlug,
        })
      : null;

  const currentBody = currentPost
    ? await markdownToHtml(currentPost.fields.body)
    : null;
  const currentBodyString = currentBody?.toString() || null;

  return {
    props: {
      currentPost: {
        sys: currentPost?.sys,
        fields: {
          title: currentPost?.fields.title || '',
          slug: currentPost?.fields.slug || '',
          date: currentPost?.fields.date || '',
          update: currentPost?.fields.update || null,
          category: currentPost?.fields.category || null,
          tags: currentPost?.fields.tags || [],
          description:
            currentPost?.fields.description || '',
          body: currentBodyString,
        },
      },
      prevPost,
      nextPost,
    },
  };
};
