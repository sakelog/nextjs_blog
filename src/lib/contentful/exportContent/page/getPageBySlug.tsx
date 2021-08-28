import { client } from '@lib/contentful/exportContent/client';

export const getPageBySlug = async (
  slug: string
): Promise<Contentful.page | null> => {
  const res: Contentful.pageCollection | undefined =
    await client?.getEntries({
      content_type: 'page',
      'fields.slug': slug,
    });
  const page =
    typeof res?.items === 'undefined' ? null : res.items[0];
  return page;
};
