import React from 'react';
import { If } from 'react-if';
import isEmpty from 'lodash.isempty';
import cn from 'classnames';

import { Link } from '@components';
import { getAttrFromFirst } from '@utils';
import s from './styles.module.scss';

const NestedCheckpoints = ({ checkpoints }) => {
  if (isEmpty(checkpoints)) {
    return null;
  }

  return (
    <ul className={s.nested}>
      {checkpoints.map(({ title, href }, i) => (
        <Link className={s.link} href={href} key={i}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

const TourNavigation = ({ className, navigation }) => {
  const studios = navigation.studios.map(({ short_title, slug }) => ({
    title: short_title,
    href: `/studios/${slug.current}`,
  }));

  const checkpoints = [
    {
      title: 'Introduction',
      href: '/introduction',
    },
    {
      title: 'Studios',
      href: '/studios',
      checkpoints: studios,
    },
    {
      title: 'Gallery',
      href: '/gallery',
    },
  ];

  return (
    <header className={cn(s.container, className)}>
      <nav>
        <ul className={s.checkpoints}>
          {checkpoints.map(({ title, href, checkpoints }, i) => (
            <Link className={s.link} href={href} key={i}>
              <li>
                <span className={s.label}>
                  {title}
                  <If condition={!isEmpty(checkpoints)}>
                    <i className={cn(s.chevron, 'fas fa-chevron-down')} />
                  </If>
                </span>
                <NestedCheckpoints checkpoints={checkpoints} />
              </li>
            </Link>
          ))}
        </ul>
        <button className={s.cta}>End Tour</button>
      </nav>
    </header>
  );
};

export default TourNavigation;
