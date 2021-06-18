import React from 'react';
import { If, Then, Else } from 'react-if';
import cn from 'classnames';
import isEmpty from 'lodash.isempty';

import { RichText, TouchpointInstructions, GalleryCarousel } from '@components';
import s from './styles.module.scss';

const StudiosSidebar = ({
  className,
  heading,
  title,
  description,
  children,
  carouselImages,
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

        {children}
      </div>
      <If condition={!hideInstructions || !isEmpty(carouselImages)}>
        <If condition={!hideInstructions}>
          <Then>
            <TouchpointInstructions />
          </Then>
          <Else>
            <If condition={!isEmpty(carouselImages)}>
              <GalleryCarousel className={s.carousel} images={carouselImages} />
            </If>
          </Else>
        </If>
      </If>
    </div>
  );
};

export default StudiosSidebar;
