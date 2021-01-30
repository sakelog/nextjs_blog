import CustomHead from '@component/customHead';
import ArticleBody from '@component/postParts/articleBody';

import BackToTop from '@component/pagination/backToTop';

import wrapperStyles from '@styles/layout/_l-pageWrapper.module.scss';

const Temp_Page: React.FC<Template.page.props> = (props) => {
  const body = props.page.fields.body;
  return (
    <article>
      <CustomHead
        pageTitle={props.page.fields.title}
        description={props.page.fields.description}
      />
      <section className={wrapperStyles.root}>
        <h1>{props.page.fields.title}</h1>
        <ArticleBody body={body} />
      </section>
      <BackToTop />
    </article>
  );
};

export default Temp_Page;
