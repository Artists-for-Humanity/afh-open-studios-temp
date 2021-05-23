import React, { useState, useRef, useEffect } from 'react';
import get from 'lodash.get';
import isEmpty from 'lodash.isempty';
import { Heading, Button } from '@sanity/ui';
import { RiErrorWarningFill } from 'react-icons/ri';

import { withDocument } from 'part:@sanity/form-builder';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

import Marker from './Marker';
import { getImageUrl, minmax, getPercentage, removeByIndex } from '../../utils';
import s from './styles.css';

/**
 * Utility patch form for Sanity database mutations.
 */
const createPatchFrom = (value) =>
  PatchEvent.from(value === [] ? unset() : set(value));

const Touchpoints = React.forwardRef((props, ref) => {
  const [touchpoints, setTouchpoints] = useState(props.value || []);
  const imageRef = useRef();

  /**
   * There's no alternative to withDocument that is more
   * scoped to the container object. We might have to make
   * this access more flexible in case we embed the
   * object in other documents.
   */
  const imageSourceRef = get(props, 'document.scene.image.src');

  /**
   * Update database when touchpoints changes.
   */
  useEffect(() => {
    props.onChange(createPatchFrom(touchpoints));
  }, [touchpoints]);

  /**
   * Display warning message if
   * image for touchpoints is not uploaded.
   */
  if (!imageSourceRef) {
    return (
      <h3 className={s.warning}>
        <RiErrorWarningFill />
        Please upload image before creating touchpoints.
      </h3>
    );
  }

  /**
   * Get width and height of current image.
   * Find offset percentages for x and y of click.
   */
  const onClick = (e) => {
    const { width, height } = imageRef.current;

    const x = minmax(0, e.nativeEvent.offsetX, width);
    const y = minmax(0, e.nativeEvent.offsetY, height);

    const touchpoint = {
      x: getPercentage(x, width),
      y: getPercentage(y, height),
    };

    setTouchpoints([...touchpoints, touchpoint]);
  };

  /**
   * Remove touchpoint of given index.
   */
  const removeTouchpoint = (i) => {
    setTouchpoints(removeByIndex(touchpoints, i));
  };

  const clearTouchpoints = () => setTouchpoints([]);

  return (
    <div className={s.container}>
      <Heading as="h3">Add Touchpoints</Heading>
      <p>Click on the image to add touchpoints.</p>
      <a ref={ref}>
        <div className={s.imageContainer}>
          <img
            className={s.image}
            ref={imageRef}
            src={getImageUrl(imageSourceRef)}
            onClick={onClick}
          />
          {touchpoints.map(({ x, y }, i) => (
            <Marker
              className={s.marker}
              key={i}
              number={i + 1}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => removeTouchpoint(i)}
            />
          ))}
        </div>
      </a>
      <Button
        mode="ghost"
        tone="critical"
        text="Clear All"
        onClick={clearTouchpoints}
        disabled={isEmpty(touchpoints)}
      />
    </div>
  );
});

Touchpoints.focus = () => {
  this._inputElement.focus();
};

export default withDocument(Touchpoints);
