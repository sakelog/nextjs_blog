import { postControler } from '@lib/contentful/exportContent';

type PropsType = {
  slug: string;
};

export const getNextPost = async (
  props: PropsType
): Promise<Contentful.Post | null> => {
  const nextPost = postControler
    .getAllPosts()
    .then((allPosts) => {
      const currentIndex = postControler.getPostIndex({
        slug: props.slug,
        posts: allPosts,
      });

      return allPosts
        ? currentIndex > 0
          ? postControler
              .getPostBySlug({
                slug: allPosts[currentIndex - 1].fields
                  .slug,
              })
              .then((post) => post)
          : null
        : null;
    });

  return nextPost;
};
