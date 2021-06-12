import React from 'react';
import { If } from 'react-if';
import Player from 'react-player';
import groq from 'groq';
import get from 'lodash.get';

import client from '@client';
import { TourWrapper, Sidebar } from '@components';

import s from './styles/guestbook.module.scss';

const Guestbook = ({ navigation, guestbook }) => {
  const audioUrl = get(guestbook, 'audio.asset.url');

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={
        <Sidebar title={guestbook.title}>
          <If condition={audioUrl}>
            <Player width="100%" height="60px" url={audioUrl} controls />
          </If>
        </Sidebar>
      }
    ></TourWrapper>
  );
};

export const getServerSideProps = async () => {
  const guestbook = await client.fetch(groq`
    *[_type == 'guestbookPage'][0] {
      title,
      audio { asset -> { url } },
      reviews[] -> {
        first_name,
        last_name,
        review
      },
      share_consent_text,
      primary_cta,
      ctas,
    }
  `);

  return {
    props: {
      guestbook,
    },
  };
};

export default Guestbook;
