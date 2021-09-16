import loadable from '@loadable/component';
const MarkdownBody = loadable(
  () => import('@components/markdownBody')
);

import styles from '@styles/Object/Project/_p-article.module.scss';

type PropsType = {
  body: string;
};

const ArticleBody = (props: PropsType) => {
  return (
    <section className={styles.root}>
      <MarkdownBody markdown={props.body} />
    </section>
  );
};

export default ArticleBody;
