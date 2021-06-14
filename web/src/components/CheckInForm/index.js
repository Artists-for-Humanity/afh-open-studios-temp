import React, { useState } from 'react';
import axios from 'axios';

import { RichText } from '@components';
import s from './styles.module.scss';

const CheckInForm = ({
  className,
  tour_options,
  cta,
  purpose_for_check_in,
}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    hear_about_tour: '',
    opt_in_newsletter: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    //axios.post('/api/visitor', formData);
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
        <button>Why do we ask you to check in?</button>
      </div>
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
            <select id="hear_about_tour" name="hear_about_tour">
              <option value="">Select one...</option>
              {tour_options.map((option) => (
                <option value={option}>{option}</option>
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
    </div>
  );
};

export default CheckInForm;
