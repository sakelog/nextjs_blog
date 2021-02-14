import { Button } from '@material-ui/core';

const BackToTop: React.FC = () => {
  return (
    <Button
      color="secondary"
      variant="contained"
      href="/"
      style={{ margin: '2rem auto' }}
    >
      トップへ戻る
    </Button>
  );
};

export default BackToTop;
