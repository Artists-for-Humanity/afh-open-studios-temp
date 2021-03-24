import { required } from '../utils/validation';

export default {
  title: 'Navigation',
  name: 'navigation',
  type: 'document',
  fields: [
    {
      title: 'Checkpoints',
      name: 'checkpoints',
      type: 'array',
      of: [{ type: 'checkpoints', title: 'Nested checkpoints' }],
    },
    {
      title: 'Finish Tour Call to Action',
      name: 'finish_tour_cta',
      type: 'string',
      validation: required,
    },
  ],
};
