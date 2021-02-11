import Link from 'next/link';
import { FiTag } from 'react-icons/fi';
import { Grid, Card, CardContent, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { getRootPath, getCategoryPath, getTagPath } from '@lib/getPath';

import CustomHead from '@component/customHead';
import PostDate from '@component/postDate';

import Pagination from '@component/pagination/pagination';
import BackToTop from '@component/pagination/backToTop';

import styles from '@styles/project/_p-postList.module.scss';
import { muiTheme } from '@lib/mui/theme';

const TAGS = 'tags';
const CATEGORY = 'category';

const Temp_CatTag: React.FC<Template.catTagList.props> = (props) => {
  const pageTitle =
    (props.type === TAGS ? 'タグ：' : 'カテゴリー：') + props.name;
  const description =
    pageTitle +
    'についての一覧ページ' +
    (props.currentPage > 1 ? ':' + props.currentPage + 'ページ目' : '');
  const postListTag = props.posts
    ? props.posts.map((post: contentful.post) => {
        const category = post.fields.category.fields;
        const categoryTag = props.type === TAGS && (
          <Button variant="outlined">
            <h3>
              <Link href={getCategoryPath(category.slug)}>{category.name}</Link>
            </h3>
          </Button>
        );

        const tagList = post.fields.tags.map((tag) => {
          return (
            <Button startIcon={<FiTag />} key={tag.fields.slug}>
              <h4>
                <Link href={getTagPath(tag.fields.slug)}>
                  {tag.fields.name}
                </Link>
              </h4>
            </Button>
          );
        });
        const tagsTag = props.type === CATEGORY && tagList;
        return (
          <Grid item xs={12} sm={6} key={post.fields.slug}>
            <Link href={getRootPath(post.fields.slug)}>
              <Card className={styles.post}>
                <h2 className={styles.title}>{post.fields.title}</h2>
                <CardContent>
                  <div className={styles.subItem}>
                    {categoryTag}
                    <PostDate
                      postdate={post.fields.date}
                      update={post.fields.update}
                    />
                    {tagsTag}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })
    : null;
  return (
    <ThemeProvider theme={muiTheme}>
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
    </ThemeProvider>
  );
};

export default Temp_CatTag;
