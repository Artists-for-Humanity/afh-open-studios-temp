import React, { useState } from 'react';
import groq from 'groq';
import { useRouter } from 'next/router';

import client from '@client';
import { GROQ } from '@utils/constants';
import { TourWrapper, StudiosSidebar, StudiosScene } from '@components';
import s from '../styles/studio.module.scss';

const Studio = ({ studio, navigation }) => {
  const [touchpointIndex, setTouchpointIndex] = useState(null);
  const { short_title, description, scene } = studio;

  const onSelectTouchpoint = (i) => {
    setTouchpointIndex(i);
  };

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={
        <StudiosSidebar heading={short_title} description={description} />
      }
    >
      <StudiosScene scene={scene} onSelectTouchpoint={onSelectTouchpoint} />
    </TourWrapper>
  );
};

export const getServerSideProps = async ({ query }) => {
  const studio = await client.fetch(groq`
    *[_type == 'studio'
      && slug.current == '${query.studio}'
      && ${GROQ.EXCLUDE_DRAFTS}]{
        title,
        short_title,
        slug,
        description,
        scene
      }[0]
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
    notFound: !studio,
    props: {
      studio,
      navigation,
    },
  };
};

export default Studio;
