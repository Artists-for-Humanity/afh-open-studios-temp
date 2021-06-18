import React from 'react';
import { If } from 'react-if';
import cn from 'classnames';

import { RichText, Link, Image } from '@components';
import s from './styles.module.scss';

const Footer = ({
  className,
  about,
  contact,
  copyright,
  ctaLink,
  socialMediaLinks,
  logo,
}) => {
  return (
    <footer className={cn(s.container, className)}>
      <div className={s.content}>
        <RichText className={s.about} blocks={about} />
        <Link className={s.cta} href={ctaLink.url}>
          {ctaLink.text}
        </Link>
      </div>

      <div className={s.information}>
        <div className={s.contact}>
          <If condition={logo}>
            <Image className={s.logo} img={logo} />
          </If>
          <div>
            <RichText blocks={contact} />
            <p>{copyright}</p>
          </div>
        </div>

        <div className={s.social}>
          <p>Follow Us</p>
          <ul>
            {socialMediaLinks.map(({ text, url }, i) => (
              <li key={i}>
                <Link href={url}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
