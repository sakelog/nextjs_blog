import { useRouter } from 'next/router';
import loadable from '@loadable/component';
import {
  Hidden,
  List,
  ListItem,
  Grid,
  Paper,
  CircularProgress,
} from '@material-ui/core';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageInit from '@lib/pageInit';

import RenderTOC from '@lib/renderTOC';
import CustomHead from '@components/customHead';

const ArticleBody = loadable(
  () => import('@components/postParts/articleBody'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const Share = loadable(
  () => import('@components/postParts/share'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const Bio = loadable(
  () => import('@components/postParts/bio/bio'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const PostDate = loadable(
  () => import('@components/postDate'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const CategoryTag = loadable(
  () => import('@components/categoryTag'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const TagList = loadable(
  () => import('@components/tagList'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);

import config from '@components/config';

const PrevNext = loadable(
  () => import('@components/pagination/prevNext')
);
const BackToTop = loadable(
  () => import('@components/pagination/backToTop')
);

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';
import { postStyles as useStyles } from '@styles/component/post.style';

const Temp_Post: React.FC<Template.post.props> = (
  props
) => {
  const wrapperStyles = pageWrapperStyles();
  const styles = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    PageInit(dispatch);
  }, []);

  const body = props.currentPost.fields.body;
  const postCategory = (
    <ListItem>
      <CategoryTag
        category={props.currentPost.fields.category}
        heading="h5"
      />
    </ListItem>
  );
  const currentURL =
    (config.url.endsWith('/')
      ? config.url.slice(0, -1)
      : config.url) + useRouter().asPath;
  const pageTitle = props.currentPost.fields.title;
  const postTag = (
    <ListItem>
      <TagList
        tags={props.currentPost.fields.tags}
        heading="h6"
      />
    </ListItem>
  );
  return (
    <>
      <article>
        <CustomHead
          pageTitle={pageTitle}
          description={props.currentPost.fields.description}
          imgFLG={true}
        />
        <Grid
          container
          spacing={2}
          className={styles.contentWrapper}
        >
          <Grid item xs={12} md={9}>
            <Paper
              elevation={3}
              className={wrapperStyles.root}
            >
              <h1>{props.currentPost.fields.title}</h1>
              <ArticleBody body={body} />
            </Paper>
          </Grid>
          <Hidden smDown>
            <Grid item md={3}>
              <aside className={styles.sidebar}>
                <RenderTOC markdown={body} />
              </aside>
            </Grid>
          </Hidden>
        </Grid>
        <Paper elevation={0} className={styles.subItem}>
          <Paper elevation={1} className={styles.postInfo}>
            <List>
              <PostDate
                postdate={props.currentPost.fields.date}
                update={props.currentPost.fields.update}
              />
              {postCategory}
              {postTag}
            </List>
          </Paper>
          <Share url={currentURL} title={pageTitle} />
          <Bio />
        </Paper>
        <PrevNext
          prevPost={props.prevPost}
          nextPost={props.nextPost}
        />
        <BackToTop />
      </article>
    </>
  );
};

export default Temp_Post;
