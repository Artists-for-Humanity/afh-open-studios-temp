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

  const getSceneSidebar = (i) => {
    const { content } = scene;
    const { title, description } = content[i];

    return {
      heading: i + 1,
      title: title,
      description: description,
    };
  };

  const defaultSidebar = {
    heading: short_title,
    description,
  };

  const sidebarContent =
    touchpointIndex === null
      ? defaultSidebar
      : getSceneSidebar(touchpointIndex);

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={<StudiosSidebar {...sidebarContent} />}
    >
      <StudiosScene scene={scene} onSelectTouchpoint={setTouchpointIndex} />
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
