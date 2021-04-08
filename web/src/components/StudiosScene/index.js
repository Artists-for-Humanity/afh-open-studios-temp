import React, { useRef, useEffect } from 'react';

import { Image } from '@components';
import s from './styles.module.scss';

const StudiosScene = ({ className, scene }) => {
  const ref = useRef();

  useEffect(() => {
    const containerEl = ref.current;

    containerEl.onmousemove = ({ layerX }) => {
      const width = containerEl.offsetWidth;
      const relativeX = layerX / width;
      const containerElScrollDifference =
        containerEl.scrollWidth - containerEl.offsetWidth;

      containerEl.scrollLeft = relativeX * containerElScrollDifference;
    };
  }, []);

  return (
    <div className={s.scene} ref={ref}>
      <Image className={s.image} img={scene.image} />
    </div>
  );
};

export default StudiosScene;
