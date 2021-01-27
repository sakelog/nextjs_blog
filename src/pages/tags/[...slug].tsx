import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllTags, getPostByTag } from '../../lib/contentful/exportContent';
import { getPostListNumPages, getPostListSlugs } from '../../lib/routing';
import { toKebabCase } from '../../lib/toKebabCase';

import Layout from '../../components/layout/layout';
import Temp_CatTag from '../../template/temp_catTag';

const POST_PER_LISTPAGE = 10;
const TAGS = 'tags';

const TagsDirectory = (props) => {
  return (
    <Layout>
      <Temp_CatTag
        name={props.name}
        posts={props.posts}
        type={TAGS}
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
  const allTags = await getAllTags();
  const slug = context.params.slug;
  const allTagSlugs = getTagSlugs(allTags);
  let id: string = null;
  let name: string = null;
  allTagSlugs.some((tagSlug) => {
    tagSlug.slug === slug[0];
    if (tagSlug.slug === slug[0]) {
      id = tagSlug.id;
      name = tagSlug.name;
    }
  });

  const allPosts = await getPostByTag({ id: id });
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

  const pathBase = '/' + TAGS + '/' + slug[0] + '/';

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
  const allTags = await getAllTags();

  let allSlugs = [];

  for (let index = 0; index < allTags.length; index++) {
    const targetPost = await getPostByTag({ id: allTags[index].sys.id });
    targetPost.length > 0 &&
      allSlugs.push([toKebabCase(allTags[index].fields.slug)]);
    const ListNum = getPostListNumPages({
      posts: targetPost,
      per_page: POST_PER_LISTPAGE,
    });
    const ListSlugs = getPostListSlugs(ListNum);
    ListSlugs &&
      ListSlugs.map((slug) => {
        allSlugs.push([toKebabCase(allTags[index].fields.slug), slug]);
      });
  }

  const paths = allSlugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return { paths, fallback: false };
};

// Tag slug一覧
const getTagSlugs = (tags: contentful.tags) => {
  let tagSlugs: { slug: string; id: string; name: string }[] = Array.from(
    { length: tags.length },
    (_, i) => {
      return {
        slug: toKebabCase(tags[i].fields.slug),
        id: tags[i].sys.id,
        name: tags[i].fields.name,
      };
    }
  );
  return tagSlugs;
};
