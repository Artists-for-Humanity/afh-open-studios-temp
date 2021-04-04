import { required } from '../../utils/validation';

export default {
  title: 'Carousel',
  name: 'carousel',
  type: 'object',
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
      validation: required,
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'richImage' }],
      validation: required,
    },
  ],
};
