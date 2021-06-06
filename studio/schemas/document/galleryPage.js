import { required } from '../../utils/validation';

export default {
  title: 'Gallery',
  name: 'galleryPage',
  type: 'document',
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
      title: 'Audio',
      name: 'audio',
      description: 'Additional audio explanation of this studio.',
      type: 'file',
    },
    {
      title: 'Carousel',
      name: 'carousel',
      type: 'array',
      of: [{ type: 'richImage' }],
      validation: required,
    },
  ],
};
