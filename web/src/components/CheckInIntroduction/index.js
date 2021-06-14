import React from 'react';

import { RichText } from '@components';
import s from './styles.module.scss';

const CheckInIntroduction = ({
  className,
  title,
  description,
  what_to_expect,
  duration,
  closing_statement,
}) => {
  return (
    <div className={s.container}>
      <div>
        <h1>{title}</h1>
        <RichText blocks={description} />
      </div>

      <div>
        <h2>What to expect</h2>
        <RichText blocks={what_to_expect} />
      </div>

      <div>
        <h2>Duration</h2>
        <RichText blocks={duration} />
      </div>

      <div>
        <RichText blocks={closing_statement} />
      </div>
    </div>
  );
};

export default CheckInIntroduction;
