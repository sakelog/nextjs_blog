import _ from 'lodash';

export function getCategoryPath(slug: string) {
  const basePath = '/category/';
  return setPath(slug, basePath);
}

export function getTagPath(slug: string) {
  const basePath = '/tags/';
  return setPath(slug, basePath);
}

export function getRootPath(slug: string) {
  const basePath = '/';
  return setPath(slug, basePath);
}

function setPath(slug: string, basePath: string) {
  let combinePath = basePath;
  combinePath += _.kebabCase(slug);
  combinePath += '/';

  return combinePath;
}
