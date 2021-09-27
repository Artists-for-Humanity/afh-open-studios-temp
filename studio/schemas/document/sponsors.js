import { required } from '../../utils/validation';

const Sponsor = {
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: required,
    },
    {
      title: 'Image',
      name: 'image',
      type: 'richImage',
      validation: required,
    },
  ],
};

export default {
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: required,
    },
    {
      name: 'sponsors',
      title: 'Sponsors List',
      type: 'array',
      of: [Sponsor],
    },
  ],
  preview: {
    select: {
      title: 'label'
    },
  },
};
