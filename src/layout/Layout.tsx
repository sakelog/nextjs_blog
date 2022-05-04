import Header from '@layout/Header';
import Footer from '@layout/Footer';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="container mx-auto my-2 flex-1 p-2">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
