import Image from 'next/image';

const RemarkImage = async (props) => {
  const isContentfulImg = props.src.match(/images.ctfassets.net/);
  const customImgTag = isContentfulImg ? (
    <img src={props.src} alt={props.alt} />
  ) : (
    <img src={props.src} alt={props.alt} />
  );
  return <>{customImgTag}</>;
};

export default RemarkImage;
