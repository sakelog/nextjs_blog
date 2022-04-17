import { htmlToReact } from '@lib/markdown/htmlToReact';

import styles from '@styles/Object/Project/_p-article.module.scss';

type PropsType = {
  body: string;
};

const ArticleBody = (props: PropsType) => {
  const result: JSX.Element =
    htmlToReact.processSync(props.body)?.result || null;
  return (
    <section className={styles.root}>{result}</section>
  );
};

export default ArticleBody;
