import {MdPeople as Icon} from 'react-icons/md'

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
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
      name: 'staff',
      title: 'Staff',
      type: 'array',
      of: [{
        type: 'person'
      }]
    },
    {
      name: 'board',
      title: 'Board',
      type: 'array',
      of: [{
        type: 'person'
      }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
