import React from 'react';
import { If } from 'react-if';
import Player from 'react-player';
import groq from 'groq';
import get from 'lodash.get';

import client from '@client';
import { TourWrapper, Sidebar, GalleryCarousel } from '@components';
import s from './styles/gallery.module.scss';

const Gallery = ({ navigation, gallery }) => {
  const audioUrl = get(gallery, 'audio.asset.url');

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={
        <Sidebar {...gallery} cta="End Tour" ctaHref="/end">
          <If condition={audioUrl}>
            <Player width="100%" height="60px" url={audioUrl} controls />
          </If>
        </Sidebar>
      }
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
      carousel,
      audio { asset -> { url } }
    }
  `);

  return {
    props: {
      gallery,
    },
  };
};

export default Gallery;
