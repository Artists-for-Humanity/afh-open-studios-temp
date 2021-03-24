import { required } from '../utils/validation';

export default {
  title: 'Studio',
  name: 'studio',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      description: 'Name of this studio.',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Recommended: Click on Generate',
      validation: required,
      options: {
        source: 'title',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Scenes',
      name: 'scenes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'scene' }] }],
    },
  ],
};
