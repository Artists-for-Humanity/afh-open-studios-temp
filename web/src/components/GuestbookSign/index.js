import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import isEmpty from 'lodash.isempty';
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
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    review: '',
    share_consent: false,
  });
  const [signed, setSigned] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors',
    }).finally(() => setSigned(true));
  };

  const onChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    const newValue = isCheckbox ? e.target.checked : e.target.value.trim();

    setFormData({
      ...formData,
      [e.target.name]: newValue,
    });
  };

  const isNotSignable = ['first_name', 'last_name', 'review'].some((key) =>
    isEmpty(formData[key]),
  );

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
            <label htmlFor="first_name">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              id="first_name"
              name="first_name"
              onChange={onChange}
            />
          </div>
          <div className={s.lastName}>
            <label htmlFor="last_name">Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              id="last_name"
              name="last_name"
              onChange={onChange}
            />
          </div>
          <div className={s.review}>
            <label htmlFor="review">How was your experience?</label>
            <textarea
              type="text"
              placeholder="Tell us about your experience"
              id="review"
              name="review"
              onChange={onChange}
            />
          </div>
          <div className={s.shareConsent}>
            <input
              type="checkbox"
              id="share_consent"
              name="share_consent"
              onChange={onChange}
            />
            <label htmlFor="share_consent">{shareConsentText}</label>
          </div>
          <button className={s.sign} type="submit" disabled={isNotSignable}>
            Sign
          </button>
        </form>
      </Else>
    </If>
  );
};

export default GuestbookSign;
