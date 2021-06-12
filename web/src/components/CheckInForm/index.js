import React from 'react';

import { RichText } from '@components';
import s from './styles.module.scss';

const CheckInForm = ({ className, title, description }) => {
  return (
    <form>
      <h1>{title}</h1>
      <RichText blocks={description} />
    </form>
  );
};

export default CheckInForm;
