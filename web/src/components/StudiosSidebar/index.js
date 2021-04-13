import React from 'react';
import cn from 'classnames';
import isEmpty from 'lodash.isempty';

import { RichText } from '@components';
import s from './styles.module.scss';

const StudiosSidebar = ({ className, heading, title, description }) => {
  return (
    <div className={cn(s.content, className)}>
      <div>
        {heading && <h1 className={s.heading}>{heading}</h1>}
        {title && <h2 className={s.title}>{title}</h2>}
        {!isEmpty(description) && <RichText blocks={description} />}
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
