import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
} from '@material-ui/core';

const LabelIcon = dynamic(() => import('@material-ui/icons/Label'));

import { getRootPath, getCategoryPath, getTagPath } from '@lib/getPath';

import config from '@component/config';

import CustomHead from '@component/customHead';
//const PostDate = dynamic(() => import('@component/postDate'));
const Pagination = dynamic(() => import('@component/pagination/pagination'));

import { postlistStyles as useStyles } from '@styles/project/postlist.styles';

const Temp_PostList: React.FC<Template.postList.props> = (props) => {
  const styles = useStyles();
  const postListTag = props.posts.map((post: contentful.post) => {
    const category = post.fields.category.fields;
    const tagList = post.fields.tags.map((tag) => {
      return (
        <Button
          startIcon={<LabelIcon />}
          key={tag.fields.slug}
          href={getTagPath(tag.fields.slug)}
        >
          <h4>{tag.fields.name}</h4>
        </Button>
      );
    });
    return (
      <Grid item xs={12} sm={6} key={post.fields.slug}>
        <Link href={getRootPath(post.fields.slug)}>
          <Card className={styles.post}>
            <h2 className={styles.title}>{post.fields.title}</h2>
            <CardContent>
              <List className={styles.subItem}>
                <ListItem>
                  <Button
                    variant="outlined"
                    href={getCategoryPath(category.slug)}
                  >
                    <h3>{category.name}</h3>
                  </Button>
                </ListItem>
                {/*<PostDate
                  postdate={post.fields.date}
                  update={post.fields.update}
                />*/}
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
