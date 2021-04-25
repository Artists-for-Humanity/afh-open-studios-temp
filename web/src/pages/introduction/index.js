import React from 'react';
import groq from 'groq';
import client from '@client';

import { TourWrapper } from '@components';
import s from '../styles/introduction.module.scss';

const Introduction = ({ navigation, introduction }) => {
  return <TourWrapper navigation={navigation} sidebar={null}></TourWrapper>;
};

export const getServerSideProps = async () => {
  const introduction = await client.fetch(groq`
    *[_type == 'introduction'][0]{
      title,
      description,
      introduction_video,
      cta
    }
  `);

  const navigation = await client.fetch(groq`
    *[_type == 'navigation']{
      checkpoints[] {
        _type,
        title,
        checkpoints[]->
      },
      finish_tour_cta
    }[0]
  `);

  return {
    props: {
      introduction,
      navigation,
    },
  };
};

export default Introduction;
