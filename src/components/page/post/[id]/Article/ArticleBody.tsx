// libs
import { imageLoader } from '@/libs/microcms/util/imageLoader';

// components
import Image from 'next/image';

type PropTypes = {
  body: Content.PostBody;
  title: string;
};

const ArticleBody = ({ body, title }: PropTypes) => (
  <>
    {body.map((item, i) => {
      if (item.fieldId === 'image') {
        const { url, height, width } = item.content;
        return (
          <div
            key={`post-image-${url}`}
            className="uk-text-center uk-margin"
          >
            <Image
              loader={imageLoader}
              src={url}
              height={height}
              width={width}
              layout="intrinsic"
              alt={`${title}-image-${i}`}
            />
          </div>
        );
      }
      return (
        <div
          key={`post-${item.fieldId}-${i}`}
          dangerouslySetInnerHTML={{
            __html: item.content,
          }}
        />
      );
    })}
  </>
);

export default ArticleBody;
