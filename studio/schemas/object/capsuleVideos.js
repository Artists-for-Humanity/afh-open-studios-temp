import { required } from '../../utils/validation';

const capsulePrompt = {
  title: 'Capsule Prompt',
  name: 'capsule_prompt',
  type: 'object',
  fields: [
    {
      title: 'Prompt',
      name: 'prompt',
      type: 'string',
      description: 'Question or topic relevant to this video.',
      validation: required,
    },
    {
      title: 'Video',
      name: 'video',
      type: 'file',
      validation: required,
    },
  ],
};

export default {
  title: 'Capsule Videos',
  name: 'capsule_videos',
  type: 'object',
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
      title: 'Prompts',
      name: 'prompts',
      type: 'array',
      of: [capsulePrompt],
      validation: required,
    },
  ],
};
