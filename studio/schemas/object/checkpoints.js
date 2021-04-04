import { required } from '../../utils/validation';

export default {
  title: 'Checkpoints',
  name: 'checkpoints',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: required,
    },
    {
      title: 'Checkpoints',
      name: 'checkpoints',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'studio' }] }],
      validation: required,
    },
  ],
};
