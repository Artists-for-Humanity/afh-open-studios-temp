const sanityClient = require('@sanity/client');

module.exports = sanityClient({
  projectId: 'yi3588vu',
  dataset: 'production',
  useCdn: false,
});
