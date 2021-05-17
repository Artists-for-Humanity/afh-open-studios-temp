import React from 'react';

import { TourNavigation, MobileCover } from '@components';
import s from './styles.module.scss';

const TourWrapper = ({ className, navigation, sidebar, children }) => {
  return (
    <>
      <div className={s.wrapper}>
        <TourNavigation className={s.navigation} navigation={navigation} />
        <div className={s.sidebar}>{sidebar}</div>
        <div className={s.content}>{children}</div>
      </div>
      <MobileCover className={s.cover} />
    </>
  );
};

export default TourWrapper;
