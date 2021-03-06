import React from 'react';

import { required } from '../utils/validation';
import Touchpoints from '../components/Touchpoints';

export default {
  title: 'Scene',
  name: 'scene',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: required,
    },
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
      of: [{ type: 'string' }],
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
