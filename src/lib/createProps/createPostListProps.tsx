import { getPostListSlugs, getPostListNumPages } from '../getSlugs';

const CreatePostListProps = async (
  props: createProps.postList.props
): Promise<Template.postList.props | boolean> => {
  const postListSlugs = getPostListSlugs(
    getPostListNumPages({ posts: props.allpost, per_page: props.per_page })
  );
  const isPostList =
    postListSlugs.some((postListSlug) => postListSlug === props.slug) ||
    props.slug === '/';
  const postListSkip = isPostList
    ? props.slug === '/'
      ? 0
      : (Number(props.slug) - 1) * props.per_page
    : null;
  const targetPosts = isPostList
    ? props.allpost.slice(postListSkip, postListSkip + props.per_page)
    : null;
  const currentPage = isPostList ? Number(props.slug) : null;
  const lastPage = Number(postListSlugs[postListSlugs.length - 1]);

  return isPostList
    ? { pathBase: '/', posts: targetPosts, currentPage, lastPage }
    : false;
};

export default CreatePostListProps;
