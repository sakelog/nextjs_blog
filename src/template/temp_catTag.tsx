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

import CustomHead from '@component/customHead';

const PostDate = loadable(() => import('@component/postDate'), {
  fallback: <CircularProgress color="secondary" />,
});
const CategoryTag = loadable(() => import('@component/categoryTag'), {
  fallback: <CircularProgress color="secondary" />,
});
const TagList = loadable(() => import('@component/tagList'));
const Pagination = loadable(() => import('@component/pagination/pagination'), {
  fallback: <CircularProgress color="secondary" />,
});
const BackToTop = loadable(() => import('@component/pagination/backToTop'), {
  fallback: <CircularProgress color="secondary" />,
});

import { postlistStyles as useStyles } from '@styles/project/postlist.styles';

const TAGS = 'tags';
const CATEGORY = 'category';

const Temp_CatTag: React.FC<Template.catTagList.props> = (props) => {
  const styles = useStyles();
  const pageTitle =
    (props.type === TAGS ? 'タグ：' : 'カテゴリー：') + props.name;
  const description =
    pageTitle +
    'についての一覧ページ' +
    (props.currentPage > 1 ? ':' + props.currentPage + 'ページ目' : '');
  const postListTag = props.posts
    ? props.posts.map((post: contentful.post) => {
        const categoryTag = props.type === TAGS && (
          <ListItem>
            <CategoryTag category={post.fields.category} heading="h3" />
          </ListItem>
        );

        const tagList = <TagList tags={post.fields.tags} heading="h4" />;
        const tagsTag = props.type === CATEGORY && (
          <ListItem>{tagList}</ListItem>
        );
        return (
          <Grid item xs={12} sm={6} key={post.fields.slug}>
            <Link href={getRootPath(post.fields.slug)}>
              <Card className={styles.post}>
                <h2 className={styles.title}>{post.fields.title}</h2>
                <CardContent>
                  <div className={styles.subItem}>
                    <List>
                      {categoryTag}
                      <PostDate
                        postdate={post.fields.date}
                        update={post.fields.update}
                      />
                      {tagsTag}
                    </List>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })
    : null;
  return (
    <section>
      <CustomHead
        pageTitle={
          pageTitle +
          (props.currentPage > 1 ? '(' + props.currentPage + ')' : '')
        }
        description={description}
      />
      <h1>{pageTitle}</h1>
      <p>投稿：{props.totalCount}件</p>
      <Grid container spacing={2}>
        {postListTag}
      </Grid>
      <Pagination
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
      <BackToTop />
    </section>
  );
};

export default Temp_CatTag;
