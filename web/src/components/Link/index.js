import React from 'react';
import NextLink from 'next/link';

const Link = ({ className, href, children }) => {
  const externalLinks = ['http', 'www', 'mailto'];
  const props = {
    className,
    href,
  };

  if (externalLinks.find((s) => href.startsWith(s))) {
    return (
      <a {...props} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }

  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
