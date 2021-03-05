export default {
  title: 'Studio',
  name: 'studio',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      description: 'Name of this studio.',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Scenes',
      name: 'scenes',
      type: 'array',
      of: [{ type: 'scene' }],
    },
  ],
};
