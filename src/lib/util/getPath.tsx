import { toKebabCase } from '@lib/util/toKebabCase';

export const getPostPath = (slug: string) => {
  const POST_DIR = '/post/';
  return POST_DIR + toKebabCase(slug);
};

export const getPagePath = (slug: string) => {
  const PAGE_DIR = '/page/';
  return PAGE_DIR + toKebabCase(slug);
};

export const getTagsPath = (slug: string) => {
  const TAGS_DIR = '/tags/';
  return TAGS_DIR + toKebabCase(slug);
};
