import React from 'react';
import ImageURLBuilder from '@sanity/image-url';

import client from '@client';
import s from './styles.module.scss';

const imageURLBuilder = ImageURLBuilder(client);

const Image = ({ className, style, img }) => {
  const imageURL = imageURLBuilder.image(img.src);
  return (
    <img className={className} style={style} src={imageURL} alt={img.alt} />
  );
};

export default Image;
