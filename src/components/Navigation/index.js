import React from 'react';
import s from './styles.module.scss';

const Navigation = (props) => {
  return (
    <header className={s.container}>
      <nav>
        <ul className={s.links}>
          <li>EpiCenter</li>
          <li>Gallery</li>
          <li>Studios</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
