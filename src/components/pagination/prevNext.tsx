import { Grid, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { getRootPath } from '@lib/getPath';

const PrevNext: React.FC<pagination.prevNext.props> = (props) => {
  const { prevPost, nextPost } = props;
  const prevLink = prevPost ? (
    <Grid item xs={12} sm={6}>
      <Button
        fullWidth={true}
        startIcon={<ChevronLeftIcon />}
        variant="outlined"
        color="secondary"
        href={getRootPath(prevPost.slug)}
        style={{ textTransform: 'none' }}
      >
        {prevPost.title}
      </Button>
    </Grid>
  ) : (
    <Grid item xs={12} sm={6}>
      {''}
    </Grid>
  );
  const nextLink = nextPost ? (
    <Grid item xs={12} sm={6}>
      <Button
        fullWidth={true}
        endIcon={<ChevronRightIcon />}
        variant="outlined"
        color="secondary"
        href={getRootPath(nextPost.slug)}
        style={{ textTransform: 'none' }}
      >
        {nextPost.title}
      </Button>
    </Grid>
  ) : (
    <Grid item xs={12} sm={6}>
      {''}
    </Grid>
  );
  return (
    <nav style={{ margin: '2rem auto' }}>
      <Grid container spacing={2}>
        {prevLink}
        {nextLink}
      </Grid>
    </nav>
  );
};

export default PrevNext;
