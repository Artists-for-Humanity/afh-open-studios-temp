import React from 'react';

import { Image } from '@components';
import s from './styles.module.scss';

const StudiosScene = ({ className, scene }) => {
  return <Image className={s.image} img={scene.image} />;
};

export default StudiosScene;
