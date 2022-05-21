import { config } from 'config';

// components
import { FiGithub, FiTwitter } from 'react-icons/fi';

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
      className="uk-border-circle uk-flex uk-flex-middle uk-flex-center
                w-8 h-8"
      style={{
        backgroundColor: bgcolor ?? '#666666',
        width: '30px',
        height: '30px',
      }}
    >
      <a
        href={path}
        target="_blank"
        rel="nofollow noopener noreferrer"
        style={{ color: '#ffffff' }}
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
    <div className="uk-flex" style={{ gap: '0.4rem' }}>
      <Icon
        path={githubPath}
        icon={<FiGithub />}
        name="github"
      />
      <Icon
        path={twitterPath}
        icon={<FiTwitter />}
        bgcolor="#1DA1F2"
        name="twitter"
      />
    </div>
  );
};

export default RenderSocialIcon;
