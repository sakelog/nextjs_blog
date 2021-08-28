import loadable from '@loadable/component';
const RenderMarkdownBody = loadable(
  () => import('@lib/renderMarkdownBody')
);

import styles from '@styles/component/_c-article__body.module.scss';

type PropsType = {
  body: string;
};

const ArticleBody = (props: PropsType) => {
  return (
    <section className={styles.root}>
      <RenderMarkdownBody markdown={props.body} />
    </section>
  );
};

export default ArticleBody;
