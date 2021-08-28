import CustomHead from '@components/customHead';
import ArticleBody from '@components/postParts/articleBody';
import BackToTop from '@components/pagination/backToTop';

const TempPage = (props: Template.page.props) => {
  const body = props.page.fields.body;
  return (
    <article>
      <CustomHead
        pageTitle={props.page.fields.title}
        description={props.page.fields.description}
      />
      <div className="p-4">
        <h1>{props.page.fields.title}</h1>
        <ArticleBody body={body} />
      </div>
      <BackToTop />
    </article>
  );
};

export default TempPage;
