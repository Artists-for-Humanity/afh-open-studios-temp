import { required } from '../../utils/validation';

export default {
  title: 'Guestbook Page',
  name: 'guestbookPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: required,
    },
    {
      title: 'Audio',
      name: 'audio',
      description: 'Closing audio for the guestbook.',
      type: 'file',
    },
    {
      title: 'Reviews',
      name: 'reviews',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'review' }] }],
    },
    {
      title: 'Share Consent Text',
      name: 'share_consent_text',
      type: 'string',
      validation: required,
    },
    {
      title: 'Primary Call to Action',
      name: 'primary_cta',
      type: 'link',
      validation: required,
    },
    {
      title: 'Calls to Action',
      name: 'ctas',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        {
          type: 'link',
        },
      ],
    },
  ],
};
