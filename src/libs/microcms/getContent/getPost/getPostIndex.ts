import type { MicroCMSListResponse } from 'microcms-js-sdk';

type PropsType = {
  id: string;
  posts: MicroCMSListResponse<Content.Post>;
};

export const getPostIndex = (props: PropsType): number => {
  let result = 0;
  props.posts.contents.some((post, index) => {
    result = index;
    if (post.id === props.id) {
      return true;
    }
  });
  return result;
};
