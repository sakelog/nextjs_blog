import Link from 'next/link';

import config from '@components/config';

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <nav className="bg-white p-2">
        <span className="font-logo">
          <Link href="/">
            <a className="text-black hover:no-underline">
              {config.title}
            </a>
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
