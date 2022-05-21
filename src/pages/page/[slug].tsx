import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

// libs
import {
  getAllPages,
  getPageBySlug,
} from '@/libs/localContent/getContent';
import markdownToHtml from '@/libs/localContent/markdownToHtml';

// components
import Link from 'next/link';
import CustomHead from '@/components/CustomHead';

type PageProps = {
  page: Content.Page;
};

export const getStaticPaths: GetStaticPaths = () => {
  const allPages = getAllPages();

  return {
    paths: allPages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { slug: string }
> = async (context) => {
  const page = getPageBySlug(context.params?.slug, [
    'title',
    'slug',
    'content',
  ]) as Content.Page;

  const content = await markdownToHtml(page.content || '');

  return {
    props: {
      page: {
        ...page,
        content,
      },
    },
  };
};

const SinglePage: NextPage<PageProps> = ({ page }) => (
  <>
    <CustomHead
      pageTitle={page.title}
      description={page.description}
    />
    <ul className="uk-breadcrumb">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <span>{page.title}</span>
      </li>
    </ul>
    <article className="uk-article">
      <h1 className="uk-article-title">{page.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </article>
  </>
);

export default SinglePage;
