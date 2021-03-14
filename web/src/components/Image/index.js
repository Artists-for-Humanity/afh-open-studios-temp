import React from 'react';
import s from './styles.module.scss';

import ImageURLBuilder from '@sanity/image-url';
import client from '../../client';

const imageURLBuilder = ImageURLBuilder(client);

const Image = ({ className, img }) => {
  const imageURL = imageURLBuilder.image(img.src);
  return <img className={className} src={imageURL} alt={img.alt} />;
};

export default Image;
