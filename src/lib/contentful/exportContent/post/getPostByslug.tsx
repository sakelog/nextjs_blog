import {
  client,
  previewClient,
} from '@lib/contentful/exportContent/client';

type PropsType = {
  slug: string;
  preview?: boolean;
};

export const getPostBySlug = async (
  props: PropsType
): Promise<Contentful.post | null> => {
  const res: Contentful.postCollection | undefined =
    !props.preview
      ? await client?.getEntries({
          content_type: 'post',
          'fields.slug': props.slug,
        })
      : await previewClient?.getEntries({
          content_type: 'post',
          'fields.slug': props.slug,
        });
  const post =
    typeof res?.items === 'undefined' ? null : res.items[0];
  return post;
};
