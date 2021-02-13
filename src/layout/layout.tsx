import dynamic from 'next/dynamic';
import { Container } from '@material-ui/core';
const Header = dynamic(() => import('@layout/_header'));
const Footer = dynamic(() => import('@layout/_footer'));

import { layoutStyles as useStyles } from '@styles/layout/layout.style';

const Layout: React.FC = (props) => {
  //const windowSizeState = state.windowSizeState;
  const styles = useStyles();
  return (
    <div>
      <Header />
      <Container className={styles.main}>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
