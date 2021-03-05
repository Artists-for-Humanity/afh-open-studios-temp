import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .child(S.editor().schemaType('landingPage').documentId('landingPage')),

      S.listItem()
        .title('Footer')
        .child(S.editor().schemaType('footer').documentId('footer')),

      S.divider(),

      S.listItem()
        .title('Studios')
        .schemaType('studio')
        .child(S.documentList().title('Studios').filter('_type == "studio"')),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['landingPage', 'studio', 'footer'].includes(listItem.getId()),
      ),
    ]);
