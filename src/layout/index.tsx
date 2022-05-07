import Header from 'layout/Header';
import Footer from 'layout/Footer';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 visible">
      <Header />
      <main className="container mx-auto flex-1 flex items-stretch visible">
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
