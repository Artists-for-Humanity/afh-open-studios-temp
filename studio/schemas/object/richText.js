/**
 * Create a plain rich text type that doesn't support
 * headings, images, or lists.
 */

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',

      styles: [{ title: 'Normal', value: 'normal' }],

      lists: [],

      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
};
