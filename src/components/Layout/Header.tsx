import { config } from 'config';

// components
import Link from 'next/link';

const Header = () => (
  <div
    data-uk-sticky="start: 200; animation: uk-animation-slide-top;sel-target: .uk-navbar-container;cls-active: uk-navbar-sticky;"
    className="uk-section-primary"
  >
    <nav
      className="uk-navbar-container uk-navbar-transparent"
      data-uk-navbar
    >
      <div className="uk-navbar-left">
        <Link href="/">
          <a className="uk-navbar-item uk-logo">
            {config.title}
          </a>
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
