import { required } from '../../utils/validation';

export default {
  title: 'Video',
  name: 'video',
  type: 'object',
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'file',
      validation: required,
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
  ],
};
