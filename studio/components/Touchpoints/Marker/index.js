import React from 'react';
import cn from 'classnames';
import s from './styles.css';

const Marker = ({ className, style, number, onClick }) => {
  return (
    <button className={cn(className, s.marker)} style={style} onClick={onClick}>
      {number}
    </button>
  );
};

export default Marker;
