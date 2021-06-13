import React, { useState } from 'react';
import s from './styles.module.scss';

const GuestbookSign = ({ className, primaryCta, ctas, shareConsentText }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className={s.container} onSubmit={onSubmit}>
      <div className={s.firstName}>
        <label htmlFor="First Name">First Name</label>
        <input placeholder="First Name" type="text" name="First Name" />
      </div>
      <div className={s.lastName}>
        <label htmlFor="Last Name">Last Name</label>
        <input placeholder="Last Name" type="text" name="Last Name" />
      </div>
      <div className={s.review}>
        <label htmlFor="Review">How was your experience?</label>
        <textarea
          type="text"
          placeholder="Tell us about your experience"
          name="Review"
        />
      </div>
      <div className={s.shareConsent}>
        <input type="checkbox" name="Share Consent" />
        <label htmlFor="Share Consent">{shareConsentText}</label>
      </div>
      <button className={s.sign} type="submit">
        Sign
      </button>
    </form>
  );
};

export default GuestbookSign;
