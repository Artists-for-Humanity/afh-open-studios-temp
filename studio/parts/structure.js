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

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'landingPage',
            'introductionPage',
            'studiosPage',
            'navigation',
            'seo',
            'farewellPage',
            'galleryPage',
            'checkInPage',
            'studio',
            'footer',
            'siteOptions',
          ].includes(listItem.getId()),
      ),
    ]);
