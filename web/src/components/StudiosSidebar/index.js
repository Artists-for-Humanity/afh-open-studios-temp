import React from 'react';

import { RichText } from '@components';
import s from './styles.module.scss';

const StudiosSidebar = ({ className, title, description }) => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>{title}</h1>
      <RichText blocks={description} />
    </div>
  );
};

export default StudiosSidebar;
