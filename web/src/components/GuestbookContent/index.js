import React from 'react';
import cn from 'classnames';
import { If } from 'react-if';
import isEmpty from 'lodash.isempty';

import { GuestbookReviews, GuestbookSign, GuestbookCTAs } from '@components';
import s from './styles.module.scss';

const GuestbookContent = ({ className, guestbook }) => {
  const { reviews } = guestbook;
  const withReviews = !isEmpty(reviews);

  return (
    <div className={cn(s.container, withReviews && s.withReviews)}>
      <If condition={withReviews}>
        <GuestbookReviews reviews={reviews} />
      </If>
      <div className={s.signCtas}>
        <GuestbookSign shareConsentText={guestbook.share_consent_text} />
        <GuestbookCTAs
          primaryCta={guestbook.primary_cta}
          ctas={guestbook.ctas}
        />
      </div>
    </div>
  );
};

export default GuestbookContent;
