import { config } from 'config';
import { navMenuItem } from './navMenuItem';

// components
import Link from 'next/link';

const CopyText = () => {
  const siteTitle = config.title;
  const startDate = new Date(config.createAt);
  const startYear = startDate.getFullYear();

  const now = new Date();
  const nowYear = now.getFullYear();

  return (
    <div className="uk-text-small uk-text-center">
      &copy;
      {`${startYear}${
        nowYear > startYear && '-' + nowYear
      }${siteTitle}`}
    </div>
  );
};

const Footer = () => (
  <footer className="uk-section-muted uk-padding-small">
    <div
      className="uk-padding-small uk-child-width-1-1 uk-child-width-auto@m uk-grid-divider uk-flex-center@m uk-grid-small"
      data-uk-grid
    >
      {navMenuItem.items.map((item) => (
        <div key={`footer-nav-item-${item.name}`}>
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}
    </div>
    <CopyText />
  </footer>
);

export default Footer;
