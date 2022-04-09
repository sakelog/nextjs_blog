import { htmlToReact } from '@lib/markdown/htmlToReact';

import styles from '@styles/Object/Project/_p-article.module.scss';

type PropsType = {
  body: string;
};

const ArticleBody = (props: PropsType) => {
  return (
    <section className={styles.root}>
      {htmlToReact.processSync(props.body).result}
    </section>
  );
};

export default ArticleBody;
