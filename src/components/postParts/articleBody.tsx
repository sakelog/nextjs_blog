import dynamic from 'next/dynamic';

const MarkdownBody = dynamic(
  () => import('@components/markdownBody'),
  { loading: () => <p>...</p> }
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
