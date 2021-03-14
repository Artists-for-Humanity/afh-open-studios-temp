import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Landing')
                .child(
                  S.editor()
                    .schemaType('landingPage')
                    .documentId('landingPage'),
                ),

              S.listItem()
                .title('Farewell')
                .child(
                  S.editor()
                    .schemaType('farewellPage')
                    .documentId('farewellPage'),
                ),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Studios')
        .schemaType('studio')
        .child(
          S.documentList()
            .title('Studios')
            .showIcons(false)
            .filter('_type == "studio"'),
        ),

      S.listItem()
        .title('Scenes')
        .schemaType('scene')
        .child(S.documentList().title('Scenes').filter('_type == "scene"')),

      S.divider(),

      S.listItem()
        .title('Footer')
        .child(S.editor().schemaType('footer').documentId('footer')),

      S.listItem()
        .title('SEO')
        .child(S.editor().schemaType('seo').documentId('seo')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'landingPage',
            'scene',
            'seo',
            'farewellPage',
            'studio',
            'footer',
          ].includes(listItem.getId()),
      ),
    ]);