import React from 'react';
import cn from 'classnames';

import { Link } from '@components';
import s from './styles.module.scss';

const NextStudio = ({ className, studio }) => {
  if (!studio) {
    return null;
  }

  const title = studio.short_title;
  const slug = studio.slug.current;

  return (
    <div className={cn(s.container, className)}>
      <span>Up Next</span>
      <Link className={s.link} href={`/studios/${slug}`}>
        {title}
      </Link>
    </div>
  );
};

export default NextStudio;
