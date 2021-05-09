import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash.isempty';
import get from 'lodash.get';
import { If } from 'react-if';
import groq from 'groq';

import client from '@client';
import { GROQ } from '@utils/constants';
import {
  TourWrapper,
  Closable,
  StudiosSidebar,
  StudiosScene,
  StudiosCarousel,
  VideoPlayer,
} from '@components';
import s from '../styles/studios-studio.module.scss';

const StudioSidebarController = ({ index, content, setPassthrough }) => {
  const [curPrompt, setCurPrompt] = useState(0);
  const type = content._type;

  if (type === 'carousel') {
    return (
      <StudiosSidebar
        heading={index + 1}
        title={content.title}
        description={content.description}
      />
    );
  }

  const { prompts } = content;

  useEffect(() => {
    const videoUrl = get(prompts, `${curPrompt}.video.asset.url`);
    setPassthrough(videoUrl);
  }, [curPrompt]);

  return (
    <StudiosSidebar
      heading={index + 1}
      title={content.title}
      description={content.description}
    >
      <If condition={!isEmpty(prompts)}>
        <ul className={s.prompts}>
          {prompts.map(({ prompt, video }, i) => (
            <li key={i}>
              <button
                className={curPrompt === i && s.active}
                onClick={() => setCurPrompt(i)}
              >
                {prompt}
              </button>
            </li>
          ))}
        </ul>
      </If>
    </StudiosSidebar>
  );
};

const StudioContentController = ({ content, onClose, passthrough }) => {
  const type = content._type;

  if (type === 'carousel') {
    return (
      <StudiosCarousel
        className={s.studioContent}
        images={content.images}
        onClose={onClose}
      />
    );
  }

  return (
    <Closable onClose={onClose}>
      <VideoPlayer className={s.studioContent} url={passthrough} />
    </Closable>
  );
};

const Studio = ({ studio, navigation }) => {
  const [touchpointIndex, setTouchpointIndex] = useState(null);
  const [passthrough, setPassthrough] = useState(null);

  const { short_title, description, scene } = studio;
  const curContent =
    touchpointIndex === null ? {} : scene.content[touchpointIndex];

  const onClose = () => setTouchpointIndex(null);

  const sidebar =
    touchpointIndex === null ? (
      <StudiosSidebar heading={short_title} description={description} />
    ) : (
      <StudioSidebarController
        content={curContent}
        setPassthrough={setPassthrough}
        index={touchpointIndex}
      />
    );

  return (
    <TourWrapper navigation={navigation} sidebar={sidebar}>
      <StudiosScene scene={scene} onSelectTouchpoint={setTouchpointIndex} />
      {touchpointIndex !== null && (
        <StudioContentController
          content={scene.content[touchpointIndex]}
          passthrough={passthrough}
          onClose={onClose}
        />
      )}
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
        scene {
          image,
          touchpoints,
          content[]{
            prompts[] {
              video { asset -> { url } },
              ...
            },
            ...
          },
          ...
        }
      }[0]
  `);

  return {
    notFound: !studio,
    props: {
      studio,
    },
  };
};

export default Studio;
