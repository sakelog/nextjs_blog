import Link from 'next/link';

import { getRootPath } from '@lib/getPath';

import config from '@components/config';
import styles from '@styles/component/article__link.module.scss';

import { HiOutlineExternalLink } from 'react-icons/hi';

const RemarkLink: React.FC<JSX.IntrinsicElements['a']> = (
  props
) => {
  let isExternalLink = props.href
    ? props.href.startsWith('http')
    : false;
  const isInternalLinkAbsolute = props.href
    ? props.href.startsWith(config.url)
    : false;
  isExternalLink =
    isExternalLink && isInternalLinkAbsolute
      ? false
      : isExternalLink;
  const rel = props.rel
    ? props.rel
    : isExternalLink
    ? 'noopener noreferrer'
    : null;
  const target = props.target
    ? props.target
    : isExternalLink
    ? '_blank'
    : null;
  const className = props.className
    ? props.className
    : null;
  const internalPath =
    !isExternalLink &&
    (isInternalLinkAbsolute && props.href
      ? getRootPath(props.href.replace(config.url, ''))
      : props.href);
  return (
    <>
      {isExternalLink ? (
        <a
          href={props.href}
          rel={rel ? rel : ''}
          target={target ? target : ''}
          className={props.className + ' inline-block'}
        >
          {props.children}
          {
            <HiOutlineExternalLink className="inline ml-1 externalIcon" />
          }
        </a>
      ) : (
        internalPath && (
          <Link href={internalPath}>
            <a>{props.children}</a>
          </Link>
        )
      )}
    </>
  );
};

export default RemarkLink;
