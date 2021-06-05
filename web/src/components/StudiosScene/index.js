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
      /**
       * `offsetX` changes based on the current target.
       * Avoid changing scroll when hovering over a touchpoint
       * to prevent fidgety jumps.
       */
      if (e.target.tagName === 'BUTTON') {
        return;
      }

      const offsetY = Math.abs(e.offsetY);
      const height = containerEl.scrollHeight;
      const relativeY = offsetY / height;

      const containerElScrollDifference =
        containerEl.scrollHeight - containerEl.offsetHeight;

      containerEl.scrollTop = relativeY * containerElScrollDifference;
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
