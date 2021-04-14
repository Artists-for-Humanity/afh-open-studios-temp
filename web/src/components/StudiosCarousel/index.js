import React, { useState } from 'react';
import { If } from 'react-if';
import cn from 'classnames';

import { IconButton, CaptionImage } from '@components';
import s from './styles.module.scss';

const StudiosCarousel = ({ className, images, onClose }) => {
  const [curImage, setCurImage] = useState(0);

  const prev = () => setCurImage(curImage - 1);
  const next = () => setCurImage(curImage + 1);
  const to = (i) => setCurImage(i);

  return (
    <div className={cn(s.container, className)}>
      <button className={s.close} onClick={onClose}>
        <i className="fas fa-times" />
      </button>

      <div className={s.carousel}>
        <CaptionImage className={s.image} img={images[curImage]} />
        <If condition={images.length > 1}>
          <nav>
            <If condition={curImage > 0}>
              <IconButton
                className={s.stepper}
                icon="fas fa-angle-left"
                onClick={prev}
                disabled={curImage === 0}
              />
            </If>
            {images.map((_, i) => (
              <IconButton
                className={cn(i !== curImage && s.inactive)}
                icon="fas fa-circle"
                onClick={() => to(i)}
              />
            ))}
            <If condition={curImage < images.length - 1}>
              <IconButton
                className={s.stepper}
                icon="fas fa-angle-right"
                onClick={next}
              />
            </If>
          </nav>
        </If>
      </div>
    </div>
  );
};

export default StudiosCarousel;
