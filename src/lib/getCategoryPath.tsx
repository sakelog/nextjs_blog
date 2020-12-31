import _ from 'lodash';

export function getCategoryPath(slug: string) {
  const basePath = '/category/';

  let categoryPath = basePath;
  categoryPath += _.kebabCase(slug);
  categoryPath += '/';

  return categoryPath;
}
