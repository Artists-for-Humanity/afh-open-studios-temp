import React from 'react';
import groq from 'groq';
import { useRouter } from 'next/router';

import client from '@client';
import { GROQ } from '@utils/constants';
import { TourWrapper, StudiosSidebar } from '@components';
import s from '../styles/studio.module.scss';

const Studio = ({ short_title, description }) => {
  return (
    <TourWrapper
      sidebar={<StudiosSidebar title={short_title} description={description} />}
    >
      <div>hello</div>
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

  return {
    notFound: !studio,
    props: studio,
  };
};

export default Studio;
