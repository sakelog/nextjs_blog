import config from '@components/config';

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
                  flex items-center justify-center p-2 mt-auto"
    >
      <p className="text-sm">&copy;{copyText}</p>
    </footer>
  );
};

export default Footer;
