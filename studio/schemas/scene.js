import Touchpoints from '../components/Touchpoints';

export default {
  title: 'Scene',
  name: 'scene',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'richImage',
    },
    {
      title: 'Touchpoints',
      name: 'touchpoints',
      type: 'array',
      of: [{ type: 'coordinates' }],
      inputComponent: Touchpoints,
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
