import { GetStaticProps, GetStaticPaths } from 'next';
import loadable from '@loadable/component';

import { getAllPosts, getAllPages } from '../lib/contentful/exportContent';
import {
  getPostSlugs,
  getPageSlugs,
  getPostListNumPages,
  getPostListSlugs,
} from '../lib/getSlugs';
import CreatePostListProps from '../lib/createProps/createPostListProps';
import CreatePageProps from '../lib/createProps/createPageProps';
import CreatePostProps from '../lib/createProps/createPostProps';

// Template
const Temp_PostList = loadable(() => import('../template/temp_postList'));
const Temp_Post = loadable(() => import('../template/temp_post'));
const Temp_Page = loadable(() => import('../template/temp_page'));

import Layout from '../components/layout/layout';

const POST_PER_LISTPAGE = 6;
const POSTLIST = 'postlist';
const POST = 'post';
const PAGE = 'page';

type propsType = {
  pathtype: 'postlist' | 'post' | 'page';
  posts: Template.postList.props;
  singlePost: Template.post.props;
  singlePage: contentful.page;
};

const RootDirectory = (props: propsType) => {
  const TemplateTag =
    props.pathtype === POSTLIST ? (
      <Temp_PostList
        posts={props.posts.posts}
        currentPage={props.posts.currentPage}
        lastPage={props.posts.lastPage}
        pathBase={props.posts.pathBase}
      />
    ) : props.pathtype === POST ? (
      <Temp_Post
        currentPost={props.singlePost.currentPost}
        prevPost={props.singlePost.prevPost}
        nextPost={props.singlePost.nextPost}
      />
    ) : (
      <Temp_Page page={props.singlePage} />
    );
  return <Layout>{TemplateTag}</Layout>;
};

export default RootDirectory;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug;
  const allpost = await getAllPosts();
  const allpage = await getAllPages();

  let postListProps: Template.postList.props | boolean = false;
  let pageProps: contentful.page | boolean = false;
  let postProps: Template.post.props | boolean = false;
  postListProps = await CreatePostListProps({
    allpost,
    per_page: POST_PER_LISTPAGE,
    slug,
  });
  pageProps = !postListProps && (await CreatePageProps({ allpage, slug }));
  postProps = !pageProps && (await CreatePostProps({ allpost, slug }));

  const pathtype = postListProps ? POSTLIST : pageProps ? PAGE : POST;

  return {
    props: {
      pathtype: pathtype,
      posts: postListProps,
      singlePost: postProps,
      singlePage: pageProps,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const allPages = await getAllPages();

  // postList
  const postListSlugs = getPostListSlugs(
    getPostListNumPages({ posts: allPosts, per_page: POST_PER_LISTPAGE })
  );
  // post
  const postSlugs = getPostSlugs(allPosts);
  // page
  const pageSlugs = getPageSlugs(allPages);

  let allSlugs: string[] = [];
  postListSlugs.map((num) => {
    allSlugs.push(num);
  });
  postSlugs.map((post) => {
    allSlugs.push(post.slug);
  });
  pageSlugs.map((page) => {
    allSlugs.push(page.slug);
  });

  const paths = allSlugs.map((slug) => ({
    params: { slug: slug },
  }));

  return { paths, fallback: false };
};
