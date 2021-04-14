import React from 'react';
import cn from 'classnames';

import { Image } from '@components';
import s from './styles.module.scss';

const CaptionImage = ({ className, img }) => {
  return (
    <figure className={cn(s.container, className)}>
      <Image className={s.image} img={img} />
      {img.alt && <figcaption>{img.alt}</figcaption>}
    </figure>
  );
};

export default CaptionImage;
