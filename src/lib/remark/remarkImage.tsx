import Image from 'next/image';
import { useState } from 'react';
import styles from '@styles/component/article__image.module.scss';

const RemarkImage: React.FC<JSX.IntrinsicElements['img']> =
  (props) => {
    const isContentfulImg = props.src
      ? props.src.startsWith('//images.ctfassets.net')
      : false;
    const alt = props.alt ? props.alt : null;

    const [showState, setShowState] =
      useState<string>('hide');
    const handleShow = () => {
      setShowState('show');
    };
    const handleHide = () => {
      setShowState('hide');
    };

    const ContentfulImgTag = isContentfulImg && (
      <Image
        src={'https:' + props.src}
        layout="fill"
        objectFit="scale-down"
        alt={alt ? alt : ''}
        onClick={() => {
          showState === 'show'
            ? handleHide()
            : handleShow();
        }}
      />
    );
    const ContentfulTitle = isContentfulImg && (
      <div className={styles.title}>{props.title}</div>
    );
    const customImgTag = isContentfulImg ? (
      <div className={styles.root}>
        <div
          className={styles.modal}
          onClick={handleHide}
          style={{
            width: '100vw',
            height: '100vh',
            display:
              showState === 'show' ? 'block' : 'none',
          }}
        >
          {ContentfulImgTag}
        </div>
        <div className={styles.articleImage}>
          {ContentfulImgTag}
        </div>
        {ContentfulTitle}
      </div>
    ) : (
      <img {...props} />
    );
    return <>{customImgTag}</>;
  };

export default RemarkImage;
