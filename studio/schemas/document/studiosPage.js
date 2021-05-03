import { required } from '../../utils/validation';

export default {
  title: 'Studios',
  name: 'studiosPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: required,
    },
    {
      title: 'Call to Action',
      name: 'cta',
      type: 'string',
      description:
        'Recommended to encourage visitors to start with the first studio.',
      validation: required,
    },
  ],
};
