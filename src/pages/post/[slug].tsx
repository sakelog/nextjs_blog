import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

// lib
import { markdownToHtml } from '@lib/markdown/markdownToHtml';
import { postControler } from '@lib/contentful/exportContent';
import { toKebabCase } from '@lib/util/toKebabCase';

// components
import CustomHead from '@components/CustomHead';
import Bio from '@components/postParts/Bio';
import PostDate from '@components/PostDate';
import TagList from '@components/TagList';
import PrevNext from '@components/pagination/PrevNext';
import BackToTop from '@components/pagination/BackToTop';
import AdForPost from '@components/GTM/AdForPost';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ArticleBody = dynamic(
  () => import('@components/postParts/ArticleBody'),
  {
    suspense: true,
  }
);

type PropsType = {
  currentPost?: Contentful.PostOutput;
  prevPost: Contentful.PostPrevNextItem | null;
  nextPost: Contentful.PostPrevNextItem | null;
};

const SinglePost: NextPage<PropsType> = ({
  currentPost,
  prevPost,
  nextPost,
}) => {
  const body = currentPost?.fields.body || '';
  const pageTitle = currentPost?.fields.title || '';
  const { description, title, date, update, tags } =
    currentPost.fields as Contentful.PostFieldsOutput;
  return (
    <>
      {currentPost && (
        <>
          <CustomHead
            pageTitle={pageTitle}
            description={description}
            imgFLG={true}
          />
          <PrevNext
            prevPost={prevPost}
            nextPost={nextPost}
          />
          <article className="p-4">
            <h1>{title}</h1>
            <div
              className="flex flex-col justify-center items-center
              gap-2 my-4"
            >
              <PostDate postdate={date} update={update} />
              <TagList tags={tags} heading="h6" />
            </div>
            <AdForPost />
            <Suspense fallback={'loading'}>
              <ArticleBody body={body} />
            </Suspense>
            <Bio />
          </article>
          <PrevNext
            prevPost={prevPost}
            nextPost={nextPost}
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
  const currentPost: Contentful.Post =
    await postControler.getPostBySlug({
      slug,
    });
  const currentSlug = currentPost?.fields.slug;
  const prevPost: Contentful.Post =
    allPosts && currentSlug
      ? await postControler.getPrevPost({
          slug: currentSlug,
        })
      : null;
  const nextPost: Contentful.Post =
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
        ...currentPost,
        fields: {
          ...currentPost.fields,
          body: currentBodyString,
        },
      },
      prevPost:
        (prevPost && {
          slug: prevPost.fields.slug,
          title: prevPost.fields.title,
        }) ||
        null,
      nextPost:
        (nextPost && {
          slug: nextPost?.fields.slug,
          title: nextPost?.fields.title,
        }) ||
        null,
    },
  };
};
