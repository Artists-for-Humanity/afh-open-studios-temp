import { required } from '../../utils/validation';

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
      title: 'Short Title',
      name: 'short_title',
      description:
        'Truncated name of this studio. Default to Title if not provided.',
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
      title: 'Audio',
      name: 'audio',
      description: 'Additional audio explanation of this studio.',
      type: 'file',
    },
    {
      title: 'Carousel',
      name: 'carousel_images',
      type: 'array',
      description: 'Feature additional images of this studio.',
      of: [{ type: 'richImage' }],
    },
    {
      title: 'Scene',
      name: 'scene',
      type: 'scene',
      validation: required,
    },
  ],
};
