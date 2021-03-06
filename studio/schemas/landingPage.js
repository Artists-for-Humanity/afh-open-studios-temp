import { required } from '../utils/validation';

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
      name: 'introduction',
      title: 'Introduction',
      type: 'richText',
    },
    {
      name: 'epicenterImage',
      title: 'EpiCenter Image',
      type: 'richImage',
      description:
        'Image of the EpiCenter. Preferably a PNG with transparent background',
    },
    {
      name: 'background',
      title: 'Background Information',
      type: 'richText',
      description: 'Brief background information about AFH and the EpiCenter.',
      validation: required,
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
