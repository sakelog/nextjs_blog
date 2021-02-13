import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiTag } from 'react-icons/fi';
import { List, ListItem, Button } from '@material-ui/core';
import state from '@state/ducks/index';

import { getCategoryPath, getTagPath } from '@lib/getPath';
import RenderTOC from '@lib/renderTOC';

import CustomHead from '@component/customHead';

import ArticleBody from '@component/postParts/articleBody';
import Share from '@component/postParts/share';
import Bio from '@component/postParts/bio/bio';
import PostDate from '@component/postDate';

import config from '@component/config';

import PrevNext from '@component/pagination/prevNext';
import BackToTop from '@component/pagination/backToTop';

import styles from '@styles/component/_c-post.module.scss';

const Temp_Post: React.FC<Template.post.props> = (props) => {
  const windowSizeState = state.windowSizeState;
  const body = props.currentPost.fields.body;
  const category = props.currentPost.fields.category;
  const MIN_WIDTH = config.mediaQuery.sm;
  const postCategory = (
    <ListItem>
      カテゴリー：
      <Button variant="outlined">
        <h5>
          <Link href={getCategoryPath(category.fields.slug)}>
            {category.fields.name}
          </Link>
        </h5>
      </Button>
    </ListItem>
  );
  const tagsList = props.currentPost.fields.tags.map((tag) => {
    return (
      <Button startIcon={<FiTag />} key={tag.fields.slug}>
        <h6>
          <Link href={getTagPath(tag.fields.slug)}>{tag.fields.name}</Link>
        </h6>
      </Button>
    );
  });
  const currentURL =
    (config.url.endsWith('/') ? config.url.slice(0, -1) : config.url) +
    useRouter().asPath;
  const pageTitle = props.currentPost.fields.title;
  const postTag = tagsList && (
    <ListItem>
      タグ：
      {tagsList}
    </ListItem>
  );
  return (
    <>
      <article className={styles.root}>
        <CustomHead
          pageTitle={pageTitle}
          description={props.currentPost.fields.description}
          imgFLG={true}
        />
        <div className={styles.articleWrapper}>
          <section className={styles.main}>
            <h1>{props.currentPost.fields.title}</h1>
            <ArticleBody body={body} />
          </section>
          {windowSizeState.windowSizeSelectors.widthSelector() >= MIN_WIDTH && (
            <aside className={styles.side}>
              <RenderTOC markdown={body} />
            </aside>
          )}
        </div>
        <aside className={styles.postInfo}>
          <List className={styles.inner}>
            <ListItem>
              <PostDate
                postdate={props.currentPost.fields.date}
                update={props.currentPost.fields.update}
              />
            </ListItem>
            {postCategory}
            {postTag}
          </List>
        </aside>
        <Share url={currentURL} title={pageTitle} />
        <Bio />
        <PrevNext prevPost={props.prevPost} nextPost={props.nextPost} />
        <BackToTop />
      </article>
    </>
  );
};

export default Temp_Post;
