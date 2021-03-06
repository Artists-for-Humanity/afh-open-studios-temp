import React from 'react';
import Touchpoints from '../components/Touchpoints';

export default {
  title: 'Scene',
  name: 'scene',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'richImage',
      validation: (Rule) => Rule.required(),
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
