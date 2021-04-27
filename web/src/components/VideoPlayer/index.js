import React, { useState } from 'react';
import cn from 'classnames';
import { If } from 'react-if';
import Player from 'react-player';

import s from './styles.module.scss';

const VideoPlayer = ({ className, url, ...props }) => {
  const [started, setStarted] = useState(false);

  return (
    <div className={cn(s.container, className)}>
      <Player
        url={url}
        width="100%"
        height="100%"
        playing={started}
        controls={started}
        {...props}
      />
      <If condition={!started}>
        <button className={s.play} onClick={() => setStarted(true)}>
          <i className="fas fa-play" />
        </button>
      </If>
    </div>
  );
};

export default VideoPlayer;
