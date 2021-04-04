import { required } from '../../utils/validation';

const TourStep = {
  type: 'object',
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
  ],
};

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: required,
    },
    {
      name: 'background_images',
      title: 'Background Images',
      type: 'array',
      description: 'Images of the EpiCenter to show as background.',
      of: [{ type: 'richImage' }],
    },
    {
      name: 'steps',
      title: 'Tour Steps',
      type: 'array',
      description: 'Step by step explanation of the tour.',
      of: [TourStep],
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
      description: 'Prompt to start tour.',
      validation: required,
    },
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'introduction',
    },
  },
};
