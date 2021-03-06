import {IoMdOptions as Icon} from 'react-icons/md'

export default {
  name: 'flexibleContentOptions',
  title: 'Options',
  type: 'object',
  icon: Icon,
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Styles',
      name: 'layoutStyles',
      type: 'array',
      description: 'Optional',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'No Top Padding', value: 'noTopPadding'},
          {title: 'No Right Padding', value: 'noRightPadding'},
          {title: 'No Bottom Padding', value: 'noBottomPadding'},
          {title: 'No Left Padding', value: 'noLeftPadding'},
          {title: 'Add a white background in the content area over the main section background', value: 'whiteBackground'}
        ]
      }
    },
    {
      title: 'Vertical Alignment',
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
      title: 'Horizontal Alignment',
      name: 'horizontalAlignment',
      type: 'string',
      description: 'Optional. This should only be used for content that is in a single one column layout.',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Horizontally Align Content to the Center', value: 'horizontalAlignmentCenter'}
        ]
      }
    },
    {
      title: 'Layout Theme',
      name: 'layoutTheme',
      type: 'string',
      description: 'Optional',
      options: {
        list: [
          {title: 'Solid - Blue', value: 'solidBlueTheme'},
          {title: 'Solid - Dark Blue', value: 'solidDarkBlueTheme'},
          {title: 'Solid - Darker Blue', value: 'solidDarkerBlueTheme'},
          {title: 'Solid - Light Gray', value: 'solidLightGrayTheme'},
          {title: 'Solid - Gray', value: 'solidGrayTheme'},
          {title: 'Solid - Black', value: 'solidBlackTheme'}
        ]
      }
    }
  ]
}
