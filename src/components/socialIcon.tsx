import { FiGithub, FiTwitter } from 'react-icons/fi';

import config from '@components/config';

type IconPropsType = {
  className?: string;
  path: string;
  icon: React.ReactNode;
  bgcolor?: string;
};

const Icon = (props: IconPropsType) => {
  return (
    <div
      className="flex items-center justify-center text-xl 
                 rounded-full bg-gray-800 w-8 h-8"
      style={{ backgroundColor: props.bgcolor }}
    >
      <a
        href={props.path}
        target="_blank"
        rel="nofollow noopener"
        className="text-white"
      >
        {props.icon}
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
          className="bg-gray-400"
          path={githubPath}
          icon={<FiGithub />}
        />
      </li>
      <li key="twitter">
        <Icon
          path={twitterPath}
          icon={<FiTwitter />}
          bgcolor="#1DA1F2"
        />
      </li>
    </ul>
  );
};

export default RenderSocialIcon;
