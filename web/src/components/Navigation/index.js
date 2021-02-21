import React from 'react';

import { Link } from '@components';
import s from './styles.module.scss';

const Navigation = ({ links }) => {
  return (
    <header className={s.container}>
      <nav>
        <ul className={s.links}>
          {links.map(({ href, label }, i) => (
            <li key={i}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
