import config from '@components/config';
import PageList from '@components/PageList';
import SocialIcon from '@components/SocialIcon';

const Footer = () => {
  const CopyText = () => {
    const siteTitle = config.title;
    const startDate = new Date(config.createAt);
    const startYear = startDate.getFullYear();

    const now = new Date();
    const nowYear = now.getFullYear();

    // const copyText =
    // nowYear > startYear
    //   ? startYear + '-' + nowYear + siteTitle
    //   : startYear + siteTitle;

    return (
      <span>
        &copy;
        {`${startYear}${
          nowYear > startYear && '-' + nowYear
        }${siteTitle}`}
      </span>
    );
  };
  return (
    <footer className="bg-gray-600 text-white p-2 mt-auto">
      <nav>
        <PageList />
      </nav>
      <div className="text-sm text-center p-2">
        <CopyText />
      </div>
    </footer>
  );
};

export default Footer;
