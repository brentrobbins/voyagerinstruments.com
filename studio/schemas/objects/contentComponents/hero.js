import {IoIosImage as Icon} from 'react-icons/io'

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: Icon,
  // liveEdit: false,
  fields: [
    {
      title: 'Layout Style',
      name: 'layoutStyle',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required(),
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Left Aligned', value: 'leftAligned'},
          {title: 'Center Aligned', value: 'centerAligned'}
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Optional'
    },
    {
      name: 'subText',
      title: 'Sub Text',
      type: 'text',
      rows: 2,
      description: 'Optional'
    },

    {
      title: 'Link URL',
      name: 'link',
      type: 'url',
      description: 'Required. Example: For an internal link use: /contact-us/ (include the slashes too). For an external link use the full URL with the https, so Google would be https://google.com',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']}).required()
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Background Image'
    }
    // {
    //   title: 'Content Options',
    //   name: 'flexibleContentOptions',
    //   type: 'flexibleContentOptions'
    // }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'subTitle'
    },
    prepare (selection) {
      const {title, description} = selection
      return {
        title: title,
        subtitle: description,
        media: Icon
      }
    }
  }
}
