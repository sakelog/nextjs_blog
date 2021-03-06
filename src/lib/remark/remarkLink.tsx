import Link from 'next/link';

import { getRootPath } from '@lib/getPath';

import config from '@component/config';
import styles from '@styles/component/article__link.module.scss';

const RemarkLink: React.FC<JSX.IntrinsicElements['a']> = (props) => {
  let isExternalLink = props.href ? props.href.startsWith('http') : false;
  const isInternalLinkAbsolute = props.href
    ? props.href.startsWith(config.url)
    : false;
  isExternalLink =
    isExternalLink && isInternalLinkAbsolute ? false : isExternalLink;
  const rel = props.rel
    ? props.rel
    : isExternalLink
    ? 'noopener noreferrer'
    : null;
  const target = props.target ? props.target : isExternalLink ? '_blank' : null;
  const className = props.className ? props.className : null;
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
          className={className + ' ' + styles.external}
        >
          {props.children}
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
