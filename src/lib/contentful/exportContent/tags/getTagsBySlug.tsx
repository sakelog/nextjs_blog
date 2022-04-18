import { client } from '@lib/contentful/exportContent/client';

export const getTagsBySlug = async (
  slug: string
): Promise<Contentful.Tags | null> => {
  const tags = client
    ?.getEntries({
      content_type: 'tags',
      'fields.slug': slug,
    })
    .then((res) =>
      typeof res?.items === 'undefined'
        ? null
        : res.items[0]
    );
  return tags;
};
