import React from 'react';
import isEmpty from 'lodash.isempty';
import { If } from 'react-if';

import { Link } from '@components';
import s from './styles.module.scss';

const GuestbookCTAs = ({ className, primaryCta, ctas }) => {
  return (
    <div className={s.container}>
      <Link className={s.primary} href={primaryCta.url}>
        {primaryCta.text}
      </Link>
      <If condition={!isEmpty(ctas)}>
        <ul className={s.ctas}>
          {ctas.map(({ text, url }) => (
            <li key={text}>
              <Link href={url}>{text}</Link>
            </li>
          ))}
        </ul>
      </If>
    </div>
  );
};

export default GuestbookCTAs;
