import { SocialIcon } from 'react-social-icons';

import config from '@components/config';

type PropsType = {
  className?: string;
};

const RenderSocialIcon = (props: PropsType) => {
  const githubBase = 'https://github.com/';
  const githubPath = githubBase + config.social.github;
  const twitterBase = 'https://twitter.com/';
  const twitterPath = twitterBase + config.social.twitter;

  return (
    <ul
      className={
        'flex space-x-2' + props.className &&
        ' ' + props.className
      }
    >
      <li key="github">
        <SocialIcon
          url={githubPath}
          fgColor="#ffffff"
          bgColor="#333333"
        />
      </li>
      <li key="twitter">
        <SocialIcon url={twitterPath} fgColor="#ffffff" />
      </li>
    </ul>
  );
};

export default RenderSocialIcon;
