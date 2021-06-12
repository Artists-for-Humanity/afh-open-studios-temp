// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    require('./document/landingPage').default,
    require('./object/richImage').default,
    require('./document/footer').default,
    require('./object/link').default,
    require('./object/scene').default,
    require('./document/studio').default,
    require('./object/coordinates').default,
    require('./document/seo').default,
    require('./object/richText').default,
    require('./document/navigation').default,
    require('./object/checkpoints').default,
    require('./document/siteOptions').default,
    require('./object/carousel').default,
    require('./object/capsuleVideos').default,
    require('./document/introductionPage').default,
    require('./document/studiosPage').default,
    require('./document/galleryPage').default,
    require('./object/video').default,
    require('./document/checkInPage').default,
    require('./document/visitorRecord').default,
    require('./document/review').default,
    // temples: require('./{{ type }}/{{ name }}').default,
  ]),
});
