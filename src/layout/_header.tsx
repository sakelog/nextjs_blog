import Link from 'next/link';

import SiteLogo from '@layout/headerNav/siteLogo';
import config from '@components/config';

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <nav
        className="text-white bg-theme flex items-center space-x-2
                    overflow-x-hidden p-2"
      >
        <span className="font-logo">
          <Link href="/">
            <a className="text-white hover:no-underline">
              {config.title}
            </a>
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
