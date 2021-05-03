import React from 'react';
import { If } from 'react-if';
import cn from 'classnames';
import isEmpty from 'lodash.isempty';

import { RichText, TouchpointInstructions } from '@components';
import s from './styles.module.scss';

const StudiosSidebar = ({
  className,
  heading,
  title,
  description,
  children,
  hideInstructions = false,
}) => {
  return (
    <div className={cn(s.content, className)}>
      <div>
        {heading && <h1 className={s.heading}>{heading}</h1>}
        {title && <h2 className={s.title}>{title}</h2>}
        <If condition={!isEmpty(description)}>
          <RichText blocks={description} />
        </If>

        <If condition={children}>{children}</If>
      </div>
      <If condition={!hideInstructions}>
        <TouchpointInstructions />
      </If>
    </div>
  );
};

export default StudiosSidebar;
