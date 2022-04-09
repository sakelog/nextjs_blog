import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

import Layout from '@layout/layout';
import CustomHead from '@components/customHead';
import ArticleBody from '@components/postParts/articleBody';
import BackToTop from '@components/pagination/backToTop';

import { markdownToHtml } from '@lib/markdown/markdownToHtml';
import { pageControler } from '@lib/contentful/exportContent';
import { toKebabCase } from '@lib/util/toKebabCase';

type PageProps = {
  page: Contentful.PageOutput | null;
};

const SinglePage: NextPage<PageProps> = (props) => {
  const body = props.page?.fields.body || '';
  return (
    <Layout>
      {props.page && (
        <article>
          <CustomHead
            pageTitle={props.page.fields.title}
            description={props.page.fields.description}
          />
          <div className="p-4">
            <h1>{props.page.fields.title}</h1>
            <ArticleBody body={body} />
          </div>
          <BackToTop />
        </article>
      )}
    </Layout>
  );
};

export default SinglePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await pageControler.getAllPages();

  const paths = allPages?.map((page) => ({
    params: { slug: toKebabCase(page.fields.slug) },
  })) || [{ params: { slug: '' } }];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  PageProps
> = async (context) => {
  const slug =
    typeof context.params?.slug === 'string'
      ? context.params?.slug
      : '';

  const page = await pageControler.getPageBySlug(slug);

  const body = page
    ? await markdownToHtml(page.fields.body)
    : null;
  const bodyToString = body?.toString() || null;

  return {
    props: {
      page: {
        sys: page?.sys,
        fields: {
          title: page?.fields.title || '',
          slug: page?.fields.slug || '',
          description: page?.fields.description || '',
          date: page?.fields.date || '',
          update: page?.fields.update || null,
          body: bodyToString,
        },
      },
    },
  };
};
