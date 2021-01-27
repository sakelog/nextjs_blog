import RenderMarkdownBody from '../../lib/renderMarkdownBody';

import styles from '../../styles/Object/Component/_c-article__Body.module.scss';

type propsType = {
  body: string;
};

const ArticleBody = (props: propsType) => {
  return (
    <section className={styles.root}>{RenderMarkdownBody(props.body)}</section>
  );
};

export default ArticleBody;
