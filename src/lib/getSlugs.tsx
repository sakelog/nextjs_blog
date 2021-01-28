import { toKebabCase } from './toKebabCase';

// post slug一覧
export const getPostSlugs = (posts: contentful.post[]) => {
  const postSlugs: { slug: string; realSlug: string }[] = Array.from(
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
export const getPageSlugs = (pages: contentful.page[]) => {
  let pageSlugs: { slug: string; realSlug: string }[] = Array.from(
    { length: pages.length },
    (_, i) => {
      return {
        slug: toKebabCase(pages[i].fields.slug),
        realSlug: pages[i].fields.slug,
      };
    }
  );
  pageSlugs = pageSlugs.filter((page) => page.slug !== '404');
  return pageSlugs;
};

// 記事数で分割
export const getPostListNumPages = (
  props: routing.getPostListNumPages.props
) => {
  return Math.ceil(props.posts.length / props.per_page);
};

// postList slug一覧
export const getPostListSlugs = (postListNumPages: number) => {
  const postListSlugs = Array.from({ length: postListNumPages - 1 }, (_, i) =>
    (i + 2).toString()
  );
  return postListSlugs;
};

// Category slug一覧
export const getCategorySlugs = (allCategory: contentful.category[]) => {
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

// Tag slug一覧
export const getTagSlugs = (tags: contentful.tags) => {
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
