export default {
  title: 'Home Header',
  name: 'homeHeader',
  type: 'object',
  fields: [
    {
      name: 'heroBackground',
      title: 'Background Image',
      type: 'image',
      description: 'Required size: 1440px wide by 490px tall.',
      options: {
        hotspot: false
      },
      validation: Rule => Rule.required()
    }
  ]
}
