import React, { forwardRef } from 'react';

import { getImageUrl } from '@utils';
import s from './styles.module.scss';

const Image = forwardRef(({ className, style, img }, ref) => {
  const imageURL = getImageUrl(img.src);

  return (
    <img
      className={className}
      style={style}
      src={imageURL}
      alt={img.alt}
      ref={ref}
    />
  );
});

export default Image;
