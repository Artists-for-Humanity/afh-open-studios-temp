import { required } from '../utils/validation';

export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'About',
      name: 'about',
      type: 'richText',
      description: 'Write a summary explaining AFH.',
      validation: required,
    },
    {
      title: 'Call to Action',
      name: 'ctaLink',
      type: 'link',
      validation: required,
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'richText',
      description: 'Address and/or contact numbers.',
      validation: required,
    },
    {
      title: 'Copyright Information',
      name: 'copyright',
      type: 'string',
      validation: required,
    },
    {
      title: 'Social Media Links',
      name: 'socialMediaLinks',
      type: 'array',
      of: [{ type: 'link' }],
      validation: (Rule) => Rule.max(4),
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Footer',
      };
    },
  },
};
