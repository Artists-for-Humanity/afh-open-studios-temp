import { required } from '../utils/validation';

export default {
  title: 'Farewell Page',
  name: 'farewellPage',
  type: 'document',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: required,
    },
    {
      title: 'Closing Statement',
      name: 'closingStatement',
      type: 'richText',
      description: 'Final words to part with our visitors.',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'richImage',
      validation: required,
    },
    {
      title: 'Guestbook Call to Action',
      name: 'cta',
      type: 'string',
      description:
        'Encourage visitors to share their experience on the guestbook.',
      validation: required,
    },
    {
      title: 'Other Links',
      name: 'links',
      type: 'array',
      description: 'Other relevant links for visitors to check out.',
      of: [{ type: 'link' }],
      validation: (Rule) => Rule.max(4),
    },
  ],

  preview: {
    select: {
      title: 'heading',
    },
  },
};
