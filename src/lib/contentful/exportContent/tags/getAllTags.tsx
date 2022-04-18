import { client } from '@lib/contentful/exportContent/client';

export const getAllTags =
  async (): Promise<Contentful.TagsCollection | null> => {
    const tags = client
      ?.getEntries({
        content_type: 'tags',
        order: '-sys.createdAt',
      })
      .then((res) =>
        typeof res?.items === 'undefined' ? null : res.items
      );

    return tags;
  };
