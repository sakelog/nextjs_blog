import { toKebabCase } from '@lib/toKebabCase';

export function getCategoryPath(slug: string): string {
  const basePath = '/category/';
  return setPath(slug, basePath);
}

export function getTagPath(slug: string): string {
  const basePath = '/tags/';
  return setPath(slug, basePath);
}

export function getRootPath(slug: string): string {
  return '/' + toKebabCase(slug) + '//';
}

function setPath(slug: string, basePath: string): string {
  let combinePath = basePath;
  combinePath += toKebabCase(slug);
  combinePath += '//';

  return combinePath;
}

export function getConcatPath(domain: string, path: string): string {
  let combinePath = domain.slice(0, -1);
  combinePath += path.slice(0, -1);

  return combinePath;
}
