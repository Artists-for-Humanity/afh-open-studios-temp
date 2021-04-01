import React from 'react';

import { Image } from '@components';
import s from './styles.module.scss';

const LandingSteps = ({ className, steps }) => {
  return (
    <section className={s.container}>
      {steps.map(({ title, image }, i) => (
        <div className={s.step} key={i}>
          <h2>{title}</h2>
          <Image img={image} />
        </div>
      ))}
    </section>
  );
};

export default LandingSteps;
