import Header from '@layout/Header';
import Footer from '@layout/Footer';
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
      <main className="container mx-auto my-2 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
