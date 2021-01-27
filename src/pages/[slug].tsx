import { GetStaticProps, GetStaticPaths } from 'next';
import loadable from '@loadable/component';

import {
  getAllPosts,
  getPostBySlug,
  getAllPages,
  getPageBySlug,
  getPrevPost,
  getNextPost,
} from '../lib/contentful/exportContent';
import { getPostListNumPages, getPostListSlugs } from '../lib/routing';
import { toKebabCase } from '../lib/toKebabCase';

// Template
import Temp_PostList from '../template/temp_postList';
//const Temp_Post = loadable(() => import('../template/temp_post'));
import Temp_Post from '../template/temp_post';
import Temp_Page from '../template/temp_page';

import Layout from '../components/layout/layout';

const POST_PER_LISTPAGE = 6;
const POSTLIST = 'postlist';
const POST = 'post';
const PAGE = 'page';

type propsType = {
  pathtype: 'postlist' | 'post' | 'page';
  posts: {
    posts: contentful.post[];
    currentPage: number;
    lastPage: number;
    pathBase: string;
  };
  singlePost: {
    currentPost: contentful.post;
    prevPost?: contentful.post;
    nextPost?: contentful.post;
  };
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
  const allPosts = await getAllPosts();
  const allPages = await getAllPages();

  // postList
  const postListSlugs = getPostListSlugs(
    getPostListNumPages({ posts: allPosts, per_page: POST_PER_LISTPAGE })
  );
  const isPostList = postListSlugs.some(
    (postListSlug) => postListSlug === slug
  );
  const postListSkip = isPostList
    ? (Number(slug) - 1) * POST_PER_LISTPAGE
    : null;
  const targetPosts = isPostList
    ? allPosts.slice(postListSkip, postListSkip + POST_PER_LISTPAGE)
    : null;
  const postListCurrentPage = isPostList ? Number(slug) : null;
  const postListMaxPage = Number(postListSlugs[postListSlugs.length - 1]);

  // post
  const postSlugs = getPostSlugs(allPosts);
  let postRealSlug: string;
  const isPost = postSlugs.some((postSlug) => {
    postSlug.slug === slug;
    if (postSlug.slug === slug) {
      return (postRealSlug = postSlug.realSlug);
    }
  });
  const targetPost = isPost
    ? await getPostBySlug({ slug: postRealSlug })
    : null;
  const prevPost = isPost
    ? await getPrevPost({ slug: postRealSlug, posts: allPosts })
    : null;
  const nextPost = isPost
    ? await getNextPost({ slug: postRealSlug, posts: allPosts })
    : null;

  // page
  const pageSlugs = getPageSlugs(allPages);
  let pageRealSlug: string;
  const isPage = pageSlugs.some((pageSlug) => {
    pageSlug.slug === slug;
    if (pageSlug.slug === slug) {
      return (pageRealSlug = pageSlug.realSlug);
    }
  });
  const targetPage = isPage
    ? await getPageBySlug({ slug: pageRealSlug })
    : null;

  const pathtype = isPostList ? POSTLIST : isPost ? POST : PAGE;

  return {
    props: {
      pathtype: pathtype,
      posts: {
        posts: targetPosts,
        currentPage: postListCurrentPage,
        lastPage: postListMaxPage,
        pathBase: '/',
      },
      singlePost: {
        currentPost: targetPost,
        prevPost: prevPost,
        nextPost: nextPost,
      },
      singlePage: targetPage,
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

// post slug一覧
const getPostSlugs = (posts: contentful.post[]) => {
  const postSlugs: { slug: string; realSlug: string }[] = Array.from(
    { length: posts.length },
    (_, i) => {
      return {
        slug: toKebabCase(posts[i].fields.slug),
        realSlug: posts[i].fields.slug,
      };
    }
  );
  return postSlugs;
};

// page slug一覧
const getPageSlugs = (pages: contentful.page[]) => {
  let pageSlugs: { slug: string; realSlug: string }[] = Array.from(
    { length: pages.length },
    (_, i) => {
      return {
        slug: toKebabCase(pages[i].fields.slug),
        realSlug: pages[i].fields.slug,
      };
    }
  );
  pageSlugs = pageSlugs.filter((page) => page.slug !== '404');
  return pageSlugs;
};
