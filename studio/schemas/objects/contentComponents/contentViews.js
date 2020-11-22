import {MdViewCompact as Icon} from 'react-icons/md'

export default {
  name: 'contentViews',
  title: 'Content View',
  type: 'object',
  icon: Icon,
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Content View',
      name: 'contentView',
      type: 'string',
      description: 'Optional',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'View - Blog Posts', value: 'blogPostView'},
          {title: 'Webform - Contact', value: 'wfContact'},
          {title: 'Google Search', value: 'googleSearch'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'contentView'
    },
    prepare ({title}) {
      let viewTitle = title
      // let title = title
      if (title && title === 'blogPostView') {
        viewTitle = 'View - Blog Posts'
      } else if (title && title === 'wfContact') {
        viewTitle = 'Webform - Contact'
      } else if (title && title === 'googleSearch') {
        viewTitle = 'Google Search'
      } else {
        title = `NO CONTENT`
      }
      return {
        title: viewTitle,
        media: Icon
      }
    }
  }
}
