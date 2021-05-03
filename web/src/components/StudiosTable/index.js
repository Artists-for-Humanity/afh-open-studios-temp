import React from 'react';
import get from 'lodash.get';
import { If } from 'react-if';

import { CaptionImage, Link } from '@components';
import s from './styles.module.scss';

const StudiosTable = ({ className, studios }) => {
  return (
    <ul className={s.table}>
      {studios.map(({ short_title, slug, scene }, i) => {
        if (!get(scene, 'image')) {
          return null;
        }

        return (
          <li key={i}>
            <Link href={`/studios/${slug.current}`}>
              <CaptionImage img={scene.image} caption={short_title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default StudiosTable;
