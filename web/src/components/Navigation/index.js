import React from 'react';

import { Link } from '@components';
import s from './styles.module.scss';

const NestedCheckpoints = ({ checkpoints }) => {
  return (
    <ul>
      {checkpoints.map(({ short_title, slug }) => (
        <li>{short_title}</li>
      ))}
    </ul>
  );
};

const Navigation = ({ checkpoints, cta }) => {
  return (
    <header className={s.container}>
      <nav>
        <ul className={s.links}>
          {checkpoints.map(({ title }) => (
            <li>{title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
