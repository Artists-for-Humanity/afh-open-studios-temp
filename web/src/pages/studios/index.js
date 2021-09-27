import React from 'react';
import { If } from 'react-if';
import Player from 'react-player';
import groq from 'groq';
import get from 'lodash.get';

import client from '@client';
import { TourWrapper, StudiosSidebar, StudiosTable, Link } from '@components';
import { getAttrFromFirst, useCheckIn } from '@utils';
import s from '../styles/studios.module.scss';

const Studios = ({ studios, allStudios, navigation }) => {
  useCheckIn();
  const { title, cta } = studios;
  const audioUrl = get(studios, 'audio.asset.url');
  const firstStudioSlug = getAttrFromFirst(allStudios, 'slug.current');

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={
        <StudiosSidebar title={title} hideInstructions>
          <If condition={audioUrl}>
            <Player
              className={s.player}
              width="100%"
              height="60px"
              url={audioUrl}
              controls
            />
          </If>
          <Link className={s.cta} href={`/studios/${firstStudioSlug}`}>
            {cta}
          </Link>
        </StudiosSidebar>
      }
    >
      <StudiosTable studios={allStudios} />
    </TourWrapper>
  );
};

export const getStaticProps = async () => {
  const { studios, allStudios } = await client.fetch(groq`{
    "studios": *[_type == 'studiosPage'][0]{
      title,
      audio { asset -> { url } },
      cta
    },

    "allStudios": *[_type == 'studio'] {
      short_title,
      slug,
      scene {
        image
      }
    },
  }`);

  return {
    props: {
      studios,
      allStudios,
    },
  };
};

export default Studios;
