import {IoMdOptions as Icon} from 'react-icons/md'

export default {
  name: 'flexibleContentLayoutOptions',
  title: 'Layout Options',
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
          {title: 'No Top Margin', value: 'noTopMargin'},
          {title: 'No Bottom Margin', value: 'noBottomMargin'},
          {title: 'No Top Padding', value: 'noTopPadding'},
          {title: 'No Right Padding', value: 'noRightPadding'},
          {title: 'No Bottom Padding', value: 'noBottomPadding'},
          {title: 'No Left Padding', value: 'noLeftPadding'},
          {title: 'Add a white background in the content area over the background color/pattern', value: 'whiteBackground'}
        ]
      }
    },
    {
      title: 'Theme',
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
