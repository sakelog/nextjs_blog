import styles from '../../styles/Object/Component/_c-article__iframe.module.scss';

const RemarkIframe: React.FC<JSX.IntrinsicElements['iframe']> = (props) => {
  const YOUTUBE_URL_NOCOOKIE = 'https://www.youtube-nocookie.com/embed/';
  const isYoutube = props.src.startsWith(YOUTUBE_URL_NOCOOKIE);

  const className = isYoutube ? 'youtube' : 'default';

  console.log(isYoutube);
  return (
    <div className={styles[className]}>
      <iframe {...props} />
    </div>
  );
};

export default RemarkIframe;
