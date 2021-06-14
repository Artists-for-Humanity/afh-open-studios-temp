import React from 'react';
import groq from 'groq';

import client from '@client';
import { TourWrapper, StudiosSidebar, StudiosTable, Link } from '@components';
import { getAttrFromFirst, useCheckIn } from '@utils';
import s from '../styles/studios.module.scss';

const Studios = ({ studios, allStudios, navigation }) => {
  useCheckIn();
  const { title, cta } = studios;
  const firstStudioSlug = getAttrFromFirst(allStudios, 'slug.current');

  return (
    <TourWrapper
      navigation={navigation}
      sidebar={
        <StudiosSidebar title={title} hideInstructions>
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

export const getServerSideProps = async () => {
  const { studios, allStudios } = await client.fetch(groq`{
    "studios": *[_type == 'studiosPage'][0]{
      title,
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
