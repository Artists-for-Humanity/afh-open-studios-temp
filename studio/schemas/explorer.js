import Touchpoints from '../components/explorer/Touchpoints';
import Content from '../components/explorer/Content';

export default {
  title: 'Explorer',
  name: 'explorer',
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
