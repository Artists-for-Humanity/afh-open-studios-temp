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
        .title('Navigation')
        .child(S.editor().schemaType('navigation').documentId('navigation')),

      S.listItem()
        .title('Studios')
        .schemaType('studio')
        .child(
          S.documentList()
            .title('Studios')
            .showIcons(false)
            .filter('_type == "studio"'),
        ),

      S.divider(),

      S.listItem()
        .title('Footer')
        .child(S.editor().schemaType('footer').documentId('footer')),

      S.listItem()
        .title('Site Options')
        .child(S.editor().schemaType('siteOptions').documentId('siteOptions')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'landingPage',
            'navigation',
            'seo',
            'farewellPage',
            'studio',
            'footer',
            'siteOptions',
          ].includes(listItem.getId()),
      ),
    ]);
