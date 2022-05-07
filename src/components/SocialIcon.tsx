import { FiGithub, FiTwitter } from 'react-icons/fi';

import config from '@components/config';

type IconPropTypes = {
  path: string;
  icon: React.ReactNode;
  bgcolor?: string;
  name: string;
};

const Icon = ({
  bgcolor,
  path,
  icon,
  name,
}: IconPropTypes) => {
  return (
    <div
      className="flex items-center justify-center text-xl 
                 rounded-full bg-gray-800 w-8 h-8"
      style={{ backgroundColor: bgcolor }}
    >
      <a
        href={path}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="text-white"
        aria-label={`icon_${name}`}
      >
        {icon}
      </a>
    </div>
  );
};

const RenderSocialIcon = () => {
  const githubBase = 'https://github.com/';
  const githubPath = githubBase + config.social.github;
  const twitterBase = 'https://twitter.com/';
  const twitterPath = twitterBase + config.social.twitter;
  return (
    <ul className="flex space-x-2">
      <li key="github">
        <Icon
          path={githubPath}
          icon={<FiGithub />}
          name="github"
        />
      </li>
      <li key="twitter">
        <Icon
          path={twitterPath}
          icon={<FiTwitter />}
          bgcolor="#1DA1F2"
          name="twitter"
        />
      </li>
    </ul>
  );
};

export default RenderSocialIcon;
