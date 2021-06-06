import React from 'react';
import { If } from 'react-if';
import cn from 'classnames';
import isEmpty from 'lodash.isempty';

import { RichText, Link } from '@components';
import s from './styles.module.scss';

const Sidebar = ({ className, title, description, cta, ctaHref, children }) => {
  return (
    <div className={cn(s.sidebar, className)}>
      <div>
        <h1>{title}</h1>
        <If condition={!isEmpty(description)}>
          <RichText blocks={description} />
        </If>
      </div>
      {children}
      <If condition={cta}>
        <Link className={s.cta} href={ctaHref}>
          {cta}
        </Link>
      </If>
    </div>
  );
};

export default Sidebar;
