import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .child(S.editor().schemaType('landingPage').documentId('landingPage')),

      S.listItem()
        .title('Farewell Page')
        .child(
          S.editor().schemaType('farewellPage').documentId('farewellPage'),
        ),

      S.divider(),

      S.listItem()
        .title('Studios')
        .schemaType('studio')
        .child(S.documentList().title('Studios').filter('_type == "studio"')),

      S.divider(),

      S.listItem()
        .title('Default SEO')
        .child(S.editor().schemaType('seo').documentId('seo')),

      S.listItem()
        .title('Footer')
        .child(S.editor().schemaType('footer').documentId('footer')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['landingPage', 'seo', 'farewellPage', 'studio', 'footer'].includes(
            listItem.getId(),
          ),
      ),
    ]);
