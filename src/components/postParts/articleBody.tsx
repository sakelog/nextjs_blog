import RenderMarkdownBody from '../../lib/renderMarkdownBody';

import styles from '../../styles/Object/Component/_c-article__Body.module.scss';

type propsType = {
  body: string;
};

const ArticleBody: React.FC<propsType> = (props) => {
  return (
    <section className={styles.root}>
      {RenderMarkdownBody({ markdown: props.body })}
    </section>
  );
};

export default ArticleBody;
