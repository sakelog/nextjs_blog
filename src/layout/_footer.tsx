import config from '@components/config';
import PageList from '@components/pageList';
import SocialIcon from '@components/socialIcon';

const Footer = () => {
  const siteTitle = config.title;
  const startDate = new Date(config.createAt);
  const startYear = startDate.getFullYear();

  const now = new Date();
  const nowYear = now.getFullYear();

  const copyText =
    nowYear > startYear
      ? startYear + '-' + nowYear + siteTitle
      : startYear + siteTitle;
  return (
    <footer
      className="bg-gray-600 text-white 
                  p-2 mt-auto"
    >
      <nav className="my-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
        <section className="text-sm">
          <PageList />
        </section>
        <section>
          <SocialIcon className="flex justify-center items-center space-x-2" />
        </section>
      </nav>
      <div className="text-sm text-center">
        &copy;{copyText}
      </div>
    </footer>
  );
};

export default Footer;
