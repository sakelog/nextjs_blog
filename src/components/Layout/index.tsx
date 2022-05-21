// components
import Header from './Header';
import Footer from './Footer';

type PropTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropTypes) => (
  <div
    className="uk-flex uk-flex-column"
    data-uk-height-viewport="offset-top: true"
  >
    <Header />
    <main className="uk-padding uk-flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
