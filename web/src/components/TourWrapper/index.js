import React from 'react';
import s from './styles.module.scss';

const TourWrapper = ({ className, sidebar, children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>{sidebar}</div>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default TourWrapper;
