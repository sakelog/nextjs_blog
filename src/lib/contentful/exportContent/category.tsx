import { client } from './client';

// Category
export const getAllCategory = async (): Promise<
  contentful.category[] | null
> => {
  const res: contentful.categoryCollection = await client.getEntries({
    content_type: 'category',
  });
  const categories = res.items;
  return typeof categories === 'undefined' ? null : categories;
};

export const getPostByCategory = async (
  props: contentful.MyLib.getPostByCategory.props
): Promise<contentful.post[] | null> => {
  const res: contentful.postCollection = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.category.sys.id': props.id,
  });
  const post = res.items;
  return typeof post === 'undefined' ? null : post;
};
