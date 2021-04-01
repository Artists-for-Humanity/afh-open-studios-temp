import React, { useState, useEffect } from 'react';

import { Image } from '@components';
import s from './styles.module.scss';

const LandingHero = ({ className, heading, backgrounds = [] }) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const isHidden = (i) => i !== backgroundIndex;

  useEffect(() => {
    const backgroundLoop = setInterval(() => {
      const max = backgrounds.length - 1;
      const nextBackgroundIndex =
        backgroundIndex === max ? 0 : backgroundIndex + 1;

      setBackgroundIndex(nextBackgroundIndex);
    }, 4000);

    return () => clearInterval(backgroundLoop);
  }, [backgroundIndex]);

  return (
    <section className={s.hero}>
      <div className={s.backgrounds}>
        {backgrounds.map((image, i) => (
          <Image className={isHidden(i) ? s.hidden : ''} img={image} key={i} />
        ))}
      </div>
      <h1>{heading}</h1>
    </section>
  );
};

export default LandingHero;
