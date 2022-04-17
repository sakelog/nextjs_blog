import Header from '@layout/_header';
import Footer from '@layout/_footer';
import { useEffect } from 'react';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.log(err);
    }
    return () => {
      const main = document.querySelector(
        'main'
      ) as HTMLElement;
      main.removeAttribute('style');
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="container mx-auto my-2 flex-1">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
