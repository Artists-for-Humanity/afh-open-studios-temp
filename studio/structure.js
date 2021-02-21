import S from '@sanity/desk-tool/structure-builder';

export default () => {
  const x = S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .child(S.editor().schemaType('landingPage').documentId('landingPage')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !['landingPage'].includes(listItem.getId()),
      ),
    ]);

  return x;
};
