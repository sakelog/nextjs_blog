import { client } from '@lib/contentful/exportContent/client';

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
