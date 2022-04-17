import Link from 'next/link';

import config from '@components/config';

import { HiOutlineExternalLink } from 'react-icons/hi';

type PropsType = JSX.IntrinsicElements['a'];

const RemarkLink = (props: PropsType) => {
  const isExternalLink =
    props.href?.startsWith('http') || false;
  const isAnchor = props.href?.startsWith('#') || false;
  const isInternalAbsoluteLink =
    props.href?.startsWith(config.url) || false;
  return (
    <>
      {isExternalLink ? (
        <a
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
