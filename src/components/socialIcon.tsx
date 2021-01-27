import { FaGithubAlt, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { FiMail } from 'react-icons/fi';

import config from './config';

const RenderSocialIcon = () => {
  const githubBase = 'https://github.com/';
  const githubPath = githubBase + config.social.github;
  const twitterBase = 'https://twitter.com/';
  const twitterPath = twitterBase + config.social.twitter;

  return (
    <ul>
      <li key="github">
        <SocialIcon url={githubPath} fgColor="#ffffff" bgColor="#333333" />
      </li>
      <li key="twitter">
        <SocialIcon url={twitterPath} fgColor="#ffffff" />
      </li>
    </ul>
  );
};

export default RenderSocialIcon;
