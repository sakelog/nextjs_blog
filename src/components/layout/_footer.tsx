import React from 'react';
import config from '../config';

const Footer = () => {
  const SiteTitle = config.title;
  const startDate = new Date(config.createAt);
  const startYear = startDate.getFullYear();

  const now = new Date();
  const nowYear = now.getFullYear();
  const copytext =
    nowYear === startYear
      ? startYear + SiteTitle
      : startYear + '-' + nowYear + SiteTitle;

  return (
    <footer className="l-footer">
      <p>&copy;{copytext}</p>
    </footer>
  );
};

export default Footer;
