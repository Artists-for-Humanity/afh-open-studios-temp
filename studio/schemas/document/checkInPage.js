import { required } from '../../utils/validation';

export default {
  title: 'Check In',
  name: 'checkInPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: required,
    },
    {
      title: 'Description',
      name: 'description',
      type: 'richText',
    },
    {
      title: 'What to Expect',
      name: 'what_to_expect',
      description: 'Tell your visitors what to expect out of this tour.',
      type: 'richText',
      validation: required,
    },
    {
      title: 'Duration',
      name: 'duration',
      description: 'Tell your visitors how long the tour could take.',
      type: 'richText',
      validation: required,
    },
    {
      title: 'Closing Statement',
      name: 'closing_statement',
      description: 'Any closing statement before visitors take the tour?',
      type: 'richText',
    },
    {
      title: 'Options For "How did you hear about this tour?"',
      name: 'tour_options',
      type: 'array',
      of: [{ type: 'string' }],
      validation: required,
    },
    {
      title: 'Call to Action',
      name: 'cta',
      type: 'string',
      validation: required,
    },
    {
      title: 'Purpose For Check-in',
      name: 'purpose_for_check_in',
      description:
        'Explain why we ask visitors to check in before starting the tour.',
      type: 'array',
      of: [{ type: 'block' }],
      validation: required,
    },
  ],
};
