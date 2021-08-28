import { client } from '@lib/contentful/exportContent/client';

export const getTagsBySlug = async (
  slug: string
): Promise<Contentful.tags | null> => {
  const res: Contentful.tagsCollection | undefined =
    await client?.getEntries({
      content_type: 'tags',
      'fields.slug': slug,
    });
  const tags =
    typeof res?.items === 'undefined' ? null : res.items[0];
  return tags;
};
