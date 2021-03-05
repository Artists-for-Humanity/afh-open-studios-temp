export default {
  title: 'Rich Image',
  name: 'richImage',
  type: 'object',
  fields: [
    {
      title: 'Source',
      name: 'src',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Caption',
      name: 'alt',
      type: 'string',
      description: 'This will be used as alt text.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
