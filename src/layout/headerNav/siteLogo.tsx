import Link from 'next/link';
import config from '@components/config';

const SiteLogo = () => {
  const firstChar = config.title.slice(0, 1);
  const remain = config.title.slice(1);

  return (
    <Link href="/">
      <a className="text-white font-logo">
        <span>{firstChar}</span>
        <span className="hidden sm:inline">{remain}</span>
      </a>
    </Link>
  );
};

export default SiteLogo;
