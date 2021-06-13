import React from 'react';

import s from './styles.module.scss';

const GuestbookReviews = ({ className, reviews }) => {
  return (
    <ul className={s.container}>
      {reviews.map(({ first_name, last_name, review }) => (
        <li className={s.review}>
          <h3>
            {first_name} {last_name}
          </h3>
          <p>{review}</p>
        </li>
      ))}
    </ul>
  );
};

export default GuestbookReviews;
