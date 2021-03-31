import React from 'react';
import cn from 'classnames';

import { Link } from '@components';
import { getAttrFromFirst } from '@utils';
import s from './styles.module.scss';

const NestedCheckpoints = ({ checkpoints }) => {
  return (
    <ul className={s.nested}>
      {checkpoints.map(({ short_title, slug }, i) => (
        <a className={s.link} href={slug.current} key={i}>
          <li>{short_title}</li>
        </a>
      ))}
    </ul>
  );
};

const Navigation = ({ checkpoints, cta }) => {
  return (
    <header className={s.container}>
      <nav>
        <ul className={s.checkpoints}>
          {checkpoints.map(({ title, checkpoints }, i) => (
            <a
              className={s.link}
              href={getAttrFromFirst(checkpoints, 'slug.current')}
              key={i}
            >
              <li>
                <span className={s.label}>
                  {title} <i className={cn(s.chevron, 'fas fa-chevron-down')} />
                </span>
                <NestedCheckpoints checkpoints={checkpoints} />
              </li>
            </a>
          ))}
        </ul>
        <button className={s.cta}>{cta}</button>
      </nav>
    </header>
  );
};

export default Navigation;
