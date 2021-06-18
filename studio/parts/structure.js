import S from '@sanity/desk-tool/structure-builder';
import { GrDocument } from 'react-icons/gr';
import { BsFillGearFill } from 'react-icons/bs';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Check In')
        .icon(GrDocument)
        .child(S.editor().schemaType('checkInPage').documentId('checkInPage')),

      S.listItem()
        .title('Landing')
        .icon(GrDocument)
        .child(S.editor().schemaType('landingPage').documentId('landingPage')),

      S.listItem()
        .title('Introduction')
        .icon(GrDocument)
        .child(
          S.editor()
            .schemaType('introductionPage')
            .documentId('introductionPage'),
        ),

      S.listItem()
        .title('Studios Introduction')
        .icon(GrDocument)
        .child(S.editor().schemaType('studiosPage').documentId('studiosPage')),

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
        .title('Gallery')
        .icon(GrDocument)
        .child(S.editor().schemaType('galleryPage').documentId('galleryPage')),

      S.listItem()
        .title('Guestbook')
        .icon(GrDocument)
        .child(
          S.editor().schemaType('guestbookPage').documentId('guestbookPage'),
        ),

      S.divider(),

      S.listItem()
        .title('Footer')
        .icon(GrDocument)
        .child(S.editor().schemaType('footer').documentId('footer')),

      S.listItem()
        .title('Site Options')
        .icon(BsFillGearFill)
        .child(S.editor().schemaType('siteOptions').documentId('siteOptions')),

      S.divider(),

      S.listItem()
        .title('Visitors')
        .schemaType('visitorRecord')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('All Visitors')
                .child(
                  S.documentList()
                    .title('All Visitors')
                    .showIcons(false)
                    .filter('_type == "visitorRecord"')
                    .defaultOrdering([
                      { field: '_createdAt', direction: 'desc' },
                    ]),
                ),
              S.listItem()
                .title('Visitors opted into newsletter')
                .child(
                  S.documentList()
                    .title('Visitors opted into newsletter')
                    .showIcons(false)
                    .filter(
                      '_type == "visitorRecord" && email_address != "" && opt_in_newsletter',
                    )
                    .defaultOrdering([
                      { field: '_createdAt', direction: 'desc' },
                    ]),
                ),
            ]),
        ),

      S.listItem()
        .title('Reviews')
        .schemaType('review')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('All Reviews')
                .child(
                  S.documentList()
                    .title('All Reviews')
                    .showIcons(false)
                    .filter('_type == "review"')
                    .defaultOrdering([
                      { field: '_createdAt', direction: 'desc' },
                    ]),
                ),
              S.listItem()
                .title('Reviews with share consent')
                .child(
                  S.documentList()
                    .title('Reviews with share consent')
                    .showIcons(false)
                    .filter('_type == "review" && share_consent')
                    .defaultOrdering([
                      { field: '_createdAt', direction: 'desc' },
                    ]),
                ),
            ]),
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'landingPage',
            'introductionPage',
            'guestbookPage',
            'studiosPage',
            'navigation',
            'seo',
            'galleryPage',
            'checkInPage',
            'visitorRecord',
            'review',
            'studio',
            'footer',
            'siteOptions',
          ].includes(listItem.getId()),
      ),
    ]);
