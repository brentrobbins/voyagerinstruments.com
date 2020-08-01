// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import richDate from 'part:@sanity/form-builder/input/rich-date/schema'

// document schemas
import page from './documents/page'
import landingPage from './documents/landingPage'
import home from './documents/home'
// import contact from './documents/contact'
import siteSettings from './documents/siteSettings'
import navigation from './documents/navigation'
import post from './documents/post'
import category from './documents/category'
import tag from './documents/tag'
import career from './documents/career'

// Object types
import siteLink from './objects/siteLink'
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import seo from './objects/seo'
import form from './objects/form'
import youtube from './objects/youtube'
import slideshow from './objects/slideShow'
import pdfFile from './objects/pdfFile'
import slideImage from './objects/slideImage'
import imageGallery from './objects/imageGallery'
import iframe from './objects/iframe'
import location from './objects/location'
import link from './objects/link'
import singleLink from './objects/singleLink'
import logo from './objects/logo'
import alert from './objects/alert'
import person from './objects/person'
import contentLayout from './objects/contentComponents/contentLayout'
import columnContent from './objects/contentComponents/columnContent'
import sectionHeading from './objects/contentComponents/sectionHeading'
import cta from './objects/contentComponents/cta'
import textBlock from './objects/contentComponents/textBlock'
import callOut from './objects/contentComponents/callOut'
import imageComponent from './objects/contentComponents/imageComponent'
import vimeo from './objects/vimeo'
import layoutOptions from './objects/contentComponents/layoutOptions'
import imageBackground from './objects/contentComponents/imageBackground'
import footerContent from './objects/footerContent'
import homeHeader from './objects/homeHeader'
import contentOptions from './objects/contentComponents/contentOptions'
import contentViews from './objects/contentComponents/contentViews'
import webform from './documents/webform'
import team from './documents/team'
import partner from './documents/partner'
import organization from './objects/organization'
import flexibleContentOptions from './objects/contentComponents/flexibleContentOptions'
import flexibleContentLayout from './objects/contentComponents/flexibleContentLayout'
import flexibleContentLayoutOptions from './objects/contentComponents/flexibleContentLayoutOptions'
import flexibleContent from './objects/contentComponents/flexibleContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    richDate,
    siteSettings,
    page,
    landingPage,
    home,
    post,
    category,
    tag,
    // contact,
    mainImage,
    siteLink,
    navigation,
    seo,
    form,
    bodyPortableText,
    youtube,
    slideshow,
    pdfFile,
    slideImage,
    imageGallery,
    iframe,
    location,
    link,
    singleLink,
    logo,
    contentLayout,
    columnContent,
    sectionHeading,
    cta,
    textBlock,
    callOut,
    imageComponent,
    vimeo,
    layoutOptions,
    imageBackground,
    alert,
    person,
    career,
    footerContent,
    homeHeader,
    contentOptions,
    contentViews,
    webform,
    team,
    partner,
    organization,
    flexibleContentOptions,
    flexibleContent,
    flexibleContentLayout,
    flexibleContentLayoutOptions
  ])
})
