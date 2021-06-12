import React from 'react';
import groq from 'groq';

import client from '@client';
import { TourWrapper } from '@components';

import s from './styles/guestbook.module.scss';

const Guestbook = ({ navigation, guestbook }) => {
  return <TourWrapper navigation={navigation}></TourWrapper>;
};

export const getServerSideProps = async () => {
  const guestbook = await client.fetch(groq`
    *[_type == 'guestbookPage'][0] {
      title,
      reviews[] -> {
        first_name,
        last_name,
        review
      },
      share_consent_text,
      primary_cta,
      ctas,
    }
  `);

  return {
    props: {
      guestbook,
    },
  };
};

export default Guestbook;
