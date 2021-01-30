import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiTag } from 'react-icons/fi';

import { getCategoryPath, getTagPath } from '../lib/getPath';
import RenderTOC from '../lib/renderTOC';
import { getWindowSize } from '../lib/getWindowSize';

import CustomHead from '../components/customHead';

import ArticleBody from '../components/postParts/articleBody';
import Share from '../components/postParts/share';
import Bio from '../components/postParts/bio/bio';
import PostDate from '../components/postDate';

import config from '../components/config';

import PrevNext from '../components/pagination/prevNext';
import BackToTop from '../components/pagination/backToTop';

import styles from '../styles/Object/Component/_c-post.module.scss';
import categoryStyles from '../styles/Object/Component/_c-category.module.scss';
import tagStyles from '../styles/Object/Component/_c-tagList.module.scss';

const Temp_Post: React.FC<Template.post.props> = (props) => {
  const body = props.currentPost.fields.body;
  const category = props.currentPost.fields.category;
  const MIN_WIDTH = config.mediaQuery.md;
  const [isMd, setIsMd] = useState<boolean>(false);
  useEffect(() => {
    handleSetIsMd();
    window.addEventListener('resize', handleSetIsMd);
    window.addEventListener('orientationchange', handleSetIsMd);
    return () => {
      window.removeEventListener('resize', handleSetIsMd);
      window.removeEventListener('orientationchange', handleSetIsMd);
    };
  }, []);
  const handleSetIsMd = () => {
    const windowWidth = getWindowSize().width;
    setIsMd(windowWidth <= MIN_WIDTH);
  };
  const postCategory = (
    <ul className={styles.categoryList}>
      <li key="category-title">カテゴリー：</li>
      <li key={category.fields.slug} className={categoryStyles.category}>
        <h5>
          <Link href={getCategoryPath(category.fields.slug)}>
            {category.fields.name}
          </Link>
        </h5>
      </li>
    </ul>
  );
  const tagsList = props.currentPost.fields.tags.map((tag) => {
    return (
      <li key={tag.fields.slug}>
        <h6>
          <Link href={getTagPath(tag.fields.slug)}>
            <a>
              <span className={tagStyles.tagListItem}>
                <span className={tagStyles.tagIcon}>
                  <FiTag />
                </span>
                {tag.fields.name}
              </span>
            </a>
          </Link>
        </h6>
      </li>
    );
  });
  const currentURL = config.url.slice(0, -1) + useRouter().asPath;
  const pageTitle = props.currentPost.fields.title;
  const postTag = tagsList && (
    <ul className={tagStyles.tagList}>
      <li key="tags-title">タグ:</li>
      {tagsList}
    </ul>
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
          {!isMd && (
            <aside className={styles.side}>
              <RenderTOC markdown={body} />
            </aside>
          )}
        </div>
        <aside className={styles.postInfo}>
          <div className={styles.inner}>
            <PostDate
              postdate={props.currentPost.fields.date}
              update={props.currentPost.fields.update}
            />
            {postCategory}
            {postTag}
          </div>
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
