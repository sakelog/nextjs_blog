import { toKebabCase } from './toKebabCase';

export function getCategoryPath(slug: string) {
  const basePath = '/category/';
  return setPath(slug, basePath);
}

export function getTagPath(slug: string) {
  const basePath = '/tags/';
  return setPath(slug, basePath);
}

export function getRootPath(slug: string) {
  return '/' + slug + '/';
}

function setPath(slug: string, basePath: string) {
  let combinePath = basePath;
  combinePath += toKebabCase(slug);
  combinePath += '/';

  return combinePath;
}
