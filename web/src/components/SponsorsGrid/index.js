import React from 'react';
import cn from 'classnames';
import { Image } from '@components';
import s from './styles.module.scss';

const SponsorsGrid = ({ className, sponsors: { label, sponsors } }) => {
  console.log(sponsors);
  return (
    <div className={cn(className, s.wrapper)}>
      <h3 className={s.label}>{label}</h3>
      <div className={s.grid}>
        {
          sponsors.map((sponsor, index) => (
            <div key={index} className={s.item}>
              <Image img={sponsor.image} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SponsorsGrid;
