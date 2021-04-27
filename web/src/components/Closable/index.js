import React from 'react';
import cn from 'classnames';

import s from './styles.module.scss';

const Closable = ({ className, children, onClose }) => {
  return (
    <div className={cn(s.container, className)}>
      {children}
      <button className={s.close} onClick={onClose}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default Closable;
