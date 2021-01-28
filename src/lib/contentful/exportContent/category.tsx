import { client } from './client';

// Category
export const getAllCategory = async (): Promise<contentful.category[]> => {
  const res: contentful.categoryCollection = await client.getEntries({
    content_type: 'category',
  });
  const categories = res.items;
  return categories;
};

export const getPostByCategory = async (
  props: contentful.MyLib.getPostByCategory.props
): Promise<contentful.post[]> => {
  const res: contentful.postCollection = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.category.sys.id': props.id,
  });
  return res.items;
};
