import S from '@sanity/desk-tool/structure-builder'

import {MdMenu, MdPeople} from 'react-icons/md'
import {FaBolt} from 'react-icons/fa'
import {BiFileBlank} from 'react-icons/bi'
import {BsNewspaper} from 'react-icons/bs'
import {AiOutlineTag, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'
import {HiOutlineHome} from 'react-icons/hi'
import {RiPagesLine} from 'react-icons/ri'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
import IframePreview from './src/components/previews/iframe/IframePreview'

// Web preview configuration
const remoteURL = 'https://voyagerinstruments-com-1531837545.gtsb.io'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

// const businessDirectoryPreviewURL = (previewURL) => {
//   return `/business-directory${previewURL}`
// }

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const {schemaType} = props
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({previewURL})
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(AiOutlineSetting)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
      // Give it a title
        .title('Pages')
        .icon(BiFileBlank)
        .child(
        // Make a list in the second pane called Portfolio
          S.list()
            .title('Pages')
            .items([
            // Add the first list item
              S.listItem()
                .title('Home page')
                .icon(HiOutlineHome)
                .schemaType('home')
                .child(
                  S.editor()
                    .schemaType('home')
                    .documentId('home')
                    .title('Home page')
                ),
              S.listItem()
                .title('Super Pages')
                .schemaType('page')
                .icon(FaBolt)
                .child(
                  S.documentTypeList('page')
                    .title('Basic Pages')
                    .child(documentId =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('page')
                        .views([
                          S.view.form().icon(EditIcon),
                          S.view
                            .component(IframePreview)
                            .options({previewURL})
                            .title('Web Preview')
                            .icon(EyeIcon)
                        ])
                    )
                )
              //       S.listItem()
              //         .title('Landing Pages')
              //         .schemaType('landingPage')
              //         .icon(RiPagesLine)
              //         .child(
              //           S.documentTypeList('landingPage')
              //             .title('Landing Pages')
              //             .child(documentId =>
              //               S.document()
              //                 .documentId(documentId)
              //                 .schemaType('landingPage')
              //                 .views([
              //                   S.view.form().icon(EditIcon),
              //                   S.view
              //                     .component(IframePreview)
              //                     .options({previewURL})
              //                     .title('Web Preview')
              //                     .icon(EyeIcon)
              //                 ])
              //             )
              //         )
            ])
        ),
      S.listItem()
        .title('Blog')
        .icon(BsNewspaper)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Blog')
            .items([
              // Add the first list item
              S.listItem()
                .title('Blog Posts')
                .icon(BsNewspaper)
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .title('Blog Posts')
                    .child(documentId =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('post')
                        .views([
                          S.view.form().icon(EditIcon),
                          S.view
                            .component(IframePreview)
                            .options({previewURL})
                            .title('Web Preview')
                            .icon(EyeIcon)
                        ])
                    )
                ),
              S.listItem()
                .title('Authors')
                .icon(MdPeople)
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
              S.listItem()
                .title('Categories')
                // .icon(MdLocalOffer)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
              S.listItem()
                .title('Tags')
                .icon(AiOutlineTag)
                .schemaType('tag')
                .child(S.documentTypeList('tag').title('Tags'))
            ])
        ),
      S.listItem()
        // Give it a title
        .title('Webforms')
        .icon(AiOutlineMail)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Webforms')
            .items([
              // Add the first list item
              S.listItem()
                .title('Contact form')
                .icon(AiOutlineMail)
                .schemaType('webform')
                .child(
                  S.editor()
                    .schemaType('webform')
                    .documentId('webform')
                    .title('Contact form')
                )
            ])
        ),

      S.listItem()
        // Give it a title
        .title('Navigation')
        .icon(MdMenu)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Navigation')
            .items([
              // Add the first list item
              S.listItem()
                .title('Main Nav')
                // .icon(MdLocalOffer)
                .schemaType('navigation')
                .child(
                  S.editor()
                    .schemaType('navigation')
                    .documentId('mainNav')
                    .title('Main Nav')
                ),

              S.listItem()
                .title('Footer Nav')
                // .icon(MdLocalOffer)
                .schemaType('navigation')
                .child(
                  S.editor()
                    .schemaType('navigation')
                    .documentId('footerNav')
                    .title('Footer Nav')
                )
            ])
        ),

      ...S.documentTypeListItems().filter(
        listItem =>
          !['category', 'post', 'tag', 'author', 'siteSettings', 'home', 'page', 'landingPage', 'webform', 'navigation'].includes(
            listItem.getId()
          )
      )
    ])
