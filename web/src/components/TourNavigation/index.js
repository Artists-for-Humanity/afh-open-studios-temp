import React from 'react';
import { useRouter } from 'next/router';
import { If } from 'react-if';
import isEmpty from 'lodash.isempty';
import cn from 'classnames';

import { Link } from '@components';
import s from './styles.module.scss';

const NestedCheckpoints = ({ checkpoints }) => {
  const { asPath } = useRouter();
  const isCurrentPath = (href) => asPath === href;

  if (isEmpty(checkpoints)) {
    return null;
  }

  return (
    <ul className={s.nested}>
      {checkpoints.map(({ title, href }, i) => (
        <Link className={s.link} href={href} key={i}>
          <li className={cn(isCurrentPath(href) && s.currentPath)}>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

const TourNavigation = ({ className, navigation }) => {
  const { asPath } = useRouter();

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

  const isCurrentPath = (href) => asPath.startsWith(href);

  return (
    <header className={cn(s.container, className)}>
      <nav>
        <ul className={s.checkpoints}>
          {checkpoints.map(({ title, href, checkpoints }, i) => (
            <Link className={s.link} href={href} key={i}>
              <li>
                <span
                  className={cn(s.label, isCurrentPath(href) && s.currentPath)}
                >
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
        <Link className={s.cta} href="/guestbook">
          End Tour
        </Link>
      </nav>
    </header>
  );
};

export default TourNavigation;
