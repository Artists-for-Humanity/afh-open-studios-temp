import React from 'react';

import { Navigation } from '@components';
import s from './styles/explore.module.scss';

const Explore = (props) => {
  const links = [
    {
      label: 'Studios',
      href: '/explore/studios',
    },
    {
      label: 'Gallery',
      href: '/explore/gallery',
    },
    {
      label: 'End Tour',
      href: '/explore/end',
    },
  ];

  return <Navigation links={links} />;
};

export default Explore;
