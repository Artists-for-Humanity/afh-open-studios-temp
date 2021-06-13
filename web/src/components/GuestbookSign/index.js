import React, { useState } from 'react';
import { If, Then, Else } from 'react-if';
import { GuestbookFarewell } from '@components';
import s from './styles.module.scss';

const GuestbookSign = ({
  className,
  title,
  description,
  image,
  shareConsentText,
}) => {
  const [signed, setSigned] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSigned(true);
  };

  return (
    <If condition={signed}>
      <Then>
        <GuestbookFarewell
          image={image}
          title={title}
          description={description}
        />
      </Then>
      <Else>
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
      </Else>
    </If>
  );
};

export default GuestbookSign;
