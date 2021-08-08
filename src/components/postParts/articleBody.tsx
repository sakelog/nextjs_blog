import RenderMarkdownBody from '@lib/renderMarkdownBody';

import styles from '@styles/component/article__body.module.scss';

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
