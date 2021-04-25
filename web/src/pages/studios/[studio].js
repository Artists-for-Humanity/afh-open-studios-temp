import React, { useState } from 'react';
import groq from 'groq';
import { useRouter } from 'next/router';

import client from '@client';
import { GROQ } from '@utils/constants';
import {
  TourWrapper,
  StudiosSidebar,
  StudiosScene,
  StudiosCarousel,
} from '@components';
import s from '../styles/studio.module.scss';

const StudioContentController = ({ content, onClose }) => {
  const type = content._type;

  if (type === 'carousel') {
    return (
      <StudiosCarousel
        className={s.carousel}
        images={content.images}
        onClose={onClose}
      />
    );
  }

  return null;
};

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

  const onClose = () => setTouchpointIndex(null);

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={<StudiosSidebar {...sidebarContent} />}
    >
      <StudiosScene scene={scene} onSelectTouchpoint={setTouchpointIndex} />
      {touchpointIndex !== null && (
        <StudioContentController
          content={scene.content[touchpointIndex]}
          onClose={onClose}
        />
      )}
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
