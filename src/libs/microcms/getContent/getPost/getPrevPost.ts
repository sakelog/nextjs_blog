// libs
import { getPostIndex } from './getPostIndex';
import { getAllPosts } from './getAllPosts';
import { getPostByID } from './getPostByID';

type PropsType = {
  id: string;
};

export const getPrevPost = async ({ id }: PropsType) => {
  const allPosts = await getAllPosts({});
  const currentIndex = getPostIndex({
    id,
    posts: allPosts,
  });

  const prevPost =
    currentIndex < allPosts.totalCount - 1
      ? getPostByID({
          targetID: allPosts.contents[currentIndex + 1].id,
        })
      : null;

  return prevPost;
};
