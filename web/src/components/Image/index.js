import React from 'react';

import { getImageUrl } from '@utils';
import s from './styles.module.scss';

const Image = ({ className, style, img }) => {
  const imageURL = getImageUrl(img.src);

  return (
    <img className={className} style={style} src={imageURL} alt={img.alt} />
  );
};

export default Image;
