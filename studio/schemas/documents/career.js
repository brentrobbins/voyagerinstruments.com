import {TiBusinessCard as Icon} from 'react-icons/md'

export default {
  name: 'career',
  type: 'document',
  title: 'Careers',
  icon: Icon,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  liveEdit: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'DO NOT change this or it will break your site.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'richDate',
      'timezone': 'America/Denver',
      options: {
        timeFormat: 'h:mm a'
      },
      validation: Rule => Rule.required(),
      description: 'This is used to sort the careers.'
    },
    {
      name: 'flexibleContentLayout',
      title: '(new) Content',
      type: 'array',
      description: 'Add content to your site with this field. There is always four available columns, but the website will only show the columns that have content. So if you add content to only two columns, the site will only show two columns.',
      of: [{
        type: 'flexibleContentLayout'
      }]
    },
    {
      name: 'contentLayout',
      title: '(old) Content',
      type: 'array',
      of: [{
        type: 'contentLayout'
      }]
    },
    {
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seo'
      // validation: Rule => Rule.required()
    }
  ]
}
