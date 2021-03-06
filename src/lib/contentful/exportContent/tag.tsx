import { client } from './client';

// Tag
export const getAllTags = async (): Promise<contentful.tags[] | null> => {
  const res: contentful.tagsCollection | undefined = await client?.getEntries({
    content_type: 'tags',
    order: '-sys.createdAt',
  });
  const tags = typeof res?.items === 'undefined' ? null : res.items;
  return tags;
};

export const getPostByTag = async (
  props: contentful.MyLib.getPostByTag.props
): Promise<contentful.post[] | null> => {
  const res: contentful.postCollection | undefined = await client?.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.tags.sys.id': props.id,
  });
  const post = typeof res?.items === 'undefined' ? null : res.items;
  return post;
};
