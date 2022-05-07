import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

import CustomHead from '@components/CustomHead';
import BackToTop from '@components/Pagination/BackToTop';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ArticleBody = dynamic(
  () => import('@components/ArticleBody'),
  {
    suspense: true,
  }
);

import { markdownToHtml } from '@lib/markdown/markdownToHtml';
import { pageControler } from '@lib/contentful/exportContent';
import { toKebabCase } from '@lib/util/toKebabCase';

type PageProps = {
  page: Contentful.PageOutput | null;
};

const SinglePage: NextPage<PageProps> = (props) => {
  const body = props.page?.fields.body || '';
  return (
    <>
      {props.page && (
        <article>
          <CustomHead
            pageTitle={props.page.fields.title}
            description={props.page.fields.description}
          />
          <div className="p-4">
            <h1>{props.page.fields.title}</h1>
            <Suspense fallback={'loading'}>
              <ArticleBody body={body} />
            </Suspense>
          </div>
          <BackToTop />
        </article>
      )}
    </>
  );
};

export default SinglePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return pageControler.getAllPages().then((allPages) => {
    const paths = allPages?.map((page) => ({
      params: { slug: toKebabCase(page.fields.slug) },
    })) || [{ params: { slug: '' } }];

    return { paths, fallback: false };
  });
};

export const getStaticProps: GetStaticProps<
  PageProps
> = async (context) => {
  const slug =
    typeof context.params?.slug === 'string'
      ? context.params?.slug
      : '';

  return pageControler
    .getPageBySlug(slug)
    .then(async (page) => {
      const bodyToString = page
        ? markdownToHtml(page.fields.body).then((body) =>
            body?.toString()
          )
        : null;

      const fields = {
        title: page?.fields.title || '',
        slug: page?.fields.slug || '',
        description: page?.fields.description || '',
        date: page?.fields.date || '',
        update: page?.fields.update || null,
        body: await bodyToString?.then((res) => res),
      };

      return {
        props: {
          page: {
            sys: page?.sys,
            fields,
          },
        },
      };
    });
};
