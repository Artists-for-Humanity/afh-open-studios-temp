import React from 'react';

import { TourNavigation, MobileCover } from '@components';
import s from './styles.module.scss';

/**
 * TourWrapper sections different components in the tour UI.
 *
 * TourNavigation on the top, sidebar on the left, and content
 * taking up the remaining space (3/4 in width of page).
 */
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
