import { GetStaticProps, NextPage } from 'next';
import loadable from '@loadable/component';
import {
  Paper,
  Button,
  Badge,
  List,
  ListItem,
  CircularProgress,
} from '@material-ui/core/';
import LabelIcon from '@material-ui/icons/Label';

import CreateTagsPageProps from '@lib/createProps/createTagsPageProps';

const Layout = loadable(() => import('@layout/layout'), {
  fallback: <CircularProgress color="secondary" />,
});
import CustomHead from '@components/customHead';
const BackToTop = loadable(
  () => import('@components/pagination/backToTop'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';
import { tagsPageStyles as useStyles } from '@styles/project/tagPage.style';

type propsType = {
  tagsInfo: {
    name: string;
    path: string;
    totalCount: number;
  }[];
};

const TagsPage: NextPage<propsType> = (props) => {
  const wrapperStyles = pageWrapperStyles();
  const styles = useStyles();
  const PAGE_TITLE = 'タグ一覧ページ';
  const DESCRIPTION = '全タグの一覧ページです';

  const sortedList = props.tagsInfo.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });

  const tagsList = sortedList.map((tag) => {
    return (
      <ListItem key={tag.name} className={styles.item}>
        <Badge
          badgeContent={tag.totalCount}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          color="primary"
        >
          <Button
            variant="outlined"
            startIcon={<LabelIcon />}
            href={tag.path}
            style={{ textTransform: 'none' }}
          >
            {tag.name}
          </Button>
        </Badge>
      </ListItem>
    );
  });
  return (
    <Layout>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={DESCRIPTION}
      />
      <Paper elevation={0} className={wrapperStyles.root}>
        <h1>{PAGE_TITLE}</h1>
        <List className={styles.item}>{tagsList}</List>
      </Paper>
      <BackToTop />
    </Layout>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps = async () => {
  const tagsInfo = await CreateTagsPageProps();
  return {
    props: {
      tagsInfo,
    },
  };
};
