import { getPageSlugs } from './getPageSlugs';
import { getPageBySlug } from './getPageBySlug';

export const getAllPages = () => {
  const slugs = getPageSlugs();
  const pages = slugs.map((slug) =>
    getPageBySlug(slug, ['slug'])
  ) as { slug: string }[];

  return pages;
};
