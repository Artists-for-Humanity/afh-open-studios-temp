import React from 'react';
import { If } from 'react-if';
import cn from 'classnames';

import { Image } from '@components';
import s from './styles.module.scss';

const CaptionImage = ({ className, img, caption }) => {
  return (
    <figure className={cn(s.container, className)}>
      <Image className={s.image} img={img} />
      <If condition={caption || img.alt}>
        <figcaption>{caption || img.alt}</figcaption>
      </If>
    </figure>
  );
};

export default CaptionImage;
