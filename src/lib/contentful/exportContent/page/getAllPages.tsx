import { client } from '@lib/contentful/exportContent/client';

export const getAllPages = async (): Promise<
  Contentful.Page[] | null
> => {
  const pages = client
    ?.getEntries({ content_type: 'page' })
    .then((res) => res?.items);
  return typeof pages === 'undefined' ? null : pages;
};
