import React from 'react';
import cn from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

import s from './styles.module.scss';

const RichText = ({ className, blocks }) => {
  return (
    <BlockContent
      className={cn(s.container, className)}
      blocks={blocks}
      renderContainerOnSingleChild
    />
  );
};

export default RichText;
