import { client, previewClient } from './client';

// Post
export const getPostBySlug = async (
  props: contentful.MyLib.getPostBySlug.props
): Promise<contentful.post | null> => {
  const res: contentful.postCollection | undefined = !props.preview
    ? await client?.getEntries({
        content_type: 'post',
        'fields.slug': props.slug,
      })
    : await previewClient?.getEntries({
        content_type: 'post',
        'fields.slug': props.slug,
      });
  const post = typeof res?.items === 'undefined' ? null : res.items[0];
  return post;
};

export const getPrevPost = async (
  props: contentful.MyLib.getPostIndex.props
): Promise<contentful.post | null> => {
  const currentIndex = await getPostIndex({
    slug: props.slug,
    posts: props.posts,
  });
  const prevPost =
    currentIndex < props.posts.length - 1
      ? await getPostBySlug({ slug: props.posts[currentIndex + 1].fields.slug })
      : null;
  return prevPost;
};

export const getNextPost = async (
  props: contentful.MyLib.getPostIndex.props
): Promise<contentful.post | null> => {
  const currentIndex = await getPostIndex({
    slug: props.slug,
    posts: props.posts,
  });
  const nextPost =
    currentIndex > 0
      ? await getPostBySlug({ slug: props.posts[currentIndex - 1].fields.slug })
      : null;
  return nextPost;
};

export const getPostIndex = (
  props: contentful.MyLib.getPostIndex.props
): number => {
  let result = 0;
  props.posts.some((post, index) => {
    result = index;
    if (post.fields.slug === props.slug) {
      return true;
    }
  });
  return result;
};

// --preview
export const getPreviewPostBySlug = async (
  props: contentful.MyLib.getPreviewPostBySlug.props
): Promise<contentful.post | null> => {
  const res = await getPostBySlug({ slug: props.slug, preview: true });
  return res;
};
