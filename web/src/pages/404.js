import React from 'react';
import s from './styles/404.module.scss';

const NotFound = (props) => {
  return (
    <div className={s.container}>
      <h1>404 Not Found</h1>
      <p>
        Oops! We can't find what you're looking for. Return to our{' '}
        <a href="/">homepage</a> to learn about this website.
      </p>
    </div>
  );
};

export default NotFound;
