import React from 'react';

import { RichText } from '@components';
import s from './styles.module.scss';

const StudiosSidebar = ({ className, title, description }) => {
  return (
    <div className={s.content}>
      <div>
        <h1 className={s.title}>{title}</h1>
        <RichText blocks={description} />
      </div>
      <aside className={s.aside}>
        <p>
          Click on touch points to interact with different areas of the studio.
        </p>
      </aside>
    </div>
  );
};

export default StudiosSidebar;
