import {IoMdOptions as Icon} from 'react-icons/md'

export default {
  name: 'layoutOptions',
  title: 'Layout Options',
  type: 'object',
  icon: Icon,
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Layout Styles',
      name: 'layoutStyles',
      type: 'array',
      description: 'Optional',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'No Top Padding', value: 'noTopPadding'},
          {title: 'No Bottom Padding', value: 'noBottomPadding'},
          {title: 'No Top Margin', value: 'noTopMargin'},
          {title: 'No Bottom Margin', value: 'noBottomMargin'},
          {title: 'Vertically Center Align Content', value: 'verticallyCenterAlign'},
          {title: 'Add a white background in the content area over the main section background', value: 'whiteBackground'}
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
    // {
    //   title: 'Background Image',
    //   name: 'imageBackground',
    //   type: 'imageBackground',
    //   description: 'Optional'
    // }
  ]
}
