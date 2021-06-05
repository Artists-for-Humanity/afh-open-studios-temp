import React, { useState } from 'react';
import get from 'lodash.get';
import groq from 'groq';

import client from '@client';
import { TourWrapper, IntroductionSidebar, VideoPlayer } from '@components';
import s from '../styles/introduction.module.scss';

const Introduction = ({ navigation, introduction }) => {
  return (
    <TourWrapper
      navigation={navigation}
      sidebar={<IntroductionSidebar {...introduction} cta={introduction.cta} />}
    >
      <VideoPlayer
        url={get(introduction, 'introduction_video.video.asset.url')}
        thumbnail={get(introduction, 'introduction_video.thumbnail.asset.url')}
      />
    </TourWrapper>
  );
};

export const getServerSideProps = async () => {
  const introduction = await client.fetch(groq`
    *[_type == 'introductionPage'][0]{
      title,
      description,
      introduction_video {
        video { asset -> { url } },
        thumbnail { asset -> { url } },
      },
      cta
    }
  `);

  return {
    props: {
      introduction,
    },
  };
};

export default Introduction;
