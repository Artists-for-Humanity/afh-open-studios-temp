import React from 'react';

import { GuestbookReviews, GuestbookSign, GuestbookCTAs } from '@components';
import s from './styles.module.scss';

const GuestbookContent = ({ className, guestbook }) => {
  const { reviews } = guestbook;

  return (
    <div className={s.container}>
      <GuestbookReviews reviews={reviews} />
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
