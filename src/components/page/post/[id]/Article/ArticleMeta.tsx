// libs
import { getFormatDate } from '@/libs/util/getFormatDate';

// components
import Link from 'next/link';

type PropTypes = {
  createDate: string;
  updateDate?: string;
  tags: Array<Content.Tag>;
};

const ArticleMeta = ({
  createDate,
  updateDate,
  tags,
}: PropTypes) => (
  <div>
    <div>
      {updateDate ? (
        <time dateTime={updateDate} itemProp="datemodified">
          {getFormatDate(updateDate)}
        </time>
      ) : (
        <time
          dateTime={createDate}
          itemProp="datepublished"
        >
          {getFormatDate(createDate)}
        </time>
      )}
    </div>
    <div
      className="uk-flex uk-margin"
      style={{ gap: '0.4rem' }}
    >
      {tags.map((tag) => (
        <div
          key={`post-tag-${tag.id}`}
          className="uk-badge uk-padding-small"
        >
          <Link href={`/tags/${tag.id}`}>
            <a style={{ color: '#ffffff' }}>{tag.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default ArticleMeta;
