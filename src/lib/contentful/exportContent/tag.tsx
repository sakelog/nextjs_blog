import { client } from './client';

// Tag
export const getAllTags = async (): Promise<
  Contentful.tags[] | null
> => {
  const res: Contentful.tagsCollection | undefined =
    await client?.getEntries({
      content_type: 'tags',
      order: '-sys.createdAt',
    });
  const tags =
    typeof res?.items === 'undefined' ? null : res.items;
  return tags;
};

export const getPostByTag = async (
  props: Contentful.MyLib.getPostByTag.props
): Promise<Contentful.post[] | null> => {
  const res: Contentful.postCollection | undefined =
    await client?.getEntries({
      content_type: 'post',
      order: '-fields.date',
      'fields.tags.sys.id': props.id,
    });
  const post =
    typeof res?.items === 'undefined' ? null : res.items;
  return post;
};
