import { client } from '@lib/contentful/exportContent/client';

export const getPostsByTags = async (
  id: string
): Promise<Contentful.post[] | null> => {
  const res: Contentful.postCollection | undefined =
    await client?.getEntries({
      content_type: 'post',
      order: '-fields.date',
      'fields.tags.sys.id': id,
    });
  const posts =
    typeof res?.items === 'undefined' ? null : res.items;
  return posts;
};
