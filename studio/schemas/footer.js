export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Call to Action',
      name: 'ctaLink',
      type: 'link',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'string',
      description: 'Address and/or contact numbers.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Copyright Information',
      name: 'copyright',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Social Media Links',
      name: 'socialMediaLinks',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Footer',
      };
    },
  },
};
