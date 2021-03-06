export default {
  title: 'Farewell Page',
  name: 'farewellPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Closing Statement',
      name: 'closingStatement',
      type: 'text',
      description: 'Final words to part with our visitors.',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'richImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Guestbook Call to Action',
      name: 'cta',
      type: 'string',
      description:
        'Encourage visitors to share their experience on the guestbook.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Other Links',
      name: 'links',
      type: 'array',
      description: 'Other relevant links for visitors to check out.',
      of: [{ type: 'link' }],
    },
  ],
};
