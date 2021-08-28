import { client } from '@lib/contentful/exportContent/client';

export const getAllPages = async (): Promise<
  Contentful.page[] | null
> => {
  const res: Contentful.pageCollection | undefined =
    await client?.getEntries({
      content_type: 'page',
    });
  const pages = res?.items;
  return typeof pages === 'undefined' ? null : pages;
};
