import React, { useState } from 'react';
import cn from 'classnames';
import { If } from 'react-if';
import Player from 'react-player';

import s from './styles.module.scss';

const PlayIcon = (props) => {
  return (
    <button className={s.play} {...props}>
      <i className="fas fa-play" />
    </button>
  );
};

const VideoPlayer = ({ className, url, thumbnail, ...props }) => {
  const [started, setStarted] = useState(false);

  return (
    <div className={cn(s.container, className)}>
      <Player
        url={url}
        width="100%"
        height="100%"
        playing={started}
        controls={started}
        playIcon={<PlayIcon onClick={() => setStarted(true)} />}
        light={thumbnail || true}
        {...props}
      />
    </div>
  );
};

export default VideoPlayer;
