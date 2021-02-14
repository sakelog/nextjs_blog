import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import dynamic from 'next/dynamic';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getAllPosts } from '@lib/contentful/exportContent/postList';
import { getAllPages } from '@lib/contentful/exportContent/page';
import {
  getPostSlugs,
  getPageSlugs,
  getPostListNumPages,
  getPostListSlugs,
} from '@lib/getSlugs';
import CreatePostListProps from '@lib/createProps/createPostListProps';
import CreatePageProps from '@lib/createProps/createPageProps';
import CreatePostProps from '@lib/createProps/createPostProps';

// Template
const Temp_PostList = dynamic(() => import('@template/temp_postList'), {
  loading: () => <CircularProgress color="secondary" />,
});
const Temp_Post = dynamic(() => import('@template/temp_post'), {
  loading: () => <CircularProgress color="secondary" />,
});
const Temp_Page = dynamic(() => import('@template/temp_page'), {
  loading: () => <CircularProgress color="secondary" />,
});

const Layout = dynamic(() => import('@layout/layout'), {
  loading: () => <CircularProgress color="secondary" />,
});

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

const RootDirectory: NextPage<propsType> = (props) => {
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
  const slug = context.params ? context.params.slug : '';
  const allpost = await getAllPosts();
  const allpage = await getAllPages();

  let postListProps: Template.postList.props | boolean = false;
  let pageProps: contentful.page | boolean = false;
  let postProps: Template.post.props | boolean = false;
  postListProps =
    allpost && slug
      ? await CreatePostListProps({
          allpost,
          per_page: POST_PER_LISTPAGE,
          slug,
        })
      : false;
  pageProps =
    allpage && slug
      ? !postListProps && (await CreatePageProps({ allpage, slug }))
      : false;
  postProps =
    allpost && slug
      ? !pageProps && (await CreatePostProps({ allpost, slug }))
      : false;

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
  const allposts = await getAllPosts();
  const allpages = await getAllPages();

  // postList
  const postListSlugs = getPostListSlugs(
    getPostListNumPages({ posts: allposts, per_page: POST_PER_LISTPAGE })
  );
  // post
  const postSlugs = allposts ? getPostSlugs(allposts) : [];
  // page
  const pageSlugs = allpages ? getPageSlugs(allpages) : [];

  const allSlugs: string[] = [];
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
