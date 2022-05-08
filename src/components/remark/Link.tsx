import React from 'react';
import Link from 'next/link';

// components
import config from '@components/config';
import { HiOutlineExternalLink } from 'react-icons/hi';

type PropTypes = JSX.IntrinsicElements['a'];

const RemarkLink = ({
  href,
  children,
  ...props
}: PropTypes) => {
  const isExternalLink = href?.startsWith('http') || false;

  const isAnchor = href?.startsWith('#') || false;

  const isInternalAbsoluteLink =
    href?.startsWith(config.url) || false;

  let linkItem: React.ReactElement;

  if (isExternalLink) {
    linkItem = (
      <a href={href} {...props}>
        <span className="break-all">{children}</span>
        <HiOutlineExternalLink className="inline ml-1 externalIcon" />
      </a>
    );
  } else if (isAnchor || isInternalAbsoluteLink) {
    linkItem = (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else {
    linkItem = (
      <Link href={href || ''}>
        <a>{children}</a>
      </Link>
    );
  }

  return linkItem;
};

export default RemarkLink;
