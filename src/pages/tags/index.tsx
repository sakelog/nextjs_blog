import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { FiTag } from 'react-icons/fi';
import { Grid, Button, Badge } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageInit from '@lib/pageInit';

import { getAllTags, getPostByTag } from '@lib/contentful/exportContent/tag';
import { getTagPath } from '@lib/getPath';

import Layout from '@layout/layout';
import CustomHead from '@component/customHead';

import BackToTop from '@component/pagination/backToTop';

import wrapperStyles from '@styles/layout/_l-pageWrapper.module.scss';
import { muiTheme } from '@lib/mui/theme';

type propsType = {
  tagsInfo: { name: string; path: string; totalCount: number }[];
};

const TagsPage: NextPage<propsType> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    PageInit(dispatch);
  }, []);
  const PAGE_TITLE = 'タグ一覧ページ';
  const DESCRIPTION = '全タグの一覧ページです';

  const sortedList = props.tagsInfo.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });

  const tagsList = sortedList.map((tag) => {
    return (
      <Grid item xs={4} sm={2} key={tag.name}>
        <Badge
          badgeContent={tag.totalCount}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          color="primary"
        >
          <Button variant="outlined" startIcon={<FiTag />}>
            <Link href={tag.path}>{tag.name}</Link>
          </Button>
        </Badge>
      </Grid>
    );
  });
  return (
    <Layout>
      <CustomHead pageTitle={PAGE_TITLE} description={DESCRIPTION} />
      <section className={wrapperStyles.root}>
        <h1>{PAGE_TITLE}</h1>
        <ThemeProvider theme={muiTheme}>
          <Grid container spacing={2}>
            {tagsList}
          </Grid>
        </ThemeProvider>
      </section>
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
