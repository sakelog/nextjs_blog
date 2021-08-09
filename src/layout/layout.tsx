import Header from '@layout/_header';
import Footer from '@layout/_footer';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto flex-1">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
