import {FaHandsHelping as Icon} from 'react-icons/fa'

export default {
  type: 'object',
  name: 'organization',
  title: 'Organization',
  icon: Icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      title: 'Website URL',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({scheme: ['https', 'http']})
    },
    {
      name: 'logo',
      type: 'mainImage',
      title: 'Logo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
      media: 'logo'
    }
  }
}
