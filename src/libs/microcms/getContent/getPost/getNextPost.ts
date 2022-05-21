// libs
import { getPostIndex } from './getPostIndex';
import { getAllPosts } from './getAllPosts';
import { getPostByID } from './getPostByID';

type PropsType = {
  id: string;
};

export const getNextPost = async ({ id }: PropsType) => {
  const allPosts = await getAllPosts({});
  const currentIndex = getPostIndex({
    id,
    posts: allPosts,
  });

  const nextPost =
    currentIndex > 0
      ? await getPostByID({
          targetID: allPosts.contents[currentIndex - 1].id,
        })
      : null;

  return nextPost;
};
