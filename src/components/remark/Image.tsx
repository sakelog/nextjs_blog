import Image from 'next/image';
import { useState } from 'react';

type ImageLoaderTypes = {
  src: string;
  width: number;
};

const imageLoader = (props: ImageLoaderTypes) => {
  const { src, width } = props;
  const MAX_WIDTH = 640;
  const resizeWidth = width > MAX_WIDTH ? MAX_WIDTH : width;

  return `${src}?w=${resizeWidth}&q=75&fm=webp`;
};

type PropTypes = JSX.IntrinsicElements['img'];

const RemarkImage = (props: PropTypes) => {
  const isContentfulImg = props.src
    ? props.src.startsWith('//images.ctfassets.net')
    : false;
  const alt = props.alt ? props.alt : '';

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
      loader={imageLoader}
      src={'https:' + props.src}
      layout="fill"
      objectFit="scale-down"
      alt={alt ? alt : ''}
      onClick={() =>
        showState === 'show' ? handleHide() : handleShow()
      }
    />
  );
  const ContentfulTitle = isContentfulImg && (
    <div className="p-articleBody__image__title">
      {props.title}
    </div>
  );
  const customImgTag = isContentfulImg ? (
    <div className="p-articleBody__image__wrapper">
      <div
        className="c-modal__wrapper"
        onClick={handleHide}
        style={{
          display: showState === 'show' ? 'block' : 'none',
        }}
      >
        {ContentfulImgTag}
      </div>
      <div className="p-articleBody__image__articleImage">
        {ContentfulImgTag}
      </div>
      {ContentfulTitle}
    </div>
  ) : (
    <img {...props} alt={props.alt || ''} />
  );
  return <>{customImgTag}</>;
};

export default RemarkImage;
