import { required } from '../../utils/validation';

export default {
  title: 'Review',
  name: 'review',
  type: 'document',

  initialValue() {
    return {
      share_consent: false,
    };
  },

  fields: [
    {
      title: 'First Name',
      name: 'first_name',
      type: 'string',
      validation: required,
    },
    {
      title: 'Last Name',
      name: 'last_name',
      type: 'string',
      validation: required,
    },
    {
      title: 'Review',
      name: 'review',
      type: 'text',
      validation: required,
    },
    {
      title: 'Consent to Share',
      name: 'share_consent',
      type: 'boolean',
      readOnly: true,
    },
  ],

  preview: {
    select: {
      firstName: 'first_name',
      lastName: 'last_name',
      createdAt: '_createdAt',
    },

    prepare({ firstName = '', lastName = '', createdAt }) {
      const date = new Date(createdAt);

      return {
        title: `${firstName} ${lastName}`,
        subtitle: date.toDateString(),
      };
    },
  },
};
