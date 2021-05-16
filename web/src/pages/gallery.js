import React from 'react';
import groq from 'groq';

import client from '@client';
import { TourWrapper, IntroductionSidebar, StudiosCarousel } from '@components';
import s from './styles/gallery.module.scss';

const Gallery = ({ navigation, gallery }) => {
  return (
    <TourWrapper
      navigation={navigation}
      sidebar={<IntroductionSidebar {...gallery} cta="End Tour" />}
    >
      <StudiosCarousel images={gallery.carousel} />
    </TourWrapper>
  );
};

export const getServerSideProps = async () => {
  const gallery = await client.fetch(groq`
    *[_type == 'galleryPage'][0] {
      title,
      description,
      carousel
    }
  `);

  return {
    props: {
      gallery,
    },
  };
};

export default Gallery;
