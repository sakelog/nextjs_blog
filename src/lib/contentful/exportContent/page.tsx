import { client } from './client';

// Page
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

export const getPageBySlug = async (
  props: Contentful.MyLib.getPageBySlug.props
): Promise<Contentful.page | null> => {
  const res: Contentful.pageCollection | undefined =
    await client?.getEntries({
      content_type: 'page',
      'fields.slug': props.slug,
    });
  const page =
    typeof res?.items === 'undefined' ? null : res.items[0];
  return page;
};
