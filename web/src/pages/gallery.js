import React from 'react';
import groq from 'groq';

import client from '@client';
import { TourWrapper, Sidebar, GalleryCarousel } from '@components';
import s from './styles/gallery.module.scss';

const Gallery = ({ navigation, gallery }) => {
  return (
    <TourWrapper
      navigation={navigation}
      sidebar={<Sidebar {...gallery} cta="End Tour" ctaHref="/end" />}
    >
      <GalleryCarousel images={gallery.carousel} />
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
