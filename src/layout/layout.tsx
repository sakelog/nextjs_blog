import state from '@state/ducks/index';

import Header from './_header';
import Footer from './_footer';

import wrapperStyles from '@styles/layout/_l-wrapper.module.scss';
import mainStyles from '@styles/layout/_l-main.module.scss';

const Layout: React.FC = (props) => {
  const windowSizeState = state.windowSizeState;
  return (
    <div
      className={wrapperStyles.root}
      style={{
        minHeight: windowSizeState.windowSizeSelectors.heightSelector(),
      }}
    >
      <Header />
      <main className={mainStyles.root}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
