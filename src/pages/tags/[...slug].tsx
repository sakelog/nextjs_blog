import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

import CustomHead from '@components/customHead';
import Layout from '@layout/layout';
import IndexList from '@components/indexList';
import Pagination from '@components/pagination/pagination';
import BackToTop from '@components/pagination/backToTop';

import { tagsControler } from '@lib/contentful/exportContent';
import { toKebabCase } from '@lib/util/toKebabCase';
import { getTagsPath } from '@lib/util/getPath';

const POST_PER_LISTPAGE = 10;

type PageProps = {
  name: string;
  posts: Contentful.post[] | null;
  totalCount: number;
  currentPage: number;
  lastPage: number;
  pathBase: string;
};

const TagsDirectory: NextPage<PageProps> = (props) => {
  const pageTitle = 'タグ：' + props.name;
  const description =
    pageTitle +
    'についての一覧ページ' +
    (props.currentPage > 1
      ? ':' + props.currentPage + 'ページ目'
      : '');
  return (
    <Layout>
      <CustomHead
        pageTitle={
          pageTitle +
          (props.currentPage > 1
            ? '(' + props.currentPage + ')'
            : '')
        }
        description={description}
      />
      <section>
        <h1>{pageTitle}</h1>
        <p className="my-2 text-sm">
          投稿：{props.totalCount}件
        </p>
        {props.posts && <IndexList posts={props.posts} />}
      </section>
      <Pagination
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
      <nav className="flex items-center space-x-2">
        <BackToTop slug="tags" title="タグ一覧" />
        <span className="text-gray-400">/</span>
        <BackToTop />
      </nav>
    </Layout>
  );
};

export default TagsDirectory;

//-----------------------------------------------------------------------------

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await tagsControler.getAllTags();

  const allSlugs = [];

  if (allTags) {
    for (let index = 0; index < allTags.length; index++) {
      const targetPosts =
        await tagsControler.getPostsByTags(
          allTags[index].sys.id
        );
      targetPosts &&
        targetPosts.length > 0 &&
        allSlugs.push([
          toKebabCase(allTags[index].fields.slug),
        ]);
      const lastPage = targetPosts
        ? Math.ceil(targetPosts.length / POST_PER_LISTPAGE)
        : 0;
      const numList =
        lastPage > 1
          ? [...Array(lastPage - 1)].map((_, i) => i + 2)
          : [];
      numList.map((number) => {
        allSlugs.push([
          toKebabCase(allTags[index].fields.slug),
          number,
        ]);
      });
    }
  }

  const paths = allSlugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return { paths, fallback: false };
};

//-----------------------------------------------------------------------------

export const getStaticProps: GetStaticProps<PageProps> =
  async (context) => {
    const slug = context.params ? context.params.slug : '';
    const baseSlug = slug ? slug[0] : '';

    const targetTags = await tagsControler.getTagsBySlug(
      baseSlug
    );
    const targetPosts = targetTags?.sys.id
      ? await tagsControler.getPostsByTags(
          targetTags?.sys.id
        )
      : null;
    const lastPage = targetPosts
      ? Math.ceil(targetPosts.length / POST_PER_LISTPAGE)
      : 0;
    const pathBase = getTagsPath(baseSlug);
    const currentPage = slug
      ? slug.length > 1
        ? Number(slug[slug.length - 1])
        : 1
      : 0;

    return {
      props: {
        name: targetTags?.fields.name || '',
        posts: targetPosts,
        lastPage,
        totalCount: targetPosts ? targetPosts.length : 0,
        currentPage,
        pathBase,
      },
    };
  };
