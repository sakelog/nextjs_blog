import { client } from '@lib/contentful/exportContent/client';

export const getPageBySlug = async (
  slug: string
): Promise<Contentful.Page | null> => {
  const page = client
    ?.getEntries<Contentful.PageFields>({
      content_type: 'page',
      'fields.slug': slug,
    })
    .then((res) =>
      typeof res?.items === 'undefined'
        ? null
        : res.items[0]
    );

  return page;
};
