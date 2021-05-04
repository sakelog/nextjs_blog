import Link from 'next/link';
import loadable from '@loadable/component';
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  CircularProgress,
} from '@material-ui/core';

import { getRootPath } from '@lib/getPath';

import config from '@component/config';

import CustomHead from '@component/customHead';
const PostDate = loadable(() => import('@component/postDate'), {
  fallback: <CircularProgress color="secondary" />,
});
const CategoryTag = loadable(() => import('@component/categoryTag'), {
  fallback: <CircularProgress color="secondary" />,
});
const TagList = loadable(() => import('@component/tagList'), {
  fallback: <CircularProgress color="secondary" />,
});
const Pagination = loadable(() => import('@component/pagination/pagination'), {
  fallback: <CircularProgress color="secondary" />,
});

import { postlistStyles as useStyles } from '@styles/project/postlist.styles';

const Temp_PostList: React.FC<Template.postList.props> = (props) => {
  const styles = useStyles();
  const postListTag = props.posts.map((post: contentful.post) => {
    const tagList = <TagList tags={post.fields.tags} heading="h4" />;
    return (
      <Grid item xs={12} sm={6} key={post.fields.slug}>
        <Link href={getRootPath(post.fields.slug)}>
          <Card className={styles.post}>
            <h2 className={styles.title}>{post.fields.title}</h2>
            <CardContent>
              <List className={styles.subItem}>
                <ListItem>
                  <CategoryTag category={post.fields.category} heading="h3" />
                </ListItem>
                <PostDate
                  postdate={post.fields.date}
                  update={post.fields.update}
                />
                <ListItem>{tagList}</ListItem>
              </List>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  });

  const pageTitle = props.currentPage
    ? props.currentPage > 1
      ? '記事一覧：' + props.currentPage + 'ページ目'
      : null
    : '';
  const description = props.currentPage
    ? props.currentPage > 1
      ? config.title + 'の記事一覧ページです'
      : config.description
    : '';

  return (
    <>
      <CustomHead pageTitle={pageTitle} description={description} />
      <section>
        <Grid container spacing={2}>
          {postListTag}
        </Grid>
        <Pagination
          currentPage={props.currentPage}
          lastPage={props.lastPage}
          pathBase={props.pathBase}
        />
      </section>
    </>
  );
};

export default Temp_PostList;
