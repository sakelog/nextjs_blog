import { postControler } from '@lib/contentful/exportContent';

type PropsType = {
  slug: string;
};

export const getNextPost = async (
  props: PropsType
): Promise<Contentful.post | null> => {
  const allPosts = await postControler.getAllPosts();
  const currentIndex = await postControler.getPostIndex({
    slug: props.slug,
    posts: allPosts,
  });
  const nextPost = allPosts
    ? currentIndex > 0
      ? await postControler.getPostBySlug({
          slug: allPosts[currentIndex - 1].fields.slug,
        })
      : null
    : null;
  return nextPost;
};
