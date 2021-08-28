import styles from '@styles/component/article__iframe.module.scss';

const RemarkIframe: React.FC<JSX.IntrinsicElements['iframe']> = (props) => {
  const YOUTUBE_URL_NOCOOKIE = 'https://www.youtube-nocookie.com/embed/';
  const isYoutube = props.src
    ? props.src.startsWith(YOUTUBE_URL_NOCOOKIE)
    : false;

  return (
    <div className={isYoutube ? styles.youtube : styles.default}>
      <iframe {...props} />
    </div>
  );
};

export default RemarkIframe;
