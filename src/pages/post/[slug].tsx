import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

// lib
import { markdownToHtml } from '@lib/markdown/markdownToHtml';
import { postControler } from '@lib/contentful/exportContent';
import { toKebabCase } from '@lib/util/toKebabCase';
import { getYMDObject } from '@lib/util/getFormatDate';
import { createOGImage } from '@lib/util/createOGImage';

// components
import CustomHead from '@components/CustomHead';
import DateDisplay from '@components/DateDisplay';
import Bio from '@components/Bio';
import TagList from '@components/TagList';
import PrevNext from '@components/Pagination/PrevNext';
import BackToTop from '@components/Pagination/BackToTop';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const ArticleBody = dynamic(
  () => import('@components/ArticleBody'),
  {
    suspense: true,
  }
);
const TOC = dynamic(() => import('@components/Post/TOC'), {
  suspense: true,
});
import Loader from '@components/Loader';

// ad
import AdForPostArticle from '@components/GTM/AdForPostArticle';
import AdForPostSide from '@components/GTM/AdForPostSide';

type PropsType = {
  currentPost: Contentful.PostOutput | null;
  prevPost: Contentful.PostPrevNextItem | null;
  nextPost: Contentful.PostPrevNextItem | null;
  ogImagePath: string;
};

const SinglePost: NextPage<PropsType> = ({
  currentPost,
  prevPost,
  nextPost,
  ogImagePath,
}) => {
  const {
    description,
    title,
    body,
    rowBody,
    date,
    update,
    tags,
  } = currentPost?.fields as Contentful.PostFieldsOutput;

  const pageTitle = title || '';

  const Date = () =>
    update ? (
      <DateDisplay {...getYMDObject(update)} />
    ) : (
      <DateDisplay {...getYMDObject(date)} />
    );

  const Article = () => (
    <section className="lg:col-span-3 bg-white p-4">
      <PrevNext prevPost={prevPost} nextPost={nextPost} />
      <article className="p-4">
        <div className="max-w-screen-sm mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-none">
              <Date />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-2xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center
      gap-2 my-4"
        >
          <TagList tags={tags} heading="h2" />
        </div>
        <AdForPostArticle />
        <Suspense fallback={<Loader />}>
          <ArticleBody body={body} />
        </Suspense>
      </article>
      <PrevNext prevPost={prevPost} nextPost={nextPost} />
      <BackToTop />
    </section>
  );

  const Side = () => (
    <aside className="bg-white p-2 space-y-4">
      <Bio />
      <AdForPostSide />
      <div className="bg-white lg:sticky lg:top-4">
        <Suspense fallback={<Loader />}>
          <TOC rowBody={rowBody} />
        </Suspense>
      </div>
    </aside>
  );

  return (
    <>
      <CustomHead
        pageTitle={pageTitle}
        description={description}
        ogImagePath={ogImagePath}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {currentPost && <Article />}
        <Side />
      </div>
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
    (await postControler.getPostBySlug({
      slug,
    })) || null;

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

  const ogImagePath = await createOGImage(
    currentPost.fields.title,
    slug
  );

  return {
    props: {
      currentPost: {
        ...currentPost,
        fields: {
          ...currentPost.fields,
          body: currentBody,
          rowBody: currentPost.fields.body,
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
      ogImagePath,
    },
  };
};
