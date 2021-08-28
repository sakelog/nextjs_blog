import { client } from '@lib/contentful/exportContent/client';

export const getAllPosts = async (): Promise<
  Contentful.post[] | null
> => {
  const res: Contentful.postCollection | undefined =
    await client?.getEntries({
      content_type: 'post',
      order: '-fields.date',
    });
  const posts =
    typeof res?.items === 'undefined' ? null : res.items;
  return posts;
};
