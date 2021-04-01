import { required } from '../utils/validation';

export default {
  title: 'Site Options',
  name: 'siteOptions',
  type: 'document',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'richImage',
      validation: required,
    },
    {
      title: 'Default SEO',
      name: 'seo',
      type: 'seo',
      validation: required,
    },
  ],
};
