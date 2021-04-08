import React from 'react';

import { TourNavigation } from '@components';
import s from './styles.module.scss';

const TourWrapper = ({ className, navigation, sidebar, children }) => {
  return (
    <div className={s.wrapper}>
      <TourNavigation
        className={s.navigation}
        checkpoints={navigation.checkpoints}
        cta={navigation.finish_tour_cta}
      />
      <div className={s.sidebar}>{sidebar}</div>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default TourWrapper;
