import React, { useState } from 'react';
import get from 'lodash.get';
import groq from 'groq';

import client from '@client';
import { TourWrapper, IntroductionSidebar, VideoPlayer } from '@components';
import s from '../styles/introduction.module.scss';

const Introduction = ({ navigation, introduction }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  const onEnded = () => setVideoEnded(true);

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={
        <IntroductionSidebar
          {...introduction}
          cta={videoEnded ? introduction.cta : null}
        />
      }
    >
      <VideoPlayer
        url={get(introduction, 'introduction_video.asset.url')}
        onEnded={onEnded}
      />
    </TourWrapper>
  );
};

export const getServerSideProps = async () => {
  const { introduction, navigation } = await client.fetch(groq`{
    "introduction": *[_type == 'introductionPage'][0]{
      title,
      description,
      introduction_video{ asset->{ url } },
      cta
    },

    "navigation": *[_type == 'navigation']{
      checkpoints[] {
        _type,
        title,
        checkpoints[]->
      },
      finish_tour_cta
    }[0]
  }`);

  return {
    props: {
      introduction,
      navigation,
    },
  };
};

export default Introduction;
