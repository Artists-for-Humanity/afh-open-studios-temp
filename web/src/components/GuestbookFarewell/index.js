import React from 'react';
import { If } from 'react-if';

import { Image, RichText } from '@components';
import s from './styles.module.scss';

const GuestbookFarewell = ({ className, title, description, image }) => {
  return (
    <div className={s.container}>
      <Image img={image} />
      <h2>{title}</h2>
      <If condition={description}>
        <RichText blocks={description} />
      </If>
    </div>
  );
};

export default GuestbookFarewell;
