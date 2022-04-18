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
): Promise<Contentful.Post | null> => {
  const post = !props.preview
    ? client
        ?.getEntries({
          content_type: 'post',
          'fields.slug': props.slug,
        })
        .then((res) =>
          typeof res?.items === 'undefined'
            ? null
            : res.items[0]
        )
    : previewClient
        ?.getEntries({
          content_type: 'post',
          'fields.slug': props.slug,
        })
        .then((res) =>
          typeof res?.items === 'undefined'
            ? null
            : res.items[0]
        );

  return post;
};
