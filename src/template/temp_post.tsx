import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { FiTag } from 'react-icons/fi';
import { Hidden, ListItem } from '@material-ui/core';
const List = dynamic(() => import('@material-ui/core/List'));
const ListItemText = dynamic(() => import('@material-ui/core/ListItemText'));
const Button = dynamic(() => import('@material-ui/core/Button'));

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
  const body = props.currentPost.fields.body;
  const category = props.currentPost.fields.category;
  const postCategory = (
    <ListItem>
      カテゴリー：
      <Button variant="outlined" href={getCategoryPath(category.fields.slug)}>
        <h5>{category.fields.name}</h5>
      </Button>
    </ListItem>
  );
  const tagsList = props.currentPost.fields.tags.map((tag) => {
    return (
      <Button
        startIcon={<FiTag />}
        key={tag.fields.slug}
        href={getTagPath(tag.fields.slug)}
      >
        <h6>{tag.fields.name}</h6>
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
          <Hidden smDown>
            <aside className={styles.side}>
              <RenderTOC markdown={body} />
            </aside>
          </Hidden>
        </div>
        <aside className={styles.postInfo}>
          <List className={styles.inner}>
            <PostDate
              postdate={props.currentPost.fields.date}
              update={props.currentPost.fields.update}
            />
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
