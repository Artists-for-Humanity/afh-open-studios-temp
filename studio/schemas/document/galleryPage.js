export default {
  title: 'Gallery',
  name: 'galleryPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'richText',
    },
    {
      title: 'Carousel',
      name: 'carousel',
      type: 'array',
      of: [{ type: 'richImage' }],
    },
  ],
};
