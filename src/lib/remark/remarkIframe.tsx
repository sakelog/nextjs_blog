import styles from '@styles/component/_c-article__iframe.module.scss';

const RemarkIframe: React.FC<JSX.IntrinsicElements['iframe']> = (props) => {
  const YOUTUBE_URL_NOCOOKIE = 'https://www.youtube-nocookie.com/embed/';
  const isYoutube = props.src
    ? props.src.startsWith(YOUTUBE_URL_NOCOOKIE)
    : false;

  const className = isYoutube ? 'youtube' : 'default';

  return (
    <div className={styles[className]}>
      <iframe {...props} />
    </div>
  );
};

export default RemarkIframe;
