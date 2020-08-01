import {IoMdOptions as Icon} from 'react-icons/md'

export default {
  name: 'contentOptions',
  title: 'Content Options',
  type: 'object',
  icon: Icon,
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Vertical Content Alignment',
      name: 'verticalAlignment',
      type: 'string',
      description: 'Optional',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Vertically Align Content to the Center', value: 'verticalAlignmentCenter'},
          {title: 'Vertically Align Content to the Bottom', value: 'verticalAlignmentBottom'}
        ]
      }
    },
    {
      title: 'Horizontal Content Alignment',
      name: 'horizontalAlignment',
      type: 'string',
      description: 'Optional. This should only be used for content that is in a single one column layout.',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Horizontally Align Content to the Center', value: 'horizontalAlignmentCenter'}
        ]
      }
    }
  ]
}
