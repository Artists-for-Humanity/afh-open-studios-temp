import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

const TouchpointMarker = ({ className, style, number, onClick }) => {
  return (
    <button className={cn(s.marker, className)} style={style} onClick={onClick}>
      {number}
    </button>
  );
};

export default TouchpointMarker;
