import Link from 'next/link';

import { getRootPath } from '../getPath';

import config from '../../components/config';

import styles from '../../styles/Object/Component/_c-article__Link.module.scss';

const RemarkLink: React.FC<JSX.IntrinsicElements['a']> = (props) => {
  let isExternalLink = props.href.startsWith('http');
  const isInternalLinkAbsolute = props.href.startsWith(config.url);
  isExternalLink =
    isExternalLink && isInternalLinkAbsolute ? false : isExternalLink;
  const rel = props.rel
    ? props.rel
    : isExternalLink
    ? 'noopener noreferrer'
    : null;
  const target = props.target ? props.target : isExternalLink ? '_blank' : null;
  const className = props.className ? props.className : null;
  const linkTo = isExternalLink ? 'external' : 'internal';
  const internalPath =
    !isExternalLink &&
    (isInternalLinkAbsolute
      ? getRootPath(props.href.replace(config.url, ''))
      : props.href);
  return (
    <>
      {isExternalLink ? (
        <a
          href={props.href}
          rel={rel}
          target={target}
          className={className + ' ' + styles[linkTo]}
        >
          {props.children}
        </a>
      ) : (
        <Link href={internalPath}>
          <a>{props.children}</a>
        </Link>
      )}
    </>
  );
};

export default RemarkLink;
