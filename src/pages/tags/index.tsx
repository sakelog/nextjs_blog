import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import {
  Paper,
  Button,
  Badge,
  List,
  ListItem,
  CircularProgress,
} from '@material-ui/core/';
import LabelIcon from '@material-ui/icons/Label';

import { getAllTags, getPostByTag } from '@lib/contentful/exportContent/tag';
import { getTagPath } from '@lib/getPath';

const Loading = (
  <div>
    Loading...
    <CircularProgress />
  </div>
);

const Layout = dynamic(() => import('@layout/layout'), {
  loading: () => Loading,
});
import CustomHead from '@component/customHead';
const BackToTop = dynamic(() => import('@component/pagination/backToTop'));

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';
import { tagsPageStyles as useStyles } from '@styles/project/tagPage.style';

type propsType = {
  tagsInfo: { name: string; path: string; totalCount: number }[];
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
      <CustomHead pageTitle={PAGE_TITLE} description={DESCRIPTION} />
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
  const allTags = await getAllTags();

  let tagsInfo: { name: string; path: string; totalCount: number }[] = [];

  if (allTags) {
    for (let index = 0; index < allTags.length; index++) {
      const targetPosts = await getPostByTag({ id: allTags[index].sys.id });
      const totalCount = targetPosts ? targetPosts.length : 0;
      const name = allTags[index].fields.name;
      const path = getTagPath(allTags[index].fields.slug);
      tagsInfo.push({ name: name, path: path, totalCount: totalCount });
    }
  }

  tagsInfo = tagsInfo.filter((elm) => elm.totalCount > 0);

  return {
    props: {
      tagsInfo: tagsInfo,
    },
  };
};
