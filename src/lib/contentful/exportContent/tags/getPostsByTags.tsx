import { client } from '@lib/contentful/exportContent/client';

export const getPostsByTags = async (
  id: string
): Promise<Contentful.Post[] | null | undefined> => {
  const posts = client
    ?.getEntries<Contentful.PostFields>({
      content_type: 'post',
      order: '-fields.date',
      'fields.tags.sys.id': id,
    })
    .then((res) =>
      typeof res?.items === 'undefined' ? null : res.items
    );

  return posts;
};
