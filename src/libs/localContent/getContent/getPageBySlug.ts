import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { pageDirectory } from './type';

export const getPageBySlug = (
  slug: string,
  fields = []
) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(pageDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  const items = {};
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};
