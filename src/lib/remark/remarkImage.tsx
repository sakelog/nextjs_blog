import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getWindowSize } from '../getWindowSize';

import styles from '../../styles/Object/Component/_c-article__Image.module.scss';

const RemarkImage: React.FC<JSX.IntrinsicElements['img']> = (props) => {
  const isContentfulImg = props.src.startsWith('//images.ctfassets.net');
  const alt = props.alt ? props.alt : null;
  const [state, setState] = useState<string>('');
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const handleShow = () => {
    setState('show');
  };
  const handleHide = () => {
    setState('hide');
  };
  const handleChangeWindowSize = () => {
    setWindowSize(getWindowSize());
  };
  useEffect(() => {
    handleChangeWindowSize();
    window.addEventListener('resize', handleChangeWindowSize);
    window.addEventListener('orientationchange', handleChangeWindowSize);
    return () => {
      window.removeEventListener('resize', () => {
        handleChangeWindowSize;
      });
      window.removeEventListener('orientationchange', handleChangeWindowSize);
    };
  }, []);
  const ContentfulImgTag = isContentfulImg && (
    <Image
      src={'https:' + props.src}
      layout="fill"
      objectFit="scale-down"
      alt={alt}
      onClick={state === 'show' ? handleHide : handleShow}
    />
  );
  const customImgTag = isContentfulImg ? (
    <>
      <div
        className={styles.modal + ' ' + styles[state]}
        onClick={handleHide}
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        {ContentfulImgTag}
      </div>
      <div className={styles.articleImage}>{ContentfulImgTag}</div>
    </>
  ) : (
    <img {...props} />
  );
  return <>{customImgTag}</>;
};

export default RemarkImage;
