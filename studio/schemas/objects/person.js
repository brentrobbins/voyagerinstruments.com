import {MdPerson as Icon} from 'react-icons/md'

export default {
  type: 'object',
  name: 'person',
  title: 'Person',
  icon: Icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name',
      validation: Rule => Rule.required(),
      description: 'Full name plus professional accreditations. Example: Gina Curler, M.A.'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Sub Title',
      description: 'Optional. Add additional info that does not fit under their accreditations or CCC position. Example: Parent of CCCS student'
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address'
    },
    {
      name: 'biography',
      type: 'text',
      title: 'Bio'
    },
    {
      name: 'headshot',
      type: 'mainImage',
      title: 'Headshot'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'headshot'
    }
  }
}
