import React, { useState } from 'react';
import cn from 'classnames';
import Player from 'react-player';

import * as gtag from "../../lib/gtag";
import s from './styles.module.scss';

const PlayIcon = React.forwardRef((props, ref) => {
  return (
    <button className={s.play} ref={ref} {...props}>
      <i className="fas fa-play" />
    </button>
  );
});

const VideoPlayer = ({ className, url, thumbnail, ...props }) => {
  const [started, setStarted] = useState(!thumbnail);

  return (
    <div className={cn(s.container, className)}>
      <Player
        url={url}
        width="100%"
        height="100%"
        playIcon={<PlayIcon />}
        light={thumbnail || false}
        playing={started}
        onReady={() => setStarted(true)}
        onPlay={() => {
          gtag.event({
            action: 'play',
            category: 'Video'
          });
        }}
        controls
        {...props}
      />
    </div>
  );
};

export default VideoPlayer;
