import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .child(S.editor().schemaType('landingPage').documentId('landingPage')),

      S.listItem()
        .title('Studio')
        .child(S.editor().schemaType('studio').documentId('studio')),

      S.listItem()
        .title('Footer')
        .child(S.editor().schemaType('footer').documentId('footer')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['landingPage', 'studio', 'footer'].includes(listItem.getId()),
      ),
    ]);
