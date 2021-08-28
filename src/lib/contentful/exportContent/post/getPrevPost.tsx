import { postControler } from '@lib/contentful/exportContent';

type PropsType = {
  slug: string;
};

export const getPrevPost = async (
  props: PropsType
): Promise<Contentful.post | null> => {
  const allPosts = await postControler.getAllPosts();
  const currentIndex = await postControler.getPostIndex({
    slug: props.slug,
    posts: allPosts,
  });
  const prevPost = allPosts
    ? currentIndex < allPosts.length - 1
      ? await postControler.getPostBySlug({
          slug: allPosts[currentIndex + 1].fields.slug,
        })
      : null
    : null;
  return prevPost;
};
