import { client } from './client';

// Page
export const getAllPages = async (): Promise<contentful.page[]> => {
  const res: contentful.pageCollection = await client.getEntries({
    content_type: 'page',
  });
  const pages = res.items;
  return pages;
};

export const getPageBySlug = async (
  props: contentful.MyLib.getPageBySlug.props
): Promise<contentful.page> => {
  const res: contentful.pageCollection = await client.getEntries({
    content_type: 'page',
    'fields.slug': props.slug,
  });
  return res.items[0];
};
