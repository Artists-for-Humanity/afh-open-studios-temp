import { required } from '../../utils/validation';

export default {
  title: 'Rich Image',
  name: 'richImage',
  type: 'object',
  fields: [
    {
      title: 'Source',
      name: 'src',
      type: 'image',
      validation: required,
    },
    {
      title: 'Caption',
      name: 'alt',
      type: 'string',
      description: 'This will be used as alt text.',
      validation: required,
    },
  ],
};
