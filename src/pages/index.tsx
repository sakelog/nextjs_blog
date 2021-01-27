import { GetStaticProps } from 'next';

import { getAllPosts, getURLSet } from '../lib/contentful/exportContent';
import CreatePostListProps from '../lib/createProps/createPostListProps';
import { getConcatPath, getRootPath } from '../lib/getPath';
import { setSiteMap } from '../lib/setSitemap';

import config from '../components/config';

// Template
import Temp_PostList from '../template/temp_postList';

import Layout from '../components/layout/layout';

const POST_PER_LISTPAGE = 6;

const TopPage = (props: { posts: Template.postList.props }) => {
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
  const allpost = await getAllPosts();
  // postList
  const postListProps = await CreatePostListProps({
    allpost,
    per_page: POST_PER_LISTPAGE,
    slug: '/',
  });
  console.log(postListProps);

  // sitemap
  const fetchDate = new Date();
  const manualURLSet: sitemap.urlset = [
    {
      url: getConcatPath(config.url, getRootPath('contact')),
      fetchDate,
      priority: '0.4',
    },
  ];
  setSiteMap(fetchDate, manualURLSet.concat(await getURLSet()));

  return {
    props: {
      posts: postListProps,
    },
  };
};
