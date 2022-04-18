import { postControler } from '@lib/contentful/exportContent';

type PropsType = {
  slug: string;
};

export const getPrevPost = async (
  props: PropsType
): Promise<Contentful.Post | null> => {
  const prevPost = postControler
    .getAllPosts()
    .then((allPosts) => {
      const currentIndex = postControler.getPostIndex({
        slug: props.slug,
        posts: allPosts,
      });

      return allPosts
        ? currentIndex < allPosts.length - 1
          ? postControler
              .getPostBySlug({
                slug: allPosts[currentIndex + 1].fields
                  .slug,
              })
              .then((post) => post)
          : null
        : null;
    });

  return prevPost;
};
