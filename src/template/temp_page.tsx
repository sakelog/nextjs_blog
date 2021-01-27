import CustomHead from '../components/customHead';
import ArticleBody from '../components/postParts/articleBody';

import BackToTop from '../components/pagination/backToTop';

import wrapperStyles from '../styles/Layout/_l-pageWrapper.module.scss';

const Temp_Page = (props: Template.page.props) => {
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
