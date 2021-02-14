import dynamic from 'next/dynamic';
import { Paper, CircularProgress } from '@material-ui/core';

import CustomHead from '@component/customHead';

const ArticleBody = dynamic(() => import('@component/postParts/articleBody'), {
  loading: () => <CircularProgress color="secondary" />,
});
const BackToTop = dynamic(() => import('@component/pagination/backToTop'), {
  loading: () => <CircularProgress color="secondary" />,
});

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';

const Temp_Page: React.FC<Template.page.props> = (props) => {
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
