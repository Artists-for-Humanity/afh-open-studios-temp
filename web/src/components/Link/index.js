import React from 'react';
import NextLink from 'next/link';

const Link = ({ className, href, children }) => {
  const externalLinks = ['http', 'www', 'mailto'];

  if (externalLinks.find((s) => href.startsWith(s))) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
