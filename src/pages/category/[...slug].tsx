import { GetStaticProps, GetStaticPaths } from 'next';

import {
  getAllCategory,
  getPostByCategory,
} from '../../lib/contentful/exportContent';
import { getPostListNumPages, getPostListSlugs } from '../../lib/getSlugs';
import { toKebabCase } from '../../lib/toKebabCase';

import Layout from '../../components/layout/layout';
import Temp_CatTag from '../../template/temp_catTag';

const POST_PER_LISTPAGE = 10;
const CATEGORY = 'category';

const TagsDirectory = (props) => {
  return (
    <Layout>
      <Temp_CatTag
        name={props.name}
        posts={props.posts}
        type={CATEGORY}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
    </Layout>
  );
};

export default TagsDirectory;

export const getStaticProps: GetStaticProps = async (context) => {
  const allCategory = await getAllCategory();
  const slug = context.params.slug;
  const allCategorySlugs = getCategorySlugs(allCategory);
  let id: string = null;
  let name: string = null;
  allCategorySlugs.some((catSlug) => {
    catSlug.slug === slug[0];
    if (catSlug.slug === slug[0]) {
      id = catSlug.id;
      name = catSlug.name;
    }
  });

  const allPosts = await getPostByCategory({ id: id });
  const lastPage = getPostListNumPages({
    posts: allPosts,
    per_page: POST_PER_LISTPAGE,
  });
  const currentPage = slug.length > 1 ? Number(slug[slug.length - 1]) : 1;
  const skip =
    slug.length > 1
      ? (Number(slug[slug.length - 1]) - 1) * POST_PER_LISTPAGE
      : 0;
  const limit = skip + POST_PER_LISTPAGE;
  const targetPosts = allPosts.slice(skip, limit);

  const pathBase = '/' + CATEGORY + '/' + slug[0] + '/';

  return {
    props: {
      name: name,
      posts: targetPosts,
      totalCount: allPosts.length,
      lastPage: lastPage,
      currentPage: currentPage,
      pathBase: pathBase,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategory = await getAllCategory();

  let allSlugs = [];

  for (let index = 0; index < allCategory.length; index++) {
    const targetPost = await getPostByCategory({
      id: allCategory[index].sys.id,
    });
    targetPost.length > 0 &&
      allSlugs.push([toKebabCase(allCategory[index].fields.slug)]);
    const ListNum = getPostListNumPages({
      posts: targetPost,
      per_page: POST_PER_LISTPAGE,
    });
    const ListSlugs = getPostListSlugs(ListNum);
    ListSlugs &&
      ListSlugs.map((slug) => {
        allSlugs.push([toKebabCase(allCategory[index].fields.slug), slug]);
      });
  }

  const paths = allSlugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return { paths, fallback: false };
};

// Category slug一覧
const getCategorySlugs = (allCategory: contentful.category[]) => {
  let categorySlugs: { slug: string; id: string; name: string }[] = Array.from(
    { length: allCategory.length },
    (_, i) => {
      return {
        slug: toKebabCase(allCategory[i].fields.slug),
        id: allCategory[i].sys.id,
        name: allCategory[i].fields.name,
      };
    }
  );
  return categorySlugs;
};
