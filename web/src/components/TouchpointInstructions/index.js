import React from 'react';
import s from './styles.module.scss';

const TouchpointInstructions = ({ className }) => {
  return (
    <aside className={s.aside}>
      <img
        src="/touchpoint-instructions.png"
        alt="Instructions to click on touchpoints"
      />
      <p>
        Click on touch points to interact with different areas of the studio.
      </p>
    </aside>
  );
};

export default TouchpointInstructions;
