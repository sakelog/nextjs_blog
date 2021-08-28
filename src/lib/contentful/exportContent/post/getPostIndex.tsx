type PropsType = {
  slug: string;
  posts: Contentful.post[] | null;
};

export const getPostIndex = (props: PropsType): number => {
  let result = 0;
  props.posts?.some((post, index) => {
    result = index;
    if (post?.fields.slug === props.slug) {
      return true;
    }
  });
  return result;
};
