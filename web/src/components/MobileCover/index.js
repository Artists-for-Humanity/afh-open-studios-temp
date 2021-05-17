import React from 'react';
import cn from 'classnames';

import s from './styles.module.scss';

const MobileCover = ({ className }) => {
  return (
    <div className={cn(s.cover, className)}>
      AFH's digital tour is currently not supported on mobile.
    </div>
  );
};

export default MobileCover;
