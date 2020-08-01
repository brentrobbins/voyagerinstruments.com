export default {
  title: 'Footer Content',
  name: 'footerContent',
  type: 'object',
  fields: [
    {
      name: 'footerMessage',
      type: 'bodyPortableText',
      title: 'Footer Message'
    },
    {
      name: 'footerLogos',
      title: 'Footer Logos',
      type: 'array',
      of: [{
        type: 'logo'
      }]
    },
    {
      name: 'footerImage',
      type: 'mainImage',
      title: 'Footer Image'
    },
    {
      name: 'footerAddressFirstColumn',
      type: 'bodyPortableText',
      title: 'Footer Address First Column'
    },
    {
      name: 'footerAddressSecondColumn',
      type: 'bodyPortableText',
      title: 'Footer Address Second Column'
    }
  ]
}
