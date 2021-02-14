import dynamic from 'next/dynamic';
import { Container, CircularProgress } from '@material-ui/core';
const Header = dynamic(() => import('@layout/_header'), {
  loading: () => <CircularProgress color="secondary" />,
});
const Footer = dynamic(() => import('@layout/_footer'), {
  loading: () => <CircularProgress color="secondary" />,
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
