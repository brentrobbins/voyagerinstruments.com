import {FaHandsHelping as Icon} from 'react-icons/fa'

export default {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  // __experimental_actions: ['update', 'publish'],
  icon: Icon,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'This is only seen and used in the CMS.'
    },
    {
      name: 'partners',
      title: 'Community Partners',
      type: 'array',
      of: [{
        type: 'organization'
      }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
