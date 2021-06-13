import React from 'react';

import { GuestbookReviews, GuestbookSign } from '@components';
import s from './styles.module.scss';

const GuestbookContent = ({ className, guestbook }) => {
  const { reviews } = guestbook;

  return (
    <div className={s.container}>
      <GuestbookReviews reviews={reviews} />
      <GuestbookSign
        primaryCta={guestbook.primary_cta}
        ctas={guestbook.ctas}
        shareConsentText={guestbook.share_consent_text}
      />
    </div>
  );
};

export default GuestbookContent;
