import loadable from '@loadable/component';
import { Paper, CircularProgress } from '@material-ui/core';

import CustomHead from '@components/customHead';

const ArticleBody = loadable(
  () => import('@components/postParts/articleBody'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const BackToTop = loadable(
  () => import('@components/pagination/backToTop'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';

const Temp_Page: React.FC<Template.page.props> = (
  props
) => {
  const wrapperStyles = pageWrapperStyles();
  const body = props.page.fields.body;
  return (
    <article>
      <CustomHead
        pageTitle={props.page.fields.title}
        description={props.page.fields.description}
      />
      <Paper elevation={0} className={wrapperStyles.root}>
        <h1>{props.page.fields.title}</h1>
        <ArticleBody body={body} />
      </Paper>
      <BackToTop />
    </article>
  );
};

export default Temp_Page;
