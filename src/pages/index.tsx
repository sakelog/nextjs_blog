import { GetStaticProps } from 'next';

import { getAllPosts, getURLSet } from '../lib/contentful/exportContent';
import { getPostListNumPages, getPostListSlugs } from '../lib/routing';
import { getConcatPath, getRootPath } from '../lib/getPath';
import { setSiteMap } from '../lib/setSitemap';

import config from '../components/config';

// Template
import Temp_PostList from '../template/temp_postList';

import Layout from '../components/layout/layout';

const POST_PER_LISTPAGE = 6;

type propsType = {
  posts: {
    posts: contentful.post[];
    currentPage: number;
    lastPage: number;
    pathBase: string;
  };
};

const TopPage = (props: propsType) => {
  const TemplateTag = (
    <Temp_PostList
      posts={props.posts.posts}
      currentPage={props.posts.currentPage}
      lastPage={props.posts.lastPage}
      pathBase={props.posts.pathBase}
    />
  );
  return <Layout>{TemplateTag}</Layout>;
};

export default TopPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = await getAllPosts();
  // postList
  const postListSlugs = getPostListSlugs(
    getPostListNumPages({ posts: allPosts, per_page: POST_PER_LISTPAGE })
  );
  const postListSkip = 0;
  const targetPosts = allPosts.slice(postListSkip, POST_PER_LISTPAGE);
  const postListCurrentPage = 1;
  const postListMaxPage = postListSlugs[postListSlugs.length - 1];

  // sitemap
  const fetchDate = new Date();
  const manualURLSet: sitemap.urlset = [
    {
      url: getConcatPath(config.url, getRootPath('contact')),
      fetchDate,
      priority: '0.4',
    },
  ];
  setSiteMap(fetchDate, await getURLSet());

  return {
    props: {
      posts: {
        posts: targetPosts,
        currentPage: postListCurrentPage,
        lastPage: postListMaxPage,
        pathBase: '/',
      },
    },
  };
};
