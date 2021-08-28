import { toKebabCase } from '@lib/util/toKebabCase';

// post slug一覧
export const getPostSlugs = (
  posts: Contentful.post[]
): getSlugs.postSlugs => {
  const postSlugs = Array.from(
    { length: posts.length },
    (_, i) => {
      return {
        slug: toKebabCase(posts[i].fields.slug),
        realSlug: posts[i].fields.slug,
      };
    }
  );
  return postSlugs;
};

// page slug一覧
export const getPageSlugs = (
  pages: Contentful.page[]
): getSlugs.pageSlugs => {
  let pageSlugs = Array.from(
    { length: pages.length },
    (_, i) => {
      return {
        slug: toKebabCase(pages[i].fields.slug),
        realSlug: pages[i].fields.slug,
      };
    }
  );
  pageSlugs = pageSlugs.filter(
    (page) => page.slug !== '404'
  );
  return pageSlugs;
};

// 記事数で分割
export const getPostListNumPages = (
  props: getSlugs.getPostListNumPages.props
): number => {
  return props.posts
    ? Math.ceil(props.posts.length / props.per_page)
    : 0;
};

// postList slug一覧
export const getPostListSlugs = (
  postListNumPages: number
): string[] => {
  const postListSlugs = Array.from(
    { length: postListNumPages - 1 },
    (_, i) => (i + 2).toString()
  );
  return postListSlugs;
};

// Category slug一覧
export const getCategorySlugs = (
  allCategory: Contentful.category[]
): getSlugs.catTagslugs => {
  const categorySlugs = Array.from(
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

// Tag slug一覧
export const getTagSlugs = (
  tags: Contentful.tags[]
): getSlugs.catTagslugs => {
  const tagSlugs = Array.from(
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
