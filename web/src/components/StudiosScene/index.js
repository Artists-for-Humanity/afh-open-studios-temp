import React, { useRef, useEffect } from 'react';
import cn from 'classnames';

import { Image, TouchpointMarker } from '@components';
import s from './styles.module.scss';

const StudiosScene = ({ className, scene, onSelectTouchpoint }) => {
  const ref = useRef();
  const { touchpoints, content = [] } = scene;
  const touchpointsWithContent = touchpoints.slice(0, content.length);

  /**
   * Scroll the scene based on
   * cursor position relative to width
   * of the scene.
   */
  useEffect(() => {
    const containerEl = ref.current;

    containerEl.onmousemove = (e) => {
      const offsetX = Math.abs(e.offsetX);
      const width = containerEl.scrollWidth;
      const relativeX = offsetX / width;

      const containerElScrollDifference =
        containerEl.scrollWidth - containerEl.offsetWidth;

      containerEl.scrollLeft = relativeX * containerElScrollDifference;
    };
  }, []);

  return (
    <div className={cn(s.scene, className)} ref={ref}>
      <div>
        <Image className={s.image} img={scene.image} />
        {touchpointsWithContent.map(({ x, y }, i) => (
          <TouchpointMarker
            className={s.marker}
            style={{ left: `${x}%`, top: `${y}%` }}
            number={i + 1}
            key={i}
            onClick={() => onSelectTouchpoint(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default StudiosScene;
