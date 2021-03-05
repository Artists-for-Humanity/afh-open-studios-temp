import sanity from '@sanity/client';

export default sanity({
  projectId: 'yi3588vu',
  dataset: 'production',
  useCdn: true,
});
