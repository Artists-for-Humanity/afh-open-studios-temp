import React from 'react';
import cn from 'classnames';

import s from './styles.module.scss';

const IconButton = ({ icon, ...props }) => {
  return (
    <button {...props}>
      <i className={cn(s.icon, icon)} />
    </button>
  );
};

export default IconButton;
