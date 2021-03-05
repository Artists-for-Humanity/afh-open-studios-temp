export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'epicenterImage',
      title: 'EpiCenter Image',
      type: 'richImage',
      description:
        'Image of the EpiCenter. Preferably a PNG with transparent background',
    },
    {
      name: 'background',
      title: 'Background Information',
      type: 'text',
      description: 'Brief background information about AFH and the EpiCenter.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
      description: 'Prompt to start tour.',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'description',
    },
  },
};
