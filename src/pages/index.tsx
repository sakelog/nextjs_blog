import { GetStaticProps, NextPage } from 'next';
import loadable from '@loadable/component';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getAllPosts } from '@lib/contentful/exportContent/postList';
import { getURLSet } from '@lib/contentful/exportContent/urlSet';
import CreatePostListProps from '@lib/createProps/createPostListProps';
import { getConcatPath, getRootPath } from '@lib/getPath';
import { setSiteMap } from '@lib/setSitemap';

import config from '@component/config';

const Loading = (
  <div>
    Loading...
    <CircularProgress />
  </div>
);
// Template
const Temp_PostList = loadable(() => import('@template/temp_postList'), {
  fallback: Loading,
});

import Layout from '@layout/layout';

const POST_PER_LISTPAGE = 6;

const TopPage: NextPage<{ posts: Template.postList.props }> = (props) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const allpost = await getAllPosts();
  // postList
  const postListProps = await CreatePostListProps({
    allpost,
    per_page: POST_PER_LISTPAGE,
    slug: '/',
  });

  // sitemap
  if (process.env.NODE_ENV === 'production') {
    const fetchDate = new Date();
    const manualURLSet: sitemap.urlset = [
      {
        url: getConcatPath(config.url, getRootPath('contact')),
        fetchDate,
        priority: '0.4',
      },
    ];
    setSiteMap(fetchDate, manualURLSet.concat(await getURLSet()));
  }

  return {
    props: {
      posts: postListProps,
    },
  };
};
