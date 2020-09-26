import S from '@sanity/desk-tool/structure-builder'

import {MdEmail, MdHome, MdSettings, MdPeople} from 'react-icons/md'
import {FaNewspaper, FaHandsHelping} from 'react-icons/fa'

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

const hiddenDocTypes = listItem =>
  ![
    'siteSettings',
    'home',
    'page',
    // 'contact',
    'webform',
    'landingPage',
    'post',
    'category',
    'tag',
    'navigation'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('sitewide-singleton')
        .title('Sitewide Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .id('home-singleton')
        .title('Home')
        .icon(MdHome)
        .child(
          S.editor()
            .id('home')
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Super Pages')
        .schemaType('page')
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
        ),
      S.listItem()
        .title('Landing Pages')
        .schemaType('landingPage')
        .child(
          S.documentTypeList('landingPage')
            .title('Landing Pages')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('landingPage')
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
        .title('Blog Posts')
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
                    .icon(FaNewspaper)
                ])
            )
        ),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Tags')
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),

      S.listItem()
        .title('Webforms')
        .schemaType('webform')
        .child(S.documentTypeList('webform').title('Webforms')),
      S.listItem()
        .title('Navigation')
        .schemaType('navigation')
        .child(S.documentTypeList('navigation').title('Navigation')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
