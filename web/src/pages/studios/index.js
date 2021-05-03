import React from 'react';
import groq from 'groq';

import client from '@client';
import { TourWrapper, StudiosSidebar, StudiosTable, Link } from '@components';
import { getAttrFromFirst } from '@utils';
import s from '../styles/studios.module.scss';

const Studios = ({ studios, allStudios, navigation }) => {
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
  const studios = await client.fetch(groq`
    *[_type == 'studiosPage'][0]{
      title,
      cta
    }
  `);

  const allStudios = await client.fetch(groq`
    *[_type == 'studio'] {
      short_title,
      slug,
      scene {
        image
      }
    }
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
    props: {
      studios,
      navigation,
      allStudios,
    },
  };
};

export default Studios;
