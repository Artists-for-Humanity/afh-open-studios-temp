import React from 'react';

import { required } from '../utils/validation';
import Touchpoints from '../components/Touchpoints';

export default {
  title: 'Scene',
  name: 'scene',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'richImage',
      validation: required,
    },
    {
      title: 'Touchpoints',
      name: 'touchpoints',
      type: 'array',
      of: [{ type: 'coordinates' }],
      inputComponent: Touchpoints,
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'carousel' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image.src.asset.url',
    },

    prepare({ title, media }) {
      return {
        title: title || '',
        media: media ? <img src={media} /> : '',
      };
    },
  },
};
