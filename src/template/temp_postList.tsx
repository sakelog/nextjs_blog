import Link from 'next/link';
import loadable from '@loadable/component';
import { FiTag } from 'react-icons/fi';

const Grid = loadable(() => import('@material-ui/core/Grid'));
const Card = loadable(() => import('@material-ui/core/Card'));
const CardContent = loadable(() => import('@material-ui/core/CardContent'));
const Button = loadable(() => import('@material-ui/core/Button'));

import { getRootPath, getCategoryPath, getTagPath } from '@lib/getPath';

import config from '@component/config';

import CustomHead from '@component/customHead';
const PostDate = loadable(() => import('@component/postDate'));
const Pagination = loadable(() => import('@component/pagination/pagination'));

import styles from '@styles/project/_p-postList.module.scss';

const Temp_PostList: React.FC<Template.postList.props> = (props) => {
  const postListTag = props.posts.map((post: contentful.post) => {
    const category = post.fields.category.fields;
    const tagList = post.fields.tags.map((tag) => {
      return (
        <Button startIcon={<FiTag />} key={tag.fields.slug}>
          <h4>
            <Link href={getTagPath(tag.fields.slug)}>{tag.fields.name}</Link>
          </h4>
        </Button>
      );
    });
    return (
      <Grid item xs={12} sm={6} key={post.fields.slug}>
        <Link href={getRootPath(post.fields.slug)}>
          <Card className={styles.post}>
            <h2 className={styles.title}>{post.fields.title}</h2>
            <CardContent>
              <div className={styles.subItem}>
                <Button variant="outlined">
                  <h3>
                    <Link href={getCategoryPath(category.slug)}>
                      {category.name}
                    </Link>
                  </h3>
                </Button>
                <PostDate
                  postdate={post.fields.date}
                  update={post.fields.update}
                />
                {tagList}
              </div>
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
    <section>
      <CustomHead pageTitle={pageTitle} description={description} />
      <Grid container spacing={2}>
        {postListTag}
      </Grid>
      <Pagination
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
    </section>
  );
};

export default Temp_PostList;
