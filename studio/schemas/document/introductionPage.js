import { required } from '../../utils/validation';

export default {
  title: 'Introduction',
  name: 'introductionPage',
  type: 'document',
  initialValue: {
    cta: 'Explore Studios',
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: required,
    },
    {
      title: 'Description',
      name: 'description',
      type: 'richText',
    },
    {
      title: 'Introduction Video',
      name: 'introduction_video',
      type: 'file',
      validation: required,
    },
    {
      title: 'Call to Action',
      name: 'cta',
      type: 'string',
      validation: required,
    },
  ],
};
