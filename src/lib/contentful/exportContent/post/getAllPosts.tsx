import { client } from '@lib/contentful/exportContent/client';

export const getAllPosts = async (): Promise<
  Contentful.Post[] | null | undefined
> => {
  const posts = client
    ?.getEntries({
      content_type: 'post',
      order: '-fields.date',
    })
    .then((res) =>
      typeof res?.items === 'undefined' ? null : res.items
    );

  return posts;
};
