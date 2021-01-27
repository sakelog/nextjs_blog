export const getPostListNumPages = (
  props: routing.getPostListNumPages.props
) => {
  return Math.ceil(props.posts.length / props.per_page);
};

// postList slug一覧
export const getPostListSlugs = (postListNumPages: number) => {
  const postListSlugs = Array.from({ length: postListNumPages - 1 }, (_, i) =>
    (i + 2).toString()
  );
  return postListSlugs;
};
