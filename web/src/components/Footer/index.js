import React from 'react';

import { RichText, Link } from '@components';
import s from './styles.module.scss';

const Footer = ({
  className,
  about,
  contact,
  copyright,
  ctaLink,
  socialMediaLinks,
}) => {
  return (
    <footer>
      <RichText blocks={about} />
      <RichText blocks={contact} />
      <p>{copyright}</p>
      <Link href={ctaLink.url}>{ctaLink.text}</Link>
      <div>
        <p>Follow Us</p>
        <ul>
          {socialMediaLinks.map(({ text, url }) => (
            <li>
              <Link href={url}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
