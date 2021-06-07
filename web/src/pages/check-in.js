import React from 'react';
import groq from 'groq';

import client from '@client';
import { TourWrapper } from '@components';

import s from './styles/check-in.module.scss';

const CheckIn = ({ checkIn, navigation }) => {
  return <TourWrapper navigation={navigation} />;
};

export const getServerSideProps = async () => {
  const checkIn = await client.fetch(groq`
    *[_type == 'checkInPage'][0] {
      title,
      description,
      what_to_expect,
      duration,
      closing_statement,
      tour_options,
      cta,
      purpose_for_check_in
    }
  `);

  return {
    props: {
      checkIn,
    },
  };
};

export default CheckIn;
