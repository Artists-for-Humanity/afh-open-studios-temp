import React, { useRef, useEffect } from 'react';

import { Image, TouchpointMarker } from '@components';
import s from './styles.module.scss';

const StudiosScene = ({ className, scene }) => {
  const ref = useRef();
  const { touchpoints } = scene;

  /**
   * Scroll the scene based on
   * cursor position relative to width
   * of the scene.
   */
  useEffect(() => {
    const containerEl = ref.current;

    containerEl.onmousemove = ({ clientX }) => {
      const width = containerEl.offsetWidth;
      const relativeX = clientX / width;
      const containerElScrollDifference =
        containerEl.scrollWidth - containerEl.offsetWidth;

      containerEl.scrollLeft = relativeX * containerElScrollDifference;
    };
  }, []);

  return (
    <div className={s.scene} ref={ref}>
      <div>
        <Image className={s.image} img={scene.image} />
        {touchpoints.map(({ x, y }, i) => (
          <TouchpointMarker
            className={s.marker}
            style={{ left: `${x}%`, top: `${y}%` }}
            number={i + 1}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default StudiosScene;
