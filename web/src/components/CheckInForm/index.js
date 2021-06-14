import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { If, Then, Else } from 'react-if';
import isEmpty from 'lodash.isempty';
import axios from 'axios';

import { RichText } from '@components';
import s from './styles.module.scss';

const CheckInForm = ({
  className,
  tour_options,
  cta,
  purpose_for_check_in,
}) => {
  const router = useRouter();
  const [viewPurposeForCheckIn, setViewPurposeForCheckIn] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    hear_about_tour: '',
    opt_in_newsletter: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (['first_name', 'last_name'].every((key) => !isEmpty(formData[key]))) {
      axios.post('/api/visitor', formData).then(() => {
        window.localStorage.setItem('lastVisit', new Date().toISOString());

        router.replace('/introduction');
      });
    }
  };

  const onChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    const newValue = isCheckbox ? e.target.checked : e.target.value.trim();

    setFormData({
      ...formData,
      [e.target.name]: newValue,
    });
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2>Check In</h2>
        <button
          onClick={() => setViewPurposeForCheckIn(!viewPurposeForCheckIn)}
        >
          {viewPurposeForCheckIn
            ? 'Back to Check In'
            : 'Why do we ask you to check in?'}
        </button>
      </div>
      <If condition={viewPurposeForCheckIn}>
        <Then>
          <RichText className={s.purpose} blocks={purpose_for_check_in} />
        </Then>
        <Else>
          <form onSubmit={onSubmit}>
            <div className={s.formFields}>
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
              <div className={s.emailAddress}>
                <label htmlFor="email_address">Email Address</label>
                <input
                  placeholder="Email address"
                  type="text"
                  id="email_address"
                  name="email_address"
                  onChange={onChange}
                />
              </div>
              <div className={s.hearAboutTour}>
                <label htmlFor="hear_about_tour">
                  How did you hear about this tour?
                </label>
                <select
                  id="hear_about_tour"
                  name="hear_about_tour"
                  onChange={onChange}
                >
                  <option value="">Select one...</option>
                  {tour_options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className={s.optInNewsletter}>
                <input
                  type="checkbox"
                  id="opt_in_newsletter"
                  name="opt_in_newsletter"
                  onChange={onChange}
                />
                <label htmlFor="opt_in_newsletter">
                  I would like to opt in to AFH’s newsletter
                </label>
              </div>
            </div>
            <button className={s.cta} type="submit">
              Begin Tour
            </button>
          </form>
        </Else>
      </If>
    </div>
  );
};

export default CheckInForm;
