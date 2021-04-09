import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

const TouchpointMarker = ({ className, style, number }) => {
  return (
    <button className={cn(s.marker, className)} style={style}>
      {number}
    </button>
  );
};

export default TouchpointMarker;
