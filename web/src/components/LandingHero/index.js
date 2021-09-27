import React, { useState, useEffect } from 'react';
import { If } from 'react-if';
import isEmpty from 'lodash.isempty';

import { Image, SponsorsGrid } from '@components';
import s from './styles.module.scss';

const LandingHero = ({ className, heading, backgrounds = [], logo, sponsors }) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const withBackgrounds = !isEmpty(backgrounds);
  const isHidden = (i) => i !== backgroundIndex;

  useEffect(() => {
    if (withBackgrounds) {
      const backgroundLoop = setInterval(() => {
        const max = backgrounds.length - 1;
        const nextBackgroundIndex =
          backgroundIndex === max ? 0 : backgroundIndex + 1;

        setBackgroundIndex(nextBackgroundIndex);
      }, 4000);

      return () => clearInterval(backgroundLoop);
    }
  }, [backgroundIndex]);

  return (
    <section className={s.hero}>
      <If condition={withBackgrounds}>
        <div className={s.backgrounds}>
          {backgrounds.map((image, i) => (
            <Image
              className={isHidden(i) ? s.hidden : ''}
              img={image}
              key={i}
            />
          ))}
        </div>
      </If>
      {logo && <Image className={s.logo} img={logo} />}
      <h1>{heading}</h1>
      <SponsorsGrid sponsors={sponsors} className={s.sponsors} />
    </section>
  );
};

export default LandingHero;
