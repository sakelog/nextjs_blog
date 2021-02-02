import { getPostSlugs } from '@lib/getSlugs';
import {
  getPostBySlug,
  getPrevPost,
  getNextPost,
} from '@lib/contentful/exportContent/post';

const createPostProps = async (
  props: createProps.post.props
): Promise<Template.post.props | boolean> => {
  const postSlugs = getPostSlugs(props.allpost);
  let postRealSlug = '';
  const isPost = postSlugs.some((postSlug) => {
    postSlug.slug === props.slug;
    if (postSlug.slug === props.slug) {
      return (postRealSlug = postSlug.realSlug);
    }
  });
  const targetPost = isPost
    ? await getPostBySlug({ slug: postRealSlug })
    : null;
  const prevPost = isPost
    ? await getPrevPost({ slug: postRealSlug, posts: props.allpost })
    : null;
  const nextPost = isPost
    ? await getNextPost({ slug: postRealSlug, posts: props.allpost })
    : null;

  return isPost && targetPost
    ? { currentPost: targetPost, prevPost, nextPost }
    : false;
};

export default createPostProps;
