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

import {
  getAllTags,
  getPostByTag,
} from '@lib/contentful/exportContent/tag';
import {
  getPostListNumPages,
  getPostListSlugs,
} from '@lib/getSlugs';
import { toKebabCase } from '@lib/toKebabCase';
import CreateTagsProps from '@lib/createProps/createTagsProps';

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
  const allTags = await getAllTags();

  const allSlugs = [];

  if (allTags) {
    for (let index = 0; index < allTags.length; index++) {
      const targetPost = await getPostByTag({
        id: allTags[index].sys.id,
      });
      targetPost &&
        targetPost.length > 0 &&
        allSlugs.push([
          toKebabCase(allTags[index].fields.slug),
        ]);
      const ListNum = getPostListNumPages({
        posts: targetPost,
        per_page: POST_PER_LISTPAGE,
      });
      const ListSlugs = getPostListSlugs(ListNum);
      ListSlugs &&
        ListSlugs.map((slug) => {
          allSlugs.push([
            toKebabCase(allTags[index].fields.slug),
            slug,
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
    const alltags = await getAllTags();
    const slug = context.params ? context.params.slug : '';

    const tagsProps =
      alltags && slug
        ? await CreateTagsProps({
            alltags,
            slug,
            per_page: POST_PER_LISTPAGE,
          })
        : {
            name: '',
            posts: null,
            type: '',
            totalCount: 0,
            currentPage: 0,
            lastPage: 0,
            pathBase: '',
          };

    return {
      props: tagsProps,
    };
  };
