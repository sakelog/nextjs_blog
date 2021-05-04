import loadable from '@loadable/component';
import { Container, CircularProgress } from '@material-ui/core';
const Header = loadable(() => import('@layout/_header'), {
  fallback: <CircularProgress color="secondary" />,
});
const Footer = loadable(() => import('@layout/_footer'), {
  fallback: <CircularProgress color="secondary" />,
});

import { layoutStyles as useStyles } from '@styles/layout/layout.style';

const Layout: React.FC = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <Header />
      <Container className={styles.main}>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
