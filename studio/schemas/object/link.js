import { required } from '../../utils/validation';

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: required,
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: required,
    },
  ],
};
