import { required } from '../../utils/validation';

export default {
  title: 'Visitor Record',
  name: 'visitorRecord',
  type: 'document',
  initialValue() {
    return {
      opt_in_newsletter: false,
      date_time: new Date().toISOString(),
    };
  },
  fields: [
    {
      title: 'First Name',
      name: 'first_name',
      type: 'string',
      validation: required,
      readOnly: true,
    },
    {
      title: 'Last Name',
      name: 'last_name',
      type: 'string',
      validation: required,
      readOnly: true,
    },
    {
      title: 'Email Address',
      name: 'email_address',
      type: 'string',
      readOnly: true,
    },
    {
      title: 'How did the visitor hear about the tour?',
      name: 'hear_about_tour',
      type: 'string',
      readOnly: true,
    },
    {
      title: 'Opted into Newsletter?',
      name: 'opt_in_newsletter',
      type: 'boolean',
      readOnly: true,
    },
    {
      title: 'Date and Time',
      name: 'date_time',
      type: 'datetime',
      readOnly: true,
    },
  ],

  preview: {
    select: {
      firstName: 'first_name',
      lastName: 'last_name',
      email: 'email_address',
      dateTime: 'date_time',
    },

    prepare({ firstName = '', lastName = '', email = '', dateTime = '' }) {
      const date = new Date(dateTime);

      return {
        title: `${firstName} ${lastName} - ${email}`,
        subtitle: date.toDateString(),
      };
    },
  },
};
