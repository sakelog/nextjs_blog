import Link from 'next/link';

import config from '@components/config';

import { HiOutlineExternalLink } from 'react-icons/hi';

const RemarkLink: React.FC<JSX.IntrinsicElements['a']> = (
  props
) => {
  const isExternalLink =
    props.href?.startsWith('http') || false;
  const EXTERNAL_REL = 'noopener noreferrer';
  const EXTERNAL_TARGET = '_blank';
  const isAnchor = props.href?.startsWith('#') || false;
  const isInternalAbsoluteLink =
    props.href?.startsWith(config.url) || false;
  return (
    <>
      {isExternalLink ? (
        <a
          href={props.href}
          rel={EXTERNAL_REL}
          target={EXTERNAL_TARGET}
          className={
            'inline-block ' + (props.className || '')
          }
          {...props}
        >
          {props.children}
          {
            <HiOutlineExternalLink className="inline ml-1 externalIcon" />
          }
        </a>
      ) : isAnchor || isInternalAbsoluteLink ? (
        <a {...props} />
      ) : (
        <Link href={props.href || ''}>
          <a>{props.children}</a>
        </Link>
      )}
    </>
  );
};

export default RemarkLink;
