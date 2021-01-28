import { client } from './client';

// Tag
export const getAllTags = async (): Promise<contentful.tags[]> => {
  const res: contentful.tagsCollection = await client.getEntries({
    content_type: 'tags',
    order: '-sys.createdAt',
  });
  const tags = res.items;
  return tags;
};

export const getPostByTag = async (
  props: contentful.MyLib.getPostByTag.props
): Promise<contentful.post[]> => {
  const res: contentful.postCollection = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.tags.sys.id': props.id,
  });
  return res.items;
};
